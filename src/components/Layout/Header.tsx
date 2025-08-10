"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  
  // Map paths to module names
  const getActiveModule = () => {
    if (pathname === "/") return "Dashboard";
    if (pathname.startsWith("/script")) return "Script";
    if (pathname.startsWith("/bible")) return "Bible";
    if (pathname.startsWith("/storyboard")) return "Storyboard";
    if (pathname.startsWith("/animatic")) return "Animatic";
    if (pathname.startsWith("/production")) return "Production";
    return "Dashboard";
  };

  const activeModule = getActiveModule();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">{activeModule}</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-full rounded-md bg-muted pl-8 pr-4 text-sm"
          />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  );
}