import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Inspector Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Inspector</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Title</label>
            <Input placeholder="Enter project title" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <Input placeholder="Enter duration" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Production Format</label>
            <Input placeholder="Enter production format" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Inspiration</label>
            <Textarea placeholder="Enter inspiration" rows={3} />
          </div>
          <Button>Suggest AI</Button>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">AI Output</label>
            <Textarea placeholder="AI output will appear here" rows={3} readOnly />
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Input placeholder="Search..." className="pl-8" />
            <span className="absolute left-2.5 top-2.5 text-muted-foreground">🔍</span>
          </div>
          <Button variant="ghost" size="icon">
            <span>🔔</span>
          </Button>
        </div>
      </div>

      {/* Tailwind CSS Test Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-primary">Tailwind CSS Test</h1>
        <p className="mb-4">If you can see this text styled correctly, Tailwind CSS is working!</p>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-primary rounded"></div>
          <div className="w-16 h-16 bg-secondary rounded"></div>
          <div className="w-16 h-16 bg-accent rounded"></div>
        </div>
        <div className="mt-8 p-4 bg-card border border-border rounded-lg">
          <p className="text-card-foreground">This is a card with border and background colors</p>
        </div>
      </div>
    </div>
  );
}