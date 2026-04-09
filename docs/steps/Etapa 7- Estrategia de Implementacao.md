# Etapa 7: Estrategia de Implementacao

## Fatias verticais

### Slice 1: fundacao
- Setup do projeto em Next.js 16
- Tailwind v4, shadcn/ui, aliases, lint e testes
- Tema light/dark e layout base

### Slice 2: entrada e navegacao
- `Splash`
- `Onboarding`
- navegacao entre rotas e layout mobile-first

### Slice 3: chat funcional
- layout do chat
- store de conversa
- prompts sugeridos
- estados de resposta

### Slice 4: integracao com LLM
- Server Action de envio
- adaptacao e saneamento de resposta
- tratamento de erros

### Slice 5: suporte e personalizacao
- `Health Instructions`
- `Profile`
- `Edit Information`
- `Preferences`
- `Invite Your Friend`

### Slice 6: acabamento
- testes
- documentacao
- deploy

## Criterio de pronto
- rota funcional
- responsiva
- com feedback visual
- aderente a arquitetura
- com cobertura minima de teste quando for fluxo critico
