# Prompt para o Cursor: planejar, migrar e reconstruir o projeto atual

Voce esta atuando como o agente principal de implementacao deste repositorio. Sua missao e **atualizar o projeto atual**, substituindo as rotas e features de exemplo hoje implementadas pelas rotas e features descritas nas referencias da Laborit, **sem desmontar a arquitetura existente**.

Nao trate este repositorio como greenfield. Ele ja possui fundacao tecnica, convencoes, layouts, providers, camadas e exemplos funcionais. Seu trabalho e usar essa base como ponto de partida, remover ou adaptar o que hoje e apenas demonstrativo, e reconstruir o produto final do desafio tecnico da Laborit dentro da arquitetura atual.

## Objetivo

Transformar o app atual em uma aplicacao frontend em **Next.js 16** para um **chat inteligente** alinhado ao desafio tecnico da Laborit, mantendo a arquitetura vigente e substituindo o produto de exemplo por um produto aderente ao desafio.

Voce deve:

1. ler e sintetizar o contexto do projeto atual;
2. mapear a arquitetura existente e o que pode ser reaproveitado;
3. identificar as rotas, APIs mockadas e features de exemplo que precisam sair ou ser adaptadas;
4. criar um plano de migracao pragmatico;
5. implementar a substituicao incremental;
6. validar qualidade, testes e documentacao;
7. deixar o repositorio pronto para execucao, avaliacao e deploy.

## Fontes obrigatorias

Leia obrigatoriamente estes diretorios e arquivos antes de planejar:

- `docs/requirements/`
- `docs/steps/`
- `docs/ui/`
- `skills/nextjs-16-spa-builder/SKILL.md`
- `skills/nextjs-16-spa-builder/references/nextjs-16-spa-template.md`
- `skills/laborit-culture/SKILL.md`
- `skills/laborit-culture/references/LABORIT_EMPRESA_E_VAGA.md`
- `skills/laborit-culture/references/Development_Assessment_Dev_Front.md`

Leia tambem o projeto atual, com foco em:

- `src/app/`
- `src/core/`
- `src/infra/`
- `src/http/`
- `src/presentation/`
- `src/mocks/`
- `README.md`
- `package.json`
- `tsconfig.json`

Considere:

- `docs/requirements/` como fonte de escopo, regras, criterios de aceite e restricoes;
- `skills/nextjs-16-spa-builder` como blueprint tecnico e regua arquitetural;
- `skills/laborit-culture` como regua de produto, UX, priorizacao, narrativa e senioridade;
- o codigo atual como base obrigatoria de migracao, nao como algo descartavel por padrao.

## Contexto do projeto atual

Antes de propor qualquer mudanca, parta do fato de que o repositorio ja contem uma arquitetura alinhada ao blueprint, com exemplos neutros como:

- grupos de rota `(public)` e `(private)`;
- rotas como `/dashboard`, `/items`, `/items/[itemId]` e `/settings`;
- features de exemplo em `presentation/features/dashboard`, `presentation/features/items` e `presentation/features/settings`;
- APIs de exemplo em `src/app/api/v1/dashboard`, `src/app/api/v1/items` e `src/app/api/v1/profile`;
- layouts, providers, store, cache helpers, query keys, mocks, testes e componentes de UI reutilizaveis.

Seu trabalho e **substituir esse produto de exemplo**, e nao recriar a estrutura inteira em paralelo.

## Resultado esperado

Entregar um app navegavel, responsivo e polido, com as rotas e features do desafio da Laborit implementadas dentro da arquitetura existente, com integracao via Server Actions para o chat, dados mockados quando necessario, documentacao clara, testes relevantes e estrutura pronta para deploy.

## Postura esperada

- Pense como um frontend senior com forte product mindset.
- Trabalhe por migracao incremental, nao por reescrita impulsiva.
- Preserve o que ja esta bom na fundacao tecnica.
- Substitua o que for apenas exemplo, generico ou desalinhado ao desafio.
- Corte escopo sem perder valor percebido.
- Evite overengineering.
- Nao trate isso como um chat generico; trate como um produto pensado para pessoas.
- Priorize clareza, acolhimento, acessibilidade e acabamento.

