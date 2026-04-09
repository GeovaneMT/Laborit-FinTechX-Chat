# RF03 - Historico Recente da Conversa

O chat deve preservar o historico da sessao atual para manter contexto entre perguntas e respostas, sem depender de persistencia remota obrigatoria.

## Criterios de aceitacao
- As mensagens enviadas e recebidas permanecem visiveis ao navegar dentro da sessao.
- O historico recente pode ser restaurado a partir de estado local ou store global.
- O usuario pode reiniciar a conversa por uma acao explicita.
- O sistema limita o volume de contexto enviado ao modelo para evitar custo e degradacao de desempenho.
