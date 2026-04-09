"use client";

import { useState, useEffect } from "react";
import { Button } from "@ui/button";
import { Switch } from "@ui/switch";
import { Label } from "@ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";

export default function PreferencesPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Preferências</h1>
      <Card>
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Modo Escuro</Label>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={toggleTheme}
            />
          </div>
          <div className="space-y-2">
            <Label>Notificações</Label>
            <p className="text-sm text-gray-500">Funcionalidade em desenvolvimento</p>
          </div>
          <div className="space-y-2">
            <Label>Idioma</Label>
            <p className="text-sm text-gray-500">Português (Brasil)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}