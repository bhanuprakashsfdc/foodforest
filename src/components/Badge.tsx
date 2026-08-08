import type { BadgeLevel } from "@/lib/data/crops";

interface BadgeProps {
  level: BadgeLevel;
  children: React.ReactNode;
}

export function Badge({ level, children }: BadgeProps) {
  return <span className={`badge ${level}`}>{children}</span>;
}
