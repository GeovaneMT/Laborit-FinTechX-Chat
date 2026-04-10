# Prompt Para Gerar Uma Aplicacao Next.js 16

Voce e um arquiteto senior de frontend. Gere uma nova aplicacao web com **arquitetura praticamente identica** a descrita abaixo, mas **sem copiar regra de negocio, nomenclatura de dominio, fluxos, textos ou contratos do projeto original**.

Replique apenas o blueprint tecnico: stack, estrutura de pastas, camadas, convencoes, limites de dependencia, bootstrap, roteamento, cache, formularios, UI, testes e organizacao MVVM + DDD para frontend.

Use dominio neutro. Se precisar de exemplos, use nomes como `item`, `profile`, `dashboard`, `settings`, `feature-a`, `feature-b`.

## Objetivo

Entregue um projeto **implementado em codigo**, pronto para desenvolvimento, com:

1. estrutura de diretorios
2. arquivos-base e configuracoes
3. rotas e features minimas
4. exemplos suficientes para provar a arquitetura
5. breve explicacao final da organizacao

## Stack obrigatoria

- Next.js 16 com App Router
- React 19
- TypeScript estrito
- `pnpm`
- Turbopack
- Server Components
- Cache Components com `cacheComponents: true`
- `use cache`, `cacheLife`, `cacheTag`, `updateTag`, `revalidateTag`, `revalidatePath`
- Server Actions como porta principal para integracoes HTTP com o backend
- Orval para gerar clients tipados a partir de OpenAPI
- TanStack Query para GETs client-side com prefetch server-side + dehydration/hydration
- TanStack Form
- TanStack Table + TanStack Virtual
- Zustand
- Zustand V4
- Tailwind CSS v4
- CVA
- `tailwind-merge`
- `shadcn/ui` + Radix UI
- `@radix-ui/react-slot` para `asChild`
- `motion`
- `msw`
- Vitest + Testing Library
- ESLint com `eslint-plugin-boundaries`
- `oxlint`
- i18n

## Arquitetura

Organize a aplicacao em `core`, `infra`, `http`, `presentation` e `app`, mesclando DDD leve no frontend com MVVM por feature.

- `core/`: entidades, value objects, contratos, tipos, casos de uso puros, constantes e utilitarios sem React
- `infra/`: auth, analytics, cookies, cache, i18n, stores, adaptadores, mapeadores, integracao com runtime e suporte ao framework
- `http/`: `http-resource`, rotas tecnicas, mutators, configuracao do Orval, codigo gerado e wrappers HTTP
- `presentation/`: UI, pattern, layouts, features, providers e view models
- `app/`: App Router, route groups, layouts, pages, loading, error, not-found e composicao final
- `mocks/`: MSW para dev e testes

### MVVM + DDD

- use MVVM por feature
- `presentation/features/*/view-models/` concentra estado de tela, orquestracao de queries/actions e adaptacao para UI
- `presentation/features/*/components/` representa a View e deve ser declarativa
- `core/` concentra regras puras e altamente testaveis
- `infra/` implementa detalhes tecnicos
- `http/` concentra transporte e acesso ao backend
- evite DDD academico demais; use apenas abstracoes que aumentem clareza, reuso e testabilidade

## Regras de dependencia

- `core` importa apenas de `core`
- `infra` importa de `core` e `infra`
- `http` importa de `core`, `infra` e `http`
- `presentation/ui` importa de `presentation/ui`, libs de UI e utilitarios visuais compartilhados
- `presentation/pattern` importa de `core`, `infra`, `presentation/ui` e `presentation/pattern`
- `presentation/layouts` importa de `core`, `infra`, `presentation/ui`, `presentation/pattern` e `presentation/layouts`
- `presentation/features` importa de `core`, `infra`, `http`, `presentation/ui`, `presentation/pattern` e `presentation/features`
- `app` importa de `core`, `infra`, `http`, `presentation` e `app`
- `mocks` importa de `core`, `infra`, `http`, `mocks` e `presentation/features`

