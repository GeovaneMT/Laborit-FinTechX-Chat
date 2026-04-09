"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@ui/button";
import { Input } from "@ui/shadcn/input";
import { Label } from "@ui/shadcn/label";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/shadcn/card";

export default function EditInformationPage() {
  const router = useRouter();
  const [name, setName] = useState("João Silva");
  const [email, setEmail] = useState("joao@example.com");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save
    alert("Informações salvas!");
    router.push("/profile");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Editar Informações</h1>
      <Card>
        <CardHeader>
          <CardTitle>Atualizar Perfil</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">Salvar</Button>
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}