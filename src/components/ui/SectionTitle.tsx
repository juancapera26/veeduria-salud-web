import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
        {children}
      </h1>
      <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
    </div>
  );
}