Reforce isso com `eslint-plugin-boundaries`.

## Convencoes obrigatorias

- nao use barrel exports
- prefira `type` a `interface`
- prefira funcoes puras a classes
- use path aliases
- evite casts desnecessarios
- centralize query keys, query options, tags de cache e funcoes de acesso a dados
- `page.tsx` e `layout.tsx` devem ser finos
- routes, pages, layouts, route handlers e Server Actions devem ser finos e delegar comportamento para camadas apropriadas
- `presentation/ui/` nao conhece dominio
- `presentation/pattern/` nao conhece feature especifica
- componentes de feature delegam comportamento para view models
- componentes manuais composicionais devem aceitar `asChild` com `Slot` do Radix
- prefira `shadcn/ui` sempre que houver componente equivalente
- todo formulario nasce de schema validado
- toda mutacao define claramente a estrategia de invalidacao de cache
- nenhuma chamada HTTP direta em Client Components

## Path aliases

- `@/*` -> `src/*`
- `@app/*` -> `src/app/*`
- `@core/*` -> `src/core/*`
- `@infra/*` -> `src/infra/*`
- `@http/*` -> `src/http/*`
- `@presentation/*` -> `src/presentation/*`
- `@ui/*` -> `src/presentation/ui/*`
- `@pattern/*` -> `src/presentation/pattern/*`
- `@features/*` -> `src/presentation/features/*`
- `@layouts/*` -> `src/presentation/layouts/*`
- `@mocks/*` -> `src/mocks/*`

## Codigo base obrigatorio em `core`

Inclua tambem uma implementacao de `Either` em `core`, com teste unitario correspondente, seguindo exatamente esta ideia estrutural:

### `@core/either.ts`

```ts
// Error
export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return false
  }

  isLeft(): this is Left<L, R> {
    return true
  }
}

// Success
export class Right<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return true
  }

  isLeft(): this is Left<L, R> {
    return false
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
```

### `@core/either.spec.ts`

```ts
import { Either, left, right } from '@core/either'

function doSomeThing(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const result = doSomeThing(true)

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

test('error result', () => {
  const result = doSomeThing(false)

  expect(result.isLeft()).toBe(true)
  expect(result.isRight()).toBe(false)
})
```

## Estrutura esperada

```text
src/
  app/
    (public)/
      layout.tsx
      login/page.tsx
      register/page.tsx
    (private)/
      layout.tsx
      dashboard/page.tsx
      settings/page.tsx
      items/page.tsx
      items/[itemId]/page.tsx
    api/
      revalidate/route.ts
    global-error.tsx
    not-found.tsx
    layout.tsx
    loading.tsx
    page.tsx
  core/
    entities/
    value-objects/
    contracts/
    mappers/
    use-cases/
    __specs__/
    constants.ts
    ids.ts
    utils.ts
  infra/
    analytics/
    auth/
    cache/
    cookies/
    i18n/
    stores/
    server/
    __specs__/
    app-store.ts
    auth-context.ts
    auth-provider.tsx
    auth-session.ts
    cache-life.ts
    cache-tags.ts
    i18n.ts
    queries.ts
    session-store.ts
  http/
    client/
    contracts/
    generated/
    mutators/
    routes/
    __specs__/
    http-resource.ts
    orval.config.ts
  presentation/
    ui/
      shadcn/
      __specs__/
      variants.ts
      button.tsx
      input.tsx
      dialog.tsx
      popover.tsx
      form.tsx
      table.tsx
      badge.tsx
      tabs.tsx
      header.tsx
      loading.tsx
      toaster.tsx
    pattern/
      __specs__/
      form.tsx
      form.contexts.ts
      form.hooks.ts
      data-grid.tsx
      friendly-error-dialog.tsx
      widget-boundary.tsx
    layouts/
      public-layout.tsx
      private-layout.tsx
      onboarding-layout.tsx
      pages/not-found-page.tsx
    features/
      dashboard/
        actions.ts
        hooks.ts
        schemas.ts
        components/
        view-models/
        __specs__/
      items/
        actions.ts
        hooks.ts
        schemas.ts
        components/
        view-models/
        __specs__/
      settings/
        actions.ts
        hooks.ts
        schemas.ts
        components/
        view-models/
        __specs__/
    providers/
      query-provider.tsx
  mocks/
    browser.ts
    handlers.ts
    server.ts
    setup-specs.ts
  instrumentation-client.ts
  proxy.ts
```

