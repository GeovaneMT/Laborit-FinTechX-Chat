# Project Development Setup

Get your local development environment set up and running.

## Prerequisites

- **Node.js** — Version 18 or higher (check: `node --version`)
- **pnpm** — Package manager (install: `npm install -g pnpm`)
- **Git** — Version control
- **Code Editor** — VS Code recommended (with extensions)

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd Teste\ técnico\ Laborit\ -\ Frontend
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Create Environment Files

```bash
# Copy environment template
cp .env.example .env.local
```

Update `.env.local` with your values:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Auth (if applicable)
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain

# Other configuration
# ...
```

### 4. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Development Commands

### Running

```bash
# Start development server (with hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

### Code Quality

```bash
# Run ESLint
pnpm lint

# Run type checking
pnpm type-check

# Format code with Prettier
pnpm format

# Format and fix issues
pnpm format:fix
```

### Documentation

```bash
# Start Storybook (component showcase)
pnpm storybook

# Build Storybook
pnpm build:storybook
```

---

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── api/         # API routes
│   ├── [locale]/    # Locale segment
│   └── ...
├── core/            # Domain layer
│   ├── entities/    # Business entities
│   ├── use-cases/   # Application use cases
│   ├── errors/      # Custom errors
│   └── types/       # Shared types
├── infra/           # Infrastructure layer
│   ├── auth/        # Authentication
│   ├── cache/       # Caching
│   ├── i18n/        # Internationalization
│   └── stores/      # State management
├── http/            # HTTP client layer
│   ├── generated/   # Orval-generated client
│   └── ...contracts
├── presentation/    # UI layer
│   ├── ui/          # Reusable components
│   ├── features/    # Feature modules
│   └── providers/   # Context providers
└── mocks/           # MSW mocks

docs-v2/            # Documentation (this folder!)
.storybook/         # Storybook configuration
```

For detailed architecture, see [Architecture Overview](./architecture/).

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Useful VS Code Extensions

### Recommended

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "unifiedjs.vscode-mdx"
  ]
}
```

Install command:

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
code --install-extension unifiedjs.vscode-mdx
```

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process using port 3000 (macOS/Linux)
lsof -ti :3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing

```bash
# Clear cache
pnpm install --no-frozen-lockfile
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### TypeScript Errors

```bash
# Regenerate TypeScript definitions
pnpm type-check

# Update Orval API client
pnpm orval
```

### Build Failures

```bash
# Clean build
rm -rf .next node_modules
pnpm install
pnpm build
```

---

## Git Workflow

### Creating a Feature Branch

```bash
# Update main branch
git checkout main
git pull

# Create feature branch
git checkout -b feature/your-feature-name
```

### Before Committing

```bash
# Type check
pnpm type-check

# Lint
pnpm lint

# Test
pnpm test

# Format
pnpm format:fix
```

### Committing

```bash
git add .
git commit -m "feat: add new feature description"
git push origin feature/your-feature-name
```

---

## Read Next

- [Architecture Overview](./architecture/) — Understand system design
- [Component Library](./component-docs/) — Browse available components
- [Best Practices](./best-practices.md) — Development guidelines
- [Design System](./design-system/) — Design tokens and guidelines

---

**Stuck? Check:** [Common Questions](./README.md#common-questions) or ask your
team!
