# Etapa 4: Arquitetura e Design da Solucao

## Arquitetura alvo
Seguir o blueprint do template Next.js 16 SPA:
- `core`: entidades, tipos e regras puras
- `infra`: tema, stores, cache, i18n e integracoes tecnicas
- `http`: contratos, wrappers e adapters do LLM
- `presentation`: UI, layouts, patterns, features e view models
- `app`: rotas App Router, layouts e composicao final

## Organizacao por feature
- `chat`
- `onboarding`
- `profile`
- `preferences`
- `invite`
- `health-instructions`

## Decisoes importantes
- Server Actions serao a fronteira principal para enviar prompts e processar mutacoes.
- TanStack Query servira para leituras cliente quando fizer sentido, sem fetch direto em Client Components.
- Zustand ficara com estado local pequeno, como tema, sessao visual e rascunho de conversa.
- Componentes visuais reutilizaveis devem ficar em `presentation/ui`.

## Rotas previstas
- `/`
- `/onboarding`
- `/chat`
- `/health-instructions`
- `/profile`
- `/profile/edit`
- `/preferences`
- `/invite`

## Principios de design
- Paginas finas
- View models concentrando orquestracao
- Sem regras de negocio dentro de componentes visuais
- Cache e invalidacao explicitos onde houver mutacao
