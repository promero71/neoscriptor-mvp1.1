// src/app/project/[id]/layout.tsx
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import { Header } from "@/components/Layout/Header";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col h-screen bg-background">
        <Header activeModule="Dashboard" />
        <main className="flex-grow p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}