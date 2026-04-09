# Etapa 8: Desenvolvimento Orientado por Qualidade

## Praticas obrigatorias
- TypeScript estrito
- Sem `any` desnecessario
- Sem logica de produto dentro de `presentation/ui`
- Sem paginas gigantes ou hooks monoliticos
- Sem chamadas diretas ao LLM no cliente

## Guias de implementacao
- Toda feature deve nascer com schema, view model e composicao de UI claros.
- Formularios comecam por validacao.
- Mutacao precisa declarar estrategia de atualizacao visual e invalidacao.
- Estados de erro precisam ser desenhados, nao improvisados.

## Qualidade percebida pela Laborit
- Codigo simples e sustentavel
- UX bem acabada
- Decisoes explicitas de escopo
- Narrativa coerente entre design, dominio e arquitetura

## Checklist durante o desenvolvimento
- A rota respeita os assets?
- O fluxo faz sentido para uma pessoa real?
- A implementacao reforca o carater de teste tecnico bem executado?
