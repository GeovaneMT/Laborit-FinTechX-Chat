# Requirements Index

Quick reference to features, requirements, and user stories.

## By Priority (MoSCoW)

### Must Have

- User authentication & profiles
- AI chat with history
- 8 core routes (Splash, Onboarding, Chat, Profile, Edit Information, Health
  Instructions, Invite, Preferences)
- Theme switching (light/dark)
- Mobile-first responsive design
- Accessibility baseline (WCAG AA)

### Should Have

- Persistent chat history
- User preferences storage
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
