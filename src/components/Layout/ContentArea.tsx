// src/components/Layout/ContentArea.tsx
import { ReactNode } from 'react';

type ContentAreaProps = {
  children: ReactNode;
};

export function ContentArea({ children }: ContentAreaProps) {
  return (
    <main className="flex-grow p-6 bg-gray-900 min-h-screen">
      {children}
    </main>
  );
}