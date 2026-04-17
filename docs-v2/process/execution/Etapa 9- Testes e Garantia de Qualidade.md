# Etapa 9: Testes e Garantia de Qualidade

## Camadas de teste
- Unitario: entidades, utilitarios, schemas e view models
- Integracao: Server Actions, fluxo do chat, salvamento de perfil e troca de tema
- UI: estados de componentes criticos e navegacao entre rotas

## Cenarios prioritarios
- Entrada por `Splash` e `Onboarding`
- Envio de pergunta e recebimento de resposta
- Exibicao de erro no chat
- Edicao de perfil com validacao
- Alternancia de tema em `Preferences`
- Copia do codigo em `Invite Your Friend`

## Ferramentas
- Vitest
- Testing Library
- MSW

## Criterio de aprovacao
O MVP deve ter cobertura nos fluxos que mais demonstram competencia para a vaga, mesmo que nem toda tela tenha cobertura extensa.
