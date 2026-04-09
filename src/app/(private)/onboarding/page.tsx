import Link from "next/link";
import { Button } from "@ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/shadcn/card";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center">Bem-vindo ao Laborit Chat</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Este é um assistente de IA para ajudar com dúvidas gerais. Ele pode fornecer informações úteis, mas lembre-se:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Não sou um profissional médico</li>
              <li>Consulte especialistas para questões de saúde</li>
              <li>Use com responsabilidade</li>
            </ul>
          </div>
          <Link href="/chat" className="block">
            <Button className="w-full">
              Entendi, vamos conversar
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}