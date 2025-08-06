"use client";

interface WelcomeSectionProps {
  userName: string;
}

export function WelcomeSection({ userName }: WelcomeSectionProps) {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-foreground mb-2">
        Welcome to NeoScriptor "{userName}"
      </h1>
    </div>
  );
}