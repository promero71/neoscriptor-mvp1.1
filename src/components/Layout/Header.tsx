// src/components/Layout/Header.tsx - Versión actualizada para el dashboard principal
"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  
  // Si estamos en el dashboard principal, mostrar el header específico
  if (pathname === "/") {
    return (
      <header className="flex h-16 items-center justify-between border-b border-border px-6 bg-background">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-foreground">NeoScriptor</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/32?img=1" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
    );
  }

  // Header original para otras páginas...
  // (mantener el código existente)
  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      {/* Código existente del header */}
    </header>
  );
}