## Bootstrap e providers

Implemente o bootstrap nesta ordem:

1. habilitar `cacheComponents: true` em `next.config.ts`
2. carregar locale e sessao no servidor
3. executar prefetch server-side das queries iniciais da rota
4. hidratar TanStack Query no cliente
5. iniciar MSW em dev quando habilitado
6. iniciar instrumentacao/tracking
7. renderizar `app/layout.tsx` com i18n, auth, query provider/hydration, estado cliente e `Toaster`

No `app/layout.tsx`, inclua:

- `html` e `body`
- locale inicial
- `AuthProvider`
- provider de query/hidratacao
- provider de consentimento/cookies se existir
- `Toaster`
- metadata base
- devtools apenas em desenvolvimento quando fizer sentido

Tambem implemente `app/not-found.tsx`, `app/global-error.tsx` e `app/loading.tsx`.

## Roteamento e acesso

Use App Router com boundaries:

- `(public)` para rotas publicas
- `(private)` para rotas privadas

Regras:

- rotas devem compor layouts e features, nao concentrar regra
- validacao de acesso no servidor antes do render
- `src/proxy.ts` deve controlar acesso otimista, redirecionar usuarios nao autenticados para fora de rotas privadas e, quando fizer sentido, impedir acesso de usuarios autenticados a `/login` e `/register`
- use `searchParams` tipados e saneados quando houver estado em URL

Inclua exemplos:

- `/login`
- `/register`
- `/dashboard`
- `/settings`
- `/items`
- `/items/[itemId]`

## Dados, cache e HTTP

Siga estas regras:

- toda integracao HTTP com o backend principal acontece via Server Actions
- GET inicial usa prefetch server-side + dehydration/hydration
- GET client-side subsequente usa TanStack Query
- o `queryFn` client-side deve chamar uma Server Action dedicada para leitura
- leituras reaproveitaveis devem usar `use cache`, `cacheLife` e `cacheTag`
- apos escrita, use `updateTag`
- para invalidacao on-demand, use `revalidateTag(tag, 'max')`
- para invalidacao por rota, use `revalidatePath`
- evite duplicar cache do Next e cache do cliente sem necessidade
- a View nunca chama `fetch` diretamente

### `infra/queries.ts`

Centralize funcoes reutilizaveis de leitura. Cada uma deve explicitar:

- `queryKey`
- se usa `fetch` com `next.tags`
- se usa `use cache`
- qual `cacheLife` aplica
- quando precisa ser dinamica
- como sera invalidada

Centralize tambem `query options` reutilizaveis para evitar espalhar configuracao de query nas rotas e nas features.

### `infra/query-keys.ts`

Centralize query keys por dominio tecnico e exporte um registry reutilizavel.

### `infra/cache-tags.ts`

Centralize tags de cache por dominio tecnico, incluindo helpers de lista, detalhe e escopos transversais.

### `http/`

- use Orval para gerar clients tipados a partir de OpenAPI
- mantenha codigo gerado isolado em `http/generated/`
- use mutator customizado quando necessario
- mantenha wrappers manuais ergonomicos para uso nas Server Actions
- `http/http-resource.ts` deve concentrar `defineApiRoute`, `defineApiRouteFn`, `httpResource<T>()`, `httpUpload<T>()`, tratamento de erro, `application/problem+json`, auth, locale e normalizacao de falhas

## Estado

- server state inicial: prefetch server-side + hydration
- server state interativo no cliente: TanStack Query
- mutacoes remotas: Server Actions
- estado local de UI: `useState` ou `useReducer`
- estado global pequeno: Zustand
- compound components: React Context
- URL state: `searchParams`
- estado de tela: ViewModels por feature

