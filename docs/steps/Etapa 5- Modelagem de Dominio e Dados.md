# Etapa 5: Modelagem de Dominio e Dados

## Entidades centrais
- `ConversationMessage`
- `ConversationThread`
- `AssistantGuideline`
- `UserProfile`
- `UserPreferences`
- `ReferralCode`

## Value objects sugeridos
- `MessageRole`
- `ThemeMode`
- `ProfileEmail`
- `ReferralCodeValue`

## Contratos de dados do MVP
- Perfil: nome, e-mail, avatar, status de seguranca
- Preferencias: tema, atalhos disponiveis, flags futuras
- Chat: mensagem do usuario, resposta da IA, timestamps e status
- Instrucoes: lista de limites e boas praticas de uso
- Convite: codigo promocional e mensagem de apoio

## Regras de modelagem
- Manter o dominio simples e compativel com o teste.
- Nao modelar pagamentos, seguranca de conta e autenticacao alem do necessario para a UI.
- Representar campos futuros como opcionais ou dados mockados, sem inflar a arquitetura.

## Dados mockados necessarios
- Perfil inicial
- Preferencias iniciais
- Conteudo de instrucoes
- Codigo de convite
- Sugestoes de prompts do chat
