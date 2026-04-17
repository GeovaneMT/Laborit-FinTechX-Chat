# Requirements Index

Complete requirements documentation for the Brain Box platform, including
functional requirements (RF), non-functional requirements (RNF), user stories,
and prioritization frameworks.

## By Priority (MoSCoW)

### Must Have (Obrigatórios)

- As 8 rotas do desafio implementadas: `Splash`, `Onboarding`, `Chat`,
  `Profile`, `Edit Information`, `Health Instructions`, `Invite Your Friend` e
  `Preferences`
- Chat com integração a um LLM por meio de Server Actions, com envio de
  mensagem, estado de carregamento e resposta renderizada
- Responsividade mobile-first com adaptação segura para desktop
- Tema light/dark coerente com os assets de UI
- Estrutura técnica alinhada ao template Next.js 16 SPA com App Router,
  TypeScript estrito e separação por camadas
- Feedbacks de erro, vazio e carregamento nas telas principais
- README, instruções de execução e deploy em host gratuito

### Should Have (Deveriam Ter)

- Histórico recente da conversa na sessão
- Sugestões de prompts e regeneração de resposta no chat
- Edição local de perfil com validação de formulário
- Persistência local das preferências de tema
- Testes unitários e de integração nos fluxos principais
- MSW para dados mockados de perfil, preferências e convite

### Could Have (Poderiam Ter)

- Compartilhamento ou cópia de resposta
- Telemetria simples de eventos de navegação e uso do chat
- Internacionalização inicial para textos estruturais
- Animações sutis de transição entre `Splash`, `Onboarding` e `Chat`

### Won't Have (Não Terão)

- Autenticação real com backend produtivo
- Processamento clínico, diagnóstico médico ou prescrição
- Pagamentos reais, recuperação de senha real ou programa de indicação com saldo
  financeiro de verdade
- Persistência remota completa de histórico de chat, perfil e configurações

## Risk Assessment & Constraints

### Riscos Identificados

- O LLM pode gerar informações incorretas ou sensíveis demais para um contexto
  de saúde
- As telas sugerem um produto amplo, mas o teste técnico tem tempo limitado
- O design é mobile-first e pode perder qualidade no desktop se apenas escalado
- Dark mode pode divergir dos assets se não houver tokens consistentes
- A percepção de valor pode cair se o chat parecer genérico

### Estratégias de Mitigação

- Mostrar avisos claros em `Health Instructions` e evitar linguagem de
  diagnóstico
- Priorizar as 8 rotas com dados mockados fora do fluxo central do chat
- Definir breakpoints, largura máxima e adaptação segura para desktop
- Centralizar cores e estados visuais no design system
- Preparar prompts, estados iniciais e microcopy alinhados ao contexto de
  bem-estar mostrado nas telas

### Constraints Técnicas

- O projeto é um teste técnico frontend e deve evidenciar código, UI/UX,
  integração com IA, documentação, testes e deploy
- A stack alvo deve respeitar o blueprint do `nextjs-16-spa-template.md`
- Os assets em `docs/Images/UI` são a principal referência de rotas e direção
  visual
- As telas de `Preferences` listam ações futuras, mas apenas fluxos com tela
  dedicada entram como rota obrigatória do MVP
- Recursos que exigiriam backend real devem ser simulados com Server Actions,
  mocks ou armazenamento local

## Documentation Structure

### `RF/` - Requisitos Funcionais

Functional requirements organized by feature area.

### `RN/` - Regras de Negócio

Business rules and domain logic requirements.

### `RNF/` - Requisitos Não-Funcionais

Quality attributes, performance, security, and operational requirements.

### `user-stories/` - Histórias de Usuário

User stories written in the standard format: "As a [user], I want [goal] so that
[benefit]"

## Navigation

- [MoSCoW Prioritization](./MoSCoW.md) - Detailed prioritization breakdown
- [Risks & Constraints](./risks-restrictions.md) - Complete risk assessment
- [Functional Requirements](./RF/) - Feature specifications
- [Business Rules](./RN/) - Domain constraints
- [Non-Functional Requirements](./RNF/) - Quality requirements
- [User Stories](./user-stories/) - User-centric requirements
- Search functionality
- Message reactions/reactions
- Draft saving
- Offline support indication

### Could Have

- Advanced search filters
- Chat export/download
- Social sharing
- Advanced analytics
- Third-party integrations
- Multiple language support

### Won't Have (Current Phase)

- Real-time collaboration
- Video/voice calls
- Video/image uploads
- Calendar integration
- Third-party authentication (OAuth)

## By Category

### User Management

- [User Registration](./RF/) — Account creation
- [User Profile](./RF/) — Profile information management
- [Authentication](./RF/) — Login/logout flows
- [Authorization](./RF/) — Permission management

### Chat & Messaging

- [Chat Interface](./RF/) — Message sending/receiving
- [Message History](./RF/) — Session storage & retrieval
- [AI Responses](./RF/) — GPT-4o integration
- [Error Handling](./RF/) — Message delivery failures

### UI & Navigation

- [Splash Screen](./RF/) — Initial loading state
- [Onboarding Flow](./RF/) — First-time user guide
- [Navigation](./RF/) — Route switching
- [Theme System](./RF/) — Light/dark mode

### Non-Functional

- [Performance](./RN/) — Page load < 2s
- [Security](./RN/) — API key protection, HTTPS
- [Scalability](./RN/) — Support 10K+ users
- [Accessibility](./RN/) — WCAG 2.1 AA compliance

### Additional Requirements

- [Browser Support](./RNF/) — Chrome, Firefox, Safari, Edge
- [Device Support](./RNF/) — Mobile, tablet, desktop
- [Internationalization](./RNF/) — Portuguese (pt-BR) baseline

## By User Persona

### New User

- [Onboarding story](./user-stories/) — First-time experience
- [Chat tutorial](./user-stories/) — Learn chat interface
- [Profile setup](./user-stories/) — Initial configuration

### Regular User

- [Send message](./user-stories/) — Chat interaction
- [View history](./user-stories/) — Browse past conversations
- [Change theme](./user-stories/) — Personalization

### Power User

- [Search chat](./user-stories/) — Find specific messages
- [Export history](./user-stories/) — Archive conversations
- [Manage preferences](./user-stories/) — Advanced settings

## Status

### Completed ✅

- [x] Chat interface
- [x] 8 core routes
- [x] Theme switching
- [x] Responsive design
- [x] Basic accessibility

### In Progress 🔄

- [ ] Individual component documentation (20+)
- [ ] Storybook stories
- [ ] E2E test coverage

### Planned 📅

- [ ] Persistent history
- [ ] User preferences storage
- [ ] Search functionality
- [ ] Advanced features

## Links to Detailed Requirements

- **Functional Requirements** — [RF/](./RF/)
- **Non-Functional Requirements** — [RN/](./RN/)
- **Additional Requirements** — [RNF/](./RNF/)
- **User Stories** — [user-stories/](./user-stories/)
- **Full MoSCoW Matrix** — [MoSCoW.md](./MoSCoW.md)

---

**Last Updated:** April 14, 2026

**[← Back to Docs](../README.md)**