## Nao negociaveis

### Produto e escopo

- Implementar as 8 rotas obrigatorias do desafio:
  - `Splash`
  - `Onboarding`
  - `Chat`
  - `Profile`
  - `Edit Information`
  - `Health Instructions`
  - `Invite Your Friend`
  - `Preferences`
- O chat deve enviar mensagem, exibir loading, receber resposta e manter historico recente da sessao.
- Deve existir acao explicita para limpar ou reiniciar conversa.
- O produto deve explicitar limites do assistente e nao assumir papel clinico.
- Recursos sem backend real devem ser simulados com mocks, Server Actions, persistencia local ou dados em memoria, conforme o caso.

### Arquitetura

- Manter a arquitetura baseada em `core`, `infra`, `http`, `presentation` e `app`.
- Usar App Router com rotas finas.
- Usar MVVM por feature.
- Usar Server Actions como fronteira principal de integracao.
- Nao fazer chamadas HTTP diretas em Client Components.
- Centralizar query keys, cache tags, query options e helpers de acesso a dados.
- Nao usar barrel exports.
- Preservar `presentation/ui` como camada agnostica de dominio.
- Preservar `presentation/pattern` como camada agnostica de feature.

### Migracao

- Reaproveitar layouts, providers, UI primitives, patterns, mocks e infraestrutura sempre que fizer sentido.
- Substituir ou adaptar features neutras existentes em vez de manter duas arquiteturas concorrentes.
- Remover rotas, view models, actions, handlers e contratos de exemplo quando forem efetivamente substituidos e nao tiverem mais funcao.
- Evitar duplicacao desnecessaria entre features antigas e novas.
- Preservar nomes tecnicos neutros quando isso fizer sentido para a arquitetura, mas refletir o dominio do desafio nas features e nas rotas finais.

### Stack

- Next.js 16
- React 19
- TypeScript estrito
- `pnpm`
- Tailwind CSS v4
- `shadcn/ui`
- Radix UI
- CVA
- TanStack Query
- TanStack Form
- Zustand
- Vitest
- Testing Library
- MSW

### Qualidade

- Acessibilidade por teclado, foco visivel, contraste adequado e feedbacks nao dependentes apenas de cor.
- Mobile-first com adaptacao segura para desktop.
- Tema light/dark coerente com os assets.
- README com setup, scripts, deploy, arquitetura, decisoes, migracao e limites do assistente.
- Testes cobrindo ao menos regras puras, view models e fluxos criticos.

## Direcao de produto

A solucao deve transmitir:

- simplicidade intencional;
- empatia e clareza;
- utilidade real;
- boa hierarquia visual;
- acabamento;
- criterio de priorizacao.

Evite:

- arquitetura teatral;
- UX fria ou robotica;
- manter features neutras que nao ajudam no desafio final;
- copia literal cega dos assets sem adaptacao para web;
- excesso de features sem polimento;
- abstracoes que nao melhoram legibilidade ou testabilidade.

## Regras de implementacao

- Use os assets e referencias de UI em `docs/ui/` como direcao visual principal.
- Preserve a intencao visual das telas light/dark, mas adapte a interface para uma experiencia web coerente.
- Mantenha o design system em `presentation/ui` desacoplado do dominio.
- Mantenha `presentation/pattern` desacoplado de features especificas.
- Cada feature principal deve ter, quando fizer sentido:
  - `actions.ts`
  - `hooks.ts`
  - `schemas.ts`
  - `components/`
  - `view-models/`
  - `__specs__/`
- Toda mutation deve ter estrategia explicita de invalidacao.
- Formularios devem nascer de schema validado.
- Prefira microcopy humana, objetiva e acolhedora.
- Nao exponha segredo do LLM no cliente.

## Estrategia de migracao

Trabalhe em fatias verticais nesta ordem:

1. auditoria da arquitetura e do que existe hoje;
2. mapeamento entre rotas/features atuais e rotas/features alvo;
3. definicao do plano de substituicao incremental;
4. adaptacao da navegacao e layouts base;
5. implementacao das rotas iniciais do desafio;
6. implementacao do chat funcional;
7. integracao com LLM via Server Action;
8. implementacao de profile, edit information, health instructions, invite e preferences;
9. estados de erro, vazio e loading;
10. limpeza do legado de exemplo que deixar de ser necessario;
11. testes;
12. documentacao e deploy.

