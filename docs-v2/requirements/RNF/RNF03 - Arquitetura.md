# RNF03 - Arquitetura

A solucao deve seguir a arquitetura de referencia em Next.js 16 SPA, com separacao em `core`, `infra`, `http`, `presentation` e `app`.

## Criterios
- App Router com rotas finas e composicao por feature.
- MVVM por feature nas telas principais.
- Server Actions como fronteira principal de integracao com IA e mutacoes.
- Sem chamadas HTTP diretas em Client Components.
- Convencoes e aliases consistentes em todo o projeto.
