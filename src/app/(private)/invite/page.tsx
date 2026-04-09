"use client";

import { useState } from "react";
import { Button } from "@ui/button";
import { Input } from "@ui/shadcn/input";
import { Label } from "@ui/shadcn/label";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/shadcn/card";
import { Copy, Check } from "lucide-react";

export default function InvitePage() {
  const inviteCode = "LABORIT2024";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Convidar Amigo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Compartilhe o Laborit Chat</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Convide seus amigos para experimentar o assistente de IA. Use este código de convite:
          </p>
          <div className="flex gap-2">
            <Input value={inviteCode} readOnly className="flex-1" />
            <Button onClick={handleCopy} variant="outline">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-green-600">Código copiado!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}