## Como voce deve trabalhar

### Fase 1: leitura, auditoria e sintese

Antes de codar, produza uma sintese objetiva contendo:

- visao do produto final;
- escopo MVP;
- arquitetura atual identificada;
- rotas e features existentes que podem ser reaproveitadas;
- rotas, features e endpoints de exemplo que precisam ser substituidos;
- itens obrigatorios;
- itens que podem ser mockados;
- riscos e mitigacao;
- trade-offs recomendados para o teste tecnico.

### Fase 2: matriz de migracao

Antes de implementar, produza uma matriz clara com:

- rota atual -> destino final;
- feature atual -> reaproveitar, adaptar, substituir ou remover;
- API/mock atual -> reaproveitar, adaptar, substituir ou remover;
- componente/pattern/layout compartilhado -> manter ou ajustar.

Essa matriz deve deixar explicito o que sai, o que fica e o que muda.

### Fase 3: plano

Crie um plano em Markdown com:

- backlog priorizado;
- fatias verticais;
- entregaveis por etapa;
- dependencias tecnicas;
- estrategia de migracao;
- estrategia de testes;
- definicao de pronto;
- riscos por etapa;
- criterios objetivos para considerar removido o legado de exemplo.

Salve esse plano no repositorio em um arquivo Markdown apropriado.

### Fase 4: construcao

Implemente o projeto de ponta a ponta seguindo o plano.

### Fase 5: validacao

Ao final:

- rode lint e testes;
- corrija falhas importantes;
- revise imports, boundaries e acoplamentos;
- atualize README;
- documente limitacoes reais;
- explique claramente o que ficou mockado, local, adaptado do template atual ou previsto para evolucao futura.

## Decisoes esperadas para o MVP

Assuma estas decisoes, a menos que o repositorio ja contenha algo melhor:

- persistencia de preferencias em armazenamento local;
- historico recente do chat mantido em store local/global pequena;
- perfil, convite e alguns dados informativos com mocks;
- integracao com LLM encapsulada em Server Action;
- protecao contra respostas excessivamente assertivas em contexto sensivel;
- placeholders seguros para itens visiveis nos assets que nao possuam fluxo completo no MVP.

## Criterios de aceite do Cursor

Considere o trabalho concluido apenas quando:

1. as 8 rotas finais estiverem navegaveis;
2. as rotas e features de exemplo deixarem de ser o produto principal;
3. o chat estiver funcional com loading, resposta, erro e historico recente;
4. light/dark mode estiver consistente;
5. a arquitetura permanecer alinhada ao blueprint;
6. houver testes minimos relevantes;
7. houver README e documentacao de handoff;
8. o projeto estiver pronto para deploy em host gratuito.

## Restricoes importantes

- Nao jogue fora a arquitetura atual para reconstruir tudo do zero.
- Nao duplique a base existente criando uma segunda estrutura paralela.
- Nao copie dominio, contratos ou nomenclaturas proprietarias de templates externos.
- Preserve a arquitetura do blueprint, nao um produto generico pre-existente.
- Nao invente backend real se ele nao existir.
- Nao implemente autenticacao real se ela nao for necessaria ao MVP.
- Nao transforme o assistente em ferramenta medica.
- Nao esconda trade-offs: documente-os.

## Entregaveis finais esperados

- aplicacao implementada;
- rotas e features de exemplo substituidas ou removidas quando apropriado;
- plano salvo em Markdown;
- README atualizado;
- testes e scripts funcionando;
- documentacao de decisoes, limitacoes e proximos passos.

## Instrucao final

Comece lendo os arquivos indicados e auditando o codigo atual. Produza primeiro a sintese, depois a matriz de migracao e o plano, salve o plano em Markdown no repositorio e so entao siga para a implementacao completa. Trabalhe com autonomia, mas sempre favoreca foco, clareza, acabamento, aderencia ao contexto do teste tecnico da Laborit e respeito a arquitetura ja existente neste projeto.
