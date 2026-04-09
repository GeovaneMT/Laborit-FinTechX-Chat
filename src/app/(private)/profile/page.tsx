import Link from "next/link";
import { Button } from "@ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";

export default function ProfilePage() {
  // Mock data
  const profile = {
    name: "João Silva",
    email: "joao@example.com",
    avatar: null,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Perfil</h1>
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nome</label>
            <p className="text-gray-600 dark:text-gray-300">{profile.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
          </div>
          <Link href="/edit-information">
            <Button variant="outline">
              Editar Informações
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}