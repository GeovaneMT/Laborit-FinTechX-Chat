# Etapa 10: Seguranca, Confiabilidade e Riscos

## Seguranca do produto
- Nao expor segredos no cliente.
- Validar entradas antes de enviar ao LLM.
- Evitar armazenar dados sensiveis alem do necessario.

## Confiabilidade
- Tratar timeouts e indisponibilidade do modelo.
- Preservar historico visivel mesmo apos falha de resposta.
- Mostrar avisos claros em `Health Instructions` para reduzir uso indevido do assistente.

## Principais riscos
- Hallucination do modelo
- Escopo excessivo por causa das telas de conta
- Falta de coesao entre chat e areas de perfil

## Mitigacoes
- Guardrails de prompt e microcopy
- MVP centrado nas 8 rotas e em dados mockados
- Documentacao explicita sobre o que e real, mockado e futuro
