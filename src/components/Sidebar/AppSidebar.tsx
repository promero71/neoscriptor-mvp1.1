// components/Sidebar/AppSidebar.tsx
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarTrigger />
      <SidebarContent className="p-4">
        <SidebarHeader>
          <h2 className="text-2xl font-semibold">Inspector</h2>
        </SidebarHeader>

        <SidebarMenu className="space-y-6 mt-4">
          {/* Project Title */}
          <div>
            <Label className="text-sm font-medium">Project Title</Label>
            <Input defaultValue="Echoes of Nebula" className="mt-1" />
          </div>

          {/* Duration */}
          <div>
            <Label className="text-sm font-medium">Duration</Label>
            <Input defaultValue="90 min" className="mt-1" />
          </div>

          {/* Production Format */}
          <div>
            <Label className="text-sm font-medium">Production Format</Label>
            <Input defaultValue="Largometraje / Thriller" className="mt-1" />
          </div>

          {/* Inspiration */}
          <div>
            <Label className="text-sm font-medium">Inspiration</Label>
            <Textarea 
              placeholder="Paste your inspiration here..." 
              className="mt-1 min-h-[80px]"
            />
          </div>

          {/* AI Output */}
          <div>
            <Label className="text-sm font-medium">AI Output</Label>
            <Textarea 
              placeholder="AI suggestions will appear here..." 
              className="mt-1 min-h-[100px]"
              disabled
            />
          </div>
        </SidebarMenu>

        <SidebarFooter className="mt-auto">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-full">
            🤖 Suggest AI
          </Button>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}