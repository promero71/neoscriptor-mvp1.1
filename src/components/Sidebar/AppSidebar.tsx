"use client";

import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  BookOpen, 
  FileText, 
  Image, 
  Film, 
  Wrench,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export function AppSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    bible: true,
    script: true,
    storyboard: true,
    animatic: true,
    production: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      title: "Biblia",
      icon: BookOpen,
      section: "bible",
      items: [
        { title: "Dashboard", url: "/bible/dashboard" },
        { title: "ADN del Proyecto", url: "/bible/dna" },
        { title: "Personajes", url: "/bible/characters" },
        { title: "Sinopsis & Logline", url: "/bible/synopsis" },
        { title: "Mundo / Ambientación", url: "/bible/world" },
      ]
    },
    {
      title: "Guion",
      icon: FileText,
      section: "script",
      items: [
        { title: "Blueprint & Beats", url: "/script/blueprint" },
        { title: "Escenas", url: "/script/scenes" },
        { title: "Screenplay Editor", url: "/script/editor" },
      ]
    },
    {
      title: "Storyboard",
      icon: Image,
      section: "storyboard",
      items: [
        { title: "Dashboard", url: "/storyboard/dashboard" },
        { title: "Scene Navigator", url: "/storyboard/navigator" },
        { title: "ShotLab", url: "/storyboard/shotlab" },
        { title: "Review Board", url: "/storyboard/review" },
      ]
    },
    {
      title: "Animática",
      icon: Film,
      section: "animatic",
      items: [
        { title: "Dashboard", url: "/animatic/dashboard" },
        { title: "Frame Navigator", url: "/animatic/navigator" },
        { title: "ShotLab", url: "/animatic/shotlab" },
        { title: "Video Editor", url: "/animatic/video-editor" },
      ]
    },
    {
      title: "Producción",
      icon: Wrench,
      section: "production",
      items: [
        { title: "Dashboard", url: "/production/dashboard" },
        { title: "Breakdown Hub", url: "/production/breakdown" },
        { title: "Budget Planner", url: "/production/budget" },
        { title: "Shoot Scheduler", url: "/production/schedule" },
        { title: "Production Review", url: "/production/review" },
      ]
    }
  ];

  return (
    <Sidebar>
      <SidebarContent className="p-4">
        <SidebarHeader>
          <h2 className="text-xl font-semibold">Inspector IA</h2>
        </SidebarHeader>

        <SidebarMenu className="space-y-6 mt-4">
          {/* Project Information */}
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Título del Proyecto</Label>
              <Input defaultValue="Echoes of Nebula" className="mt-1" />
            </div>

            <div>
              <Label className="text-sm font-medium">Duración</Label>
              <Input defaultValue="90 min" className="mt-1" />
            </div>

            <div>
              <Label className="text-sm font-medium">Formato de Producción</Label>
              <Input defaultValue="Largometraje / Thriller" className="mt-1" />
            </div>

            <div>
              <Label className="text-sm font-medium">Inspiración</Label>
              <Textarea 
                placeholder="Pega aquí tu inspiración..." 
                className="mt-1 min-h-[80px]"
              />
            </div>

            <div>
              <Label className="text-sm font-medium">Salida de IA</Label>
              <Textarea 
                placeholder="Las sugerencias de IA aparecerán aquí..." 
                className="mt-1 min-h-[100px]"
                disabled
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Navegación</h3>
            {menuItems.map((group) => (
              <SidebarGroup key={group.section} className="py-0">
                <SidebarGroupLabel 
                  className="cursor-pointer flex items-center justify-between py-2 px-1 hover:bg-sidebar-accent rounded-md"
                  onClick={() => toggleSection(group.section)}
                >
                  <div className="flex items-center">
                    <group.icon className="mr-2 h-4 w-4" />
                    {group.title}
                  </div>
                  {openSections[group.section] ? 
                    <ChevronDown className="h-4 w-4" /> : 
                    <ChevronRight className="h-4 w-4" />
                  }
                </SidebarGroupLabel>
                {openSections[group.section] && (
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.url}>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>{item.title}</a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                )}
              </SidebarGroup>
            ))}
          </div>
        </SidebarMenu>

        <SidebarFooter className="mt-auto pt-4">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-full">
            🤖 Sugerir con IA
          </Button>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
