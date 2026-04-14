# Architecture Overview

Complete understanding of Laborit's system design, layers, and project
structure.

## System Architecture

Laborit follows a **layered, domain-driven design** with clear separation of
concerns:

```
┌─────────────────────────────────────────┐
│     Presentation Layer (UI)              │
│    React Components & Pages              │
│  - Features                              │
│  - UI Components                         │
│  - Pages & Routing                       │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│   Infrastructure Layer                   │
│    Services & Integrations               │
│  - Authentication                        │
│  - Caching & Query Keys                 │
│  - Internationalization                  │
│  - State Management (Zustand)            │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      HTTP Client Layer (API)             │
│    API Communication                     │
│  - Orval-Generated Client                │
│  - HTTP Interceptors                     │
│  - Error Handling                        │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│        Core / Domain Layer               │
│      Business Logic & Types              │
│  - Entities                              │
│  - Use Cases                             │
│  - Validation Logic                      │
│  - Custom Errors                         │
│  - Type Definitions                      │
└──────────────────────────────────────────┘
```

---

## Project Structure

### Root Level

```
src/
├── app/              # Next.js App Router pages & layouts
├── core/             # Domain layer (entities, use-cases, types)
├── infra/            # Infrastructure (auth, cache, i18n, stores)
├── http/             # HTTP client (API communication)
├── presentation/     # UI components & features
├── mocks/            # MSW mocks for E2E testing
└── instrumentation-client.ts
```

### Layer Descriptions

#### 1. **Presentation Layer** (`src/presentation/`)

**Purpose:** User interface and user interactions

**Subdirectories:**

- `ui/` — Reusable UI components
  - `base-components/` — Buttons, forms, cards, etc.
  - `shadcn/` — shadcn/ui components (57+)
  - `typography/` — Text and heading utilities
  - `magicui/` — Animated components
  - `custom/` — Project-specific components
- `features/` — Feature modules\
  - `splash/` — Splash screen
  - `onboarding/` — User onboarding
  - `chat/` — Chat functionality
  - `profile/` — User profiles
  - `payment-methods/` — Payment management
  - `customer-support/` — Support
  - Other features...
- `providers/` — Context & providers (auth, theme, etc.)

**Key Files:**

- `src/app/` — App Router pages, layouts, Server Actions
- `src/app/api/` — API route handlers

#### 2. **Infrastructure Layer** (`src/infra/`)

**Purpose:** System services and cross-cutting concerns

**What Lives Here:**

- **Authentication** — User auth, token management
- **Cache** — Query key factory, revalidation strategies
- **i18n** — Internationalization (multi-language support)
- **Stores** — Zustand state management stores
- **HTTP Interceptors** — API request/response handling
- **Storage** — Local/session storage utilities

#### 3. **HTTP Client Layer** (`src/http/`)

**Purpose:** API communication and HTTP operations

**What Lives Here:**

