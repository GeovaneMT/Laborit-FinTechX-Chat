# Riscos e Restricoes

## Riscos
- O LLM pode gerar informacoes incorretas ou sensiveis demais para um contexto de saude.
- As telas sugerem um produto amplo, mas o teste tecnico tem tempo limitado.
- O design e mobile-first e pode perder qualidade no desktop se apenas escalado.
- Dark mode pode divergir dos assets se nao houver tokens consistentes.
- A percepcao de valor pode cair se o chat parecer generico.

## Mitigacoes
- Mostrar avisos claros em `Health Instructions` e evitar linguagem de diagnostico.
- Priorizar as 8 rotas com dados mockados fora do fluxo central do chat.
- Definir breakpoints, largura maxima e adaptacao segura para desktop.
- Centralizar cores e estados visuais no design system.
- Preparar prompts, estados iniciais e microcopy alinhados ao contexto de bem-estar mostrado nas telas.

## Restricoes
- O projeto e um teste tecnico frontend e deve evidenciar codigo, UI/UX, integracao com IA, documentacao, testes e deploy.
- A stack alvo deve respeitar o blueprint do `nextjs-16-spa-template.md`.
- Os assets em `docs/Images/UI` sao a principal referencia de rotas e direcao visual.
- As telas de `Preferences` listam acoes futuras, mas apenas fluxos com tela dedicada entram como rota obrigatoria do MVP.
- Recursos que exigiriam backend real devem ser simulados com Server Actions, mocks ou armazenamento local.
