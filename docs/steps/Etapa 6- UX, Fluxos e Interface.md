# Etapa 6: UX, Fluxos e Interface

## Mapa de rotas
| Rota | Objetivo |
| --- | --- |
| `Splash` | Introduzir a marca e preparar a entrada |
| `Onboarding` | Explicar valor e conduzir ao uso |
| `Chat` | Entregar o nucleo do produto |
| `Health Instructions` | Construir confianca e mostrar limites |
| `Profile` | Consolidar acesso a conta e atalhos |
| `Edit Information` | Permitir edicao de dados basicos |
| `Preferences` | Ajustar tema e visualizar opcoes da conta |
| `Invite Your Friend` | Compartilhar codigo promocional |

## Jornadas principais

### Jornada 1: primeira entrada
`Splash` -> `Onboarding` -> `Chat`

### Jornada 2: uso consciente do assistente
`Chat` -> `Health Instructions` -> volta ao `Chat`

### Jornada 3: personalizacao
`Profile` -> `Preferences` -> `Edit Information`

### Jornada 4: compartilhamento
`Profile` ou `Preferences` -> `Invite Your Friend`

## Estados de interface
- Vazio: prompts sugeridos no chat
- Carregando: splash, envio de mensagem, salvamento de perfil
- Sucesso: copia de codigo, salvamento de dados, resposta recebida
- Erro: indisponibilidade do LLM, falha de formulario, falha de copia

## Regras visuais
- Respeitar a direcao dos assets, com tipografia, espacamento e composicao limpos.
- Implementar tokens para light e dark mode desde o comeco.
- Evitar telas densas; o produto precisa parecer simples e humano.

## Observacao critica
As imagens mostram 16 arquivos, mas representam 8 rotas em 2 temas. O planejamento de UX deve tratar cada dupla light/dark como a mesma experiencia funcional.
