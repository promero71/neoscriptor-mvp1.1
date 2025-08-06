import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function BibleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex h-full">
        <SidebarTrigger className="md:hidden absolute top-4 left-4" />
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
