import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'

export default function HealthInstructionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instruções de Saúde</h1>
      <Card>
        <CardHeader>
          <CardTitle>Limites do Assistente de IA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Este assistente de IA é uma ferramenta útil para informações gerais,
            mas tem limitações importantes:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Não sou um profissional médico:</strong> Não posso
              fornecer diagnósticos, tratamentos ou conselhos médicos.
            </li>
            <li>
              <strong>Consulte especialistas:</strong> Para questões de saúde,
              sempre procure médicos qualificados.
            </li>
            <li>
              <strong>Informações gerais:</strong> Posso ajudar com dúvidas
              gerais sobre saúde, mas não substituo atendimento profissional.
            </li>
            <li>
              <strong>Privacidade:</strong> Suas conversas são mantidas em
              sessão, mas evite compartilhar dados sensíveis.
            </li>
          </ul>
          <p>
            Use este assistente com responsabilidade e bom senso. Ele é
            projetado para ser útil, mas não é infalível.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
