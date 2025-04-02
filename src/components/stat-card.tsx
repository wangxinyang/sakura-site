import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function StatCard({ icon, title, description }: StatCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 text-sakura">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