- **generated/** — Orval-generated TypeScript API client
- **contracts/** — Request/response type definitions
- **mutators/** — Custom axios interceptors
- **API Resources** — Organized by endpoint

**Key Concept:** API client is auto-generated from OpenAPI/Swagger spec for type
safety.

#### 4. **Core / Domain Layer** (`src/core/`)

**Purpose:** Business logic and domain types

**Subdirectories:**

- `entities/` — Business entities (User, Post, etc.)
- `use-cases/` — Application use cases & business logic
- `errors/` — Custom error classes
- `types/` — Shared type definitions
- `validation/` — Validation schemas
- `mappers/` — Data transformation between layers
- `utils/` — Domain utilities

**Key Principle:** Core layer is **framework-agnostic**. It should work without
React, Next.js, or any web framework.

#### 5. **Mocks** (`src/mocks/`)

**Purpose:** Mock Service Worker (MSW) for development/testing

**What Lives Here:**

- API request handlers for E2E testing
- Mock data factories
- Storybook integration

---

## Data Flow

### Feature Request Flow

```
User Action
    ↓
Presentation/Feature Component
    ↓
Core/Use Case (business logic)
    ↓
HTTP Client (makes API call)
    ↓
Backend API
    ↓
HTTP Client (receives response)
    ↓
Response Mapper (core layer)
    ↓
State Update (Zustand/React State)
    ↓
Component Re-render
    ↓
UI Update
```

### Example: User Login

```typescript
// 1. Component (Presentation)
<LoginForm onSubmit={handleLogin} />

// 2. Handler calls use case (Core)
const loginUseCase = new LoginUseCase(apiClient)
const result = await loginUseCase.execute(email, password)

// 3. Use case calls API (HTTP)
const response = await this.apiClient.auth.login({
  email,
  password
})

// 4. Mapper transforms response (Core)
const user = UserMapper.toDomain(response)

// 5. Store updates state (Infra)
authStore.setUser(user)

// 6. Component updates (Presentation)
useEffect(() => {
  if (user) {
    router.push('/dashboard')
  }
}, [user])
```

---

## Key Patterns

### Server Actions

Next.js Server Actions enable calling server-side functions directly from
components:

```typescript
// Defined in component or separate file
'use server'

export async function createPost(formData: FormData) {
  const content = formData.get('content')
  // Server-only logic here
  return await db.posts.create({ content })
}

// Called from client component
export function CreatePostForm() {
  async function handleSubmit(data) {
    await createPost(formData)
  }
  // JSX...
}
```

See [Server Actions Pattern](../patterns/SERVER_ACTIONS.md)

### Cache Revalidation

Strategically revalidate cached data after mutations:

```typescript
import { revalidatePath, revalidateTag } from 'next/cache'

export async function updateUser(id: string, data: UserFormData) {
  const result = await useCase.updateUser(id, data)

  // Revalidate cached data
  revalidatePath('/profile')
  revalidateTag(`user-${id}`)

  return result
}
```

See [Cache Revalidation Pattern](../patterns/CACHE_REVALIDATION.md)

### Dependency Injection

Use constructor injection for loose coupling:

```typescript
export class CreatePostUseCase {
  constructor(
    private apiClient: ApiClient,
    private notificationService: NotificationService,
    private logger: Logger,
  ) {}

  async execute(content: string) {
    try {
      const post = await this.apiClient.posts.create({ content })
      this.notificationService.success('Post created!')
      return post
    } catch (error) {
      this.logger.error('Failed to create post', error)
      throw error
    }
  }
}
```

---

## Technology Choices

| Layer              | Technology         | Why                                   |
| ------------------ | ------------------ | ------------------------------------- |
| **Presentation**   | React 19           | Component-based UI, ecosystem support |
| **Routing**        | Next.js 16         | App Router, server components         |
| **Styling**        | Tailwind CSS v4    | Utility-first, responsive design      |
| **Components**     | shadcn/ui          | Production-ready, accessible          |
| **State (Global)** | Zustand            | Lightweight, TypeScript-first         |
| **State (Server)** | TanStack Query     | Server state sync, caching            |
| **Forms**          | React Hook Form    | Lightweight, performance-focused      |
| **API Client**     | Orval (axios)      | Type-safe, auto-generated             |
| **Type Safety**    | TypeScript         | Static type checking                  |
| **Testing**        | Vitest             | Fast, Vite-native                     |
| **E2E Testing**    | Playwright/Cypress | Browser automation                    |
| **Mocking**        | MSW                | Request mocking for tests/stories     |

---

## File Naming Conventions

### Component Files

```
Feature Component:
- LoginForm.tsx
- LoginForm.types.ts (if complex types)
- LoginForm.module.css (scoped styles if needed)
- LoginForm.test.tsx
- LoginForm.stories.tsx (Storybook)

Utility/Hook:
- useAuthStore.ts
- useAsync.ts
```

### Page Files

```
Next.js App Router:
- page.tsx (route page)
- layout.tsx (route layout)
- error.tsx (error boundary)
- loading.tsx (loading skeleton)
```

### Type Files

```
- user.types.ts
- auth.types.ts
- (or .types.ts with interface User inside)
```

---

## Class vs Functional Components

**Functional components for:**

- UI rendering
- React hooks
- All new code

**Classes for:**

- Error boundaries (if needed)
- Use cases (business logic)
- Services & utilities

---

## Best Practices

### 1. Keep Layers Separate

❌ Don't:

```typescript
// In a component
const user = await fetch('/api/user').then((r) => r.json())
```

✅ Do:

```typescript
// In a component
const user = await userUseCase.getProfile()
```

### 2. Use TypeScript Types

❌ Don't:

```typescript
const handleSubmit = (data: any) => {
  /* ... */
}
```

✅ Do:

```typescript
interface FormData {
  email: string
  password: string
}
const handleSubmit = (data: FormData) => {
  /* ... */
}
```

### 3. Compose Components

❌ Don't:

```typescript
// Huge component with everything
export function Dashboard() {
  // 500+ lines of code
}
```

✅ Do:

```typescript
export function Dashboard() {
  return (
    <div className="space-y-6">
      <Header />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  )
}
```

### 4. Separate Logic from Rendering

❌ Don't:

```typescript
export function UserProfile() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('/api/user')
      .then((r) => r.json())
      .then(setUser)
  }, [])
  // 200 lines of JSX
}
```

✅ Do:

```typescript
// Hook (infra/hooks)
function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userUseCase.getUser(id)
  })
}

// Component (presentation)
export function UserProfile({ userId }: Props) {
  const { data: user } = useUser(userId)
  return <UserCard user={user} />
}
```

---

## Testing Strategy

### Unit Tests

Test business logic in isolation:

- Use cases
- Validators
- Mappers
- Utilities

### Integration Tests

Test layer interactions:

- Component + hooks
- Use case + API
- Store updates

### E2E Tests

Test user workflows:

- Login → Create post → Logout
- Full feature scenarios

See [Development Workflow](../README.md#development-workflow)

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs) — Framework guide
- [React Documentation](https://react.dev/) — React API
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) — Type system
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Zustand](https://zustand-team.vercel.app/docs) — State management
- [TanStack Query](https://tanstack.com/query/latest) — Server state
- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
  — Design philosophy

---

**Last Updated:** April 14, 2026 | **Pattern:** Layered Domain-Driven Design
