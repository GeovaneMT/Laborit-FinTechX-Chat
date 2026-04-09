# Prompt para o Cursor: planejar e construir o projeto

Voce esta atuando como o agente principal de implementacao deste repositorio. Sua missao e planejar e construir a aplicacao do teste tecnico da Laborit com foco em produto, UX humana, arquitetura solida e escopo enxuto.

## Objetivo

Construir uma aplicacao frontend em **Next.js 16** para um **chat inteligente** alinhado ao desafio tecnico da Laborit, usando os documentos deste repositorio como fonte de verdade.

Voce deve:

1. ler e sintetizar o contexto do projeto;
2. criar um plano de execucao pragmatico;
3. implementar o produto com base nesse plano;
4. validar qualidade, testes e documentacao;
5. deixar o repositorio pronto para execucao, avaliacao e deploy.

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

Considere:

- `docs/requirements/` como fonte de escopo, regras, criterios de aceite e restricoes;
- `skills/nextjs-16-spa-builder` como blueprint tecnico nao negociavel;
- `skills/laborit-culture` como regua de decisao de produto, senioridade, UX e priorizacao.

## Resultado esperado

Entregar um app navegavel, responsivo, com 8 rotas do desafio, integracao com LLM via Server Actions, dados locais/mockados quando necessario, documentacao clara, testes relevantes e estrutura pronta para deploy.

## Postura esperada

- Pense como um frontend senior com forte product mindset.
- Prefira decisoes explicitas e pragmaticas.
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
- Deve existir acao explicita para limpar/reiniciar conversa.
- O produto deve explicitar limites do assistente e nao assumir papel clinico.
- Recursos sem backend real devem ser simulados com mocks, Server Actions ou persistencia local.

### Arquitetura

- Seguir a arquitetura baseada em `core`, `infra`, `http`, `presentation` e `app`.
- Usar App Router com rotas finas.
- Usar MVVM por feature.
- Usar Server Actions como fronteira principal de integracao.
- Nao fazer chamadas HTTP diretas em Client Components.
- Centralizar query keys, cache tags, query options e helpers de acesso a dados.
- Nao usar barrel exports.

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
- README com setup, scripts, deploy, arquitetura, decisoes e limites do assistente.
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
- copia literal cega dos assets sem adaptacao de produto;
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

## Estrategia de entrega

Trabalhe em fatias verticais nesta ordem:

1. fundacao tecnica;
2. navegacao e layout base;
3. entrada do usuario e rotas iniciais;
4. chat funcional;
5. integracao com LLM;
6. perfil, preferencias, instrucoes e convite;
7. estados de erro, vazio e loading;
8. testes;
9. documentacao e deploy.

## Como voce deve trabalhar

### Fase 1: leitura e sintese

Antes de codar, faca uma sintese objetiva contendo:

- visao do produto;
- escopo MVP;
- itens obrigatorios;
- itens que podem ser mockados;
- riscos e mitigacao;
- trade-offs recomendados para o teste tecnico.

### Fase 2: plano

Crie um plano em Markdown com:

- backlog priorizado;
- fatias verticais;
- entregaveis por etapa;
- dependencias tecnicas;
- estrategia de testes;
- definicao de pronto;
- riscos por etapa.

Salve esse plano no repositorio em um arquivo Markdown apropriado.

### Fase 3: construcao

Implemente o projeto de ponta a ponta seguindo o plano.

### Fase 4: validacao

Ao final:

- rode lint e testes;
- corrija falhas importantes;
- atualize README;
- documente limitacoes reais;
- explique claramente o que ficou mockado, local ou futuro.

## Decisoes esperadas para o MVP

Assuma estas decisoes, a menos que o repositorio ja contenha algo melhor:

- persistencia de preferencias em armazenamento local;
- historico recente do chat mantido em store local/global pequena;
- perfil e convite com dados mockados;
- integracao com LLM encapsulada em Server Action;
- protecao contra respostas excessivamente assertivas em contexto sensivel;
- placeholders seguros para itens visiveis nos assets que nao possuam fluxo completo no MVP.

## Criterios de aceite do Cursor

Considere o trabalho concluido apenas quando:

1. as 8 rotas estiverem navegaveis;
2. o chat estiver funcional com loading, resposta, erro e historico recente;
3. light/dark mode estiver consistente;
4. a arquitetura estiver alinhada ao blueprint;
5. houver testes minimos relevantes;
6. houver README e documentacao de handoff;
7. o projeto estiver pronto para deploy em host gratuito.

## Restricoes importantes

- Nao copie dominio, contratos ou nomenclaturas proprietarias de templates externos.
- Preserve a arquitetura do blueprint, nao um produto generico pre-existente.
- Nao invente backend real se ele nao existir.
- Nao implemente autenticacao real.
- Nao transforme o assistente em ferramenta medica.
- Nao esconda trade-offs: documente-os.

## Entregaveis finais esperados

- aplicacao implementada;
- plano salvo em Markdown;
- README atualizado;
- testes e scripts funcionando;
- documentacao de decisoes, limitacoes e proximos passos.

## Instrucao final

Comece lendo os arquivos indicados, produza a sintese e o plano, salve o plano em Markdown no repositorio e so entao siga para a implementacao completa. Trabalhe com autonomia, mas sempre favoreca foco, clareza, acabamento e aderencia ao contexto do teste tecnico da Laborit.
