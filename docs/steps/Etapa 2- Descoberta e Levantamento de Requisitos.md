# Etapa 2: Descoberta e Levantamento de Requisitos

## Fontes de verdade
- `LABORIT_EMPRESA_E_VAGA.md`: reforca simplicidade, autonomia, produto e foco em pessoas.
- `Development_Assessment_Dev_Front.md`: define o teste como interface de chat inteligente com LLM, documentacao, testes e deploy como diferenciais.
- `nextjs-16-spa-template.md`: define a arquitetura tecnica alvo.
- `docs/Images/UI`: define as rotas reais e o tom visual do produto.

## Requisitos funcionais consolidados
- A jornada inicial deve passar por `Splash` e `Onboarding`.
- O chat e a funcionalidade central do produto.
- O usuario precisa acessar instrucoes e limitacoes do assistente.
- O usuario precisa conseguir visualizar e editar perfil.
- O usuario precisa conseguir alterar preferencias e copiar um codigo de convite.

## Requisitos de experiencia
- Fluxo sem friccao entre descoberta, confianca e uso do chat.
- UI alinhada ao material visual em light e dark mode.
- Linguagem acolhedora e direta.

## Requisitos tecnicos
- Next.js 16 com App Router.
- Server Actions como integracao principal com o LLM.
- Estado local e cache organizados.
- Estrutura em camadas e testes automatizados.

## Decisao de produto
Itens listados em `Preferences` sem tela dedicada entram como capacidade futura ou acao mockada. As rotas obrigatorias do MVP sao apenas as 8 representadas visualmente.