Nao use `useEffect` para data fetching primario, mutations ou derived state.

## Formularios

Implemente em duas camadas:

1. `presentation/ui/form.tsx`
2. `presentation/pattern/form.tsx` + `presentation/pattern/form.hooks.ts`

Requisitos:

- TanStack Form
- Zustand V4 como source of truth
- tipos inferidos a partir dos schemas
- `createFormHook(...)`
- `createFormSubmitHandler(...)`
- integracao com Server Actions
- campos reutilizaveis e mensagens de erro isoladas da estrutura visual

## UI system

Construa `presentation/ui/` como design system interno:

- base em `shadcn/ui` + Radix UI
- variantes com CVA
- merge de classes com `tailwind-merge`
- suporte a `data-slot`, `data-variant`, `data-size` quando fizer sentido
- componentes manuais com `asChild` via `Slot` quando forem wrappers composicionais

Inclua pelo menos:

- button
- input
- textarea
- select
- checkbox
- radio-group
- badge
- alert
- dialog
- popover
- dropdown-menu
- tabs
- tooltip
- table
- scroll-area
- header
- loading
- skeleton
- toast

## Pattern, layouts e features

- `presentation/pattern/` deve concentrar data grid, infraestrutura de formulario, error boundaries visuais, dialogs amigaveis e wrappers compartilhados
- para data grid, inclua ao menos `data-grid.tsx`, `data-grid-header.tsx`, `data-grid-table.tsx`, `data-grid-footer.tsx` e `data-grid.variants.tsx`
- `presentation/layouts/` deve conter `PublicLayout`, `PrivateLayout` e `OnboardingLayout`
- cada feature deve ser autocontida e conter `actions.ts`, `hooks.ts`, `schemas.ts`, `components/`, `view-models/` e `__specs__/`
- `actions.ts` da feature deve incluir GETs para prefetch/hidratacao e mutacoes

## i18n e auth

Implemente:

- locale inicial no servidor
- locale persistido quando houver estado cliente
- mensagens carregadas antes da composicao final do layout raiz
- provider global de i18n
- auth desacoplada do dominio
- sessao refletida em `session-store.ts`

## Testes

Configure:

- `msw`
- `mocks/browser.ts`
- `mocks/server.ts`
- `mocks/handlers.ts`
- `mocks/setup-specs.ts`

Inclua:

- unit tests para `core`
- unit tests para view models
- unit tests para `infra`, `http`, hooks e utilitarios
- browser tests para `presentation/ui`
- integration tests para rotas, Server Actions, prefetch/hydration, TanStack Query e `src/proxy.ts`

Scripts:

- `test:unit`
- `test:browser`
- `test:integration`
- `test`

## Tooling

Entregue e configure:

- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `eslint.config.js`
- Vitest
- `postcss.config.*`
- `components.json`

No `next.config.ts`, inclua:

- `cacheComponents: true`
- configuracao de imagens segura
- suporte coerente com App Router
- espaco para bundle analyzer em desenvolvimento

No `eslint.config.js`, inclua:

- `typescript-eslint`
- `eslint-plugin-boundaries`
- `eslint-plugin-oxlint`
- `@next/eslint-plugin-next`

Tambem configure `shadcn/ui`, Radix UI e scripts do Orval.

## Qualidade

Gere codigo:

- sem comentarios desnecessarios
- sem classes
- sem arquivos inchados
- sem "god pages", "god hooks" ou "god view models"
- sem regra de negocio em `presentation/ui/`
- sem acoplamento circular
- sem barrel exports
- sem espalhar codigo gerado pelo Orval fora de `http/`

## Restricoes finais

- nao copie dominio, textos, labels, mensagens, fluxos ou contratos reais
- nao use nomes do projeto de origem
- use apenas nomes neutros e infraestrutura generica
- preserve a arquitetura, nao o produto
- substitua apenas o que Next.js 16 resolve melhor ou o que era incompativel no prompt original
