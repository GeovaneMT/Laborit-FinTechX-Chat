# Laborit Chat - Assistente de IA

Aplicação frontend em Next.js 16 para um chat inteligente alinhado ao desafio técnico da Laborit. Implementa as 8 rotas obrigatórias: Splash, Onboarding, Chat, Profile, Edit Information, Health Instructions, Invite Your Friend, e Preferences.

## Visão Geral

Este projeto transforma um template Next.js em uma aplicação de chat com assistente de IA, mantendo a arquitetura MVVM em camadas (`core`, `infra`, `http`, `presentation`, `app`, `mocks`). O chat integra com OpenAI GPT-4o via Server Actions, com histórico de sessão mantido localmente.

### Funcionalidades Principais

- **Chat Inteligente**: Envio de mensagens, resposta da IA, histórico de sessão, botão para limpar conversa.
- **Rotas Completas**: Navegação entre todas as 8 telas obrigatórias.
- **Tema Light/Dark**: Toggle funcional com persistência local.
- **Mocks e Simulações**: Perfil e outras funcionalidades simuladas para MVP.
- **Acessibilidade**: Foco visível, navegação por teclado, contraste adequado.
- **Mobile-First**: Design responsivo otimizado para dispositivos móveis.

### Limitações do Assistente

O assistente de IA é configurado para ser útil em questões gerais, mas explicitamente não assume papel médico. Inclui disclaimers sobre limites e orienta consulta a profissionais qualificados.

## Scripts

- `pnpm dev` — servidor de desenvolvimento (Turbopack)
- `pnpm build` / `pnpm start` — produção
- `pnpm lint` — ESLint (TypeScript + Next + boundaries + oxlint)
- `pnpm test` — Vitest (unidade + UI + integração)
- `pnpm test:unit` / `test:browser` / `test:integration` — execuções específicas

## Setup e Instalação

1. Clone o repositório
2. Instale dependências: `pnpm install`
3. Configure variáveis de ambiente (veja abaixo)
4. Execute: `pnpm dev`

### Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```env
# OpenAI API Key (obrigatório para chat funcional)
OPENAI_API_KEY=sk-your-openai-api-key-here

# Revalidação sob demanda
REVALIDATE_SECRET=your-secret-here

# MSW no navegador (opcional, para dev)
NEXT_PUBLIC_ENABLE_MSW=true
```

**Nota**: Sem `OPENAI_API_KEY`, o chat não funcionará. Obtenha uma chave em [OpenAI Platform](https://platform.openai.com/).

## Arquitetura

O projeto segue uma arquitetura em camadas rigorosa:

- **`src/core`** — Domínio puro: tipos, objetos de valor, mapeadores, casos de uso.
- **`src/infra`** — Infraestrutura: autenticação, cache, chaves de query, queries compartilhadas, i18n, stores.
- **`src/http`** — Integração API: configuração Orval, cliente gerado, recursos HTTP.
- **`src/presentation`** — UI: componentes agnósticos, padrões (formulários, grid), layouts, features MVVM.
- **`src/app`** — Rotas finas: layouts, handlers, wiring de Server Actions.
- **`src/mocks`** — MSW para testes e desenvolvimento.

Dependências entre camadas são enforçadas por `eslint-plugin-boundaries`.

## Decisões Técnicas

- **LLM**: OpenAI GPT-4o para equilíbrio entre capacidade e custo.
- **Histórico**: Mantido em sessão (sessionStorage), perdido ao fechar aba.
- **Persistência**: MSW mocks para perfil; dados em memória para MVP.
- **Internacionalização**: Português (pt-BR) apenas; i18n plumbing pronto para expansão.
- **Tema**: Light/dark com persistência local; toggle em Preferences.
- **Formulários**: TanStack Form com Zod para validação.
- **Estado**: Zustand para chat store; TanStack Query para server state.
- **Build**: Turbopack em dev; Webpack em produção (compatibilidade).

## Trade-offs e Limitações

- **Backend Real**: Não implementado; perfil e chat usam mocks/simulações.
- **Histórico Persistente**: Apenas sessão; futuro: localStorage ou backend.
- **Autenticação**: Demo mode (hashEmail); não real para MVP.
- **Testes**: Infraestrutura pronta, mas cobertura mínima (foco em chat e rotas críticas).
- **Performance**: Sem otimização avançada; focado em funcionalidade.
- **Acessibilidade**: Básica; pode ser expandida.

## Deploy

### Vercel/Netlify (Recomendado)

1. Configure `OPENAI_API_KEY` nas variáveis de ambiente da plataforma.
2. Build: `pnpm build`
3. Deploy automático via Git.

### Configuração de Produção

- Certifique-se de `cacheComponents: false` em `next.config.ts` (veja comentários no arquivo).
- Monitore uso da API OpenAI para custos.

## Desenvolvimento

### Estrutura de Features

Cada feature segue MVVM:
```
src/presentation/features/{feature}/
├── actions.ts          # Server Actions
├── schemas.ts          # Zod schemas
├── use-{feature}-screen.ts  # View model hook
├── store.ts            # Zustand store (se necessário)
├── components/         # UI components
└── __specs__/          # Tests
```

### Adicionando Novas Features

1. Crie pasta em `presentation/features/`
2. Implemente actions, schemas, view model, components
3. Adicione rota em `src/app/(private)/{route}/page.tsx`
4. Atualize navegação em `layout.tsx`

### Testes

- Unidade: Hooks, stores, utilitários
- Integração: Fluxos críticos (ex: enviar mensagem → resposta)
- UI: Componentes com Testing Library + MSW

Execute `pnpm test` para rodar tudo.

## Contribuição

Este é um projeto de teste técnico. Para sugestões, abra uma issue ou PR.

## Licença

Proprietário - Laborit.
