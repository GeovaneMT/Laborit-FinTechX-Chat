## Plan: Arquitetura de Rotas como Features

Refatorar as rotas atuais para seguir o padrão de feature-based architecture já
aplicado em `src/presentation/features/customers`.

TL;DR: manter `src/app` apenas como rota e wrapper de dados, mover toda UI de
páginas de rota para `src/presentation/features/*`, criando componentes de
feature e separando interatividade em hooks/view-models.

Steps

1. Catalogar rotas atuais que ainda têm UI no `src/app`:
   - `src/app/(content)/(home)/page.tsx`
   - `src/app/(content)/(private)/invite/page.tsx` + `client.tsx`
   - `src/app/(content)/(private)/edit-information/page.tsx` + `client.tsx`
   - `src/app/(content)/(private)/profile/page.tsx`
   - `src/app/(content)/(private)/onboarding/page.tsx`
   - `src/app/(content)/(private)/preferences/page.tsx` + `client.tsx`
   - `src/app/(content)/(private)/health-instructions/page.tsx`
   - `src/app/(content)/(private)/splash/page.tsx`

2. Criar novos feature folders em `src/presentation/features/` para cada rota
   não existente:
   - `home`
   - `invite`
   - `edit-information`
   - `profile`
   - `onboarding`
   - `preferences`
   - `health-instructions`
   - `splash`

3. Mover a UI de cada rota para
   `src/presentation/features/{feature}/components`.
   - Para páginas estáticas, criar um componente com a marcação e mensagens.
   - Para páginas interativas (`invite`, `edit-information`, `preferences`),
     criar um hook/view-model para a lógica de estado e deixar o componente
     apenas renderizar a UI.

4. Atualizar as rotas `src/app/.../page.tsx` para serem wrappers mínimos.
   - buscar locale/messages quando necessário
   - passar `messages`, `locale`, `params`, ou `query` para o componente da
     feature
   - não conter mais markup ou lógica de UI além do necessário para o roteamento

5. Conservar os padrões já existentes em features atuais:
   - `src/presentation/features/chat`
   - `src/presentation/features/dashboard`
   - `src/presentation/features/customers`

Nota: a pasta `customers` / rota `clientes` é apenas um exemplo de arquitetura
existente, não uma implementação adicional exigida. Se aparecer erro específico
relacionado a essa feature durante o refactor, ignore-o e não trate como escopo
primário.

6. Cada feature refatorada deve conter sua própria lista de i18n local à feature
   em vez de centralizar todas as chaves no `src/infra/i18n.ts`.
   - Exemplo: `src/presentation/features/profile/i18n.ts`
   - Exemplo: `src/presentation/features/preferences/i18n.ts`
   - Para rotas estáticas a i18n da feature deve ser importada diretamente pelo
     componente de feature.

Verification

1. Verificar que `src/app` contém apenas rota wrappers para as páginas listadas.
2. Confirmar que todo JSX/`@ui` markup foi movido para
   `src/presentation/features/*` novas pastas.
3. Testar navegação de cada rota: home, invite, edit-information, profile,
   onboarding, preferences, health-instructions, splash e clientes.
4. Garantir que interatividade continua funcionando em invite, edit-information
   e preferences.
5. Confirmar que cada feature refatorada publica suas próprias chaves i18n em
   vez de depender unicamente de `src/infra/i18n.ts`.

Decisions

- Rotas existentes que já seguem padrão (`chat`, `dashboard`, `customers`) ficam
  intactas.
- Não mover `app`-level `error`, `not-found`, `loading` e `layout` porque eles
  são comportamentos globais, não rotas feature.
- A separação será: `app` = roteamento e dados; `presentation/features/*` = UI +
  interatividade.
- `customers`/`clientes` é referência de arquitetura apenas; não deve ser
  reescrita se um erro desta feature aparecer no caminho.
