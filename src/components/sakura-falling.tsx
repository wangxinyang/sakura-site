"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface SakuraPetal {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayDuration: number;
  opacity: number;
}

export default function SakuraFalling({
  petalsCount = 15,
}: {
  petalsCount?: number;
}) {
  const [petals, setPetals] = useState<SakuraPetal[]>([]);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
    const newPetals: SakuraPetal[] = [];

    for (let i = 0; i < petalsCount; i++) {
      newPetals.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 15 + 8, // Between 8px and 23px
        duration: Math.random() * 10 + 10, // Between 10s and 20s
        delay: Math.random() * 10, // Between 0s and 10s
        swayDuration: Math.random() * 3 + 2, // Between 2s and 5s
        opacity: Math.random() * 0.3 + 0.7, // Between 0.7 and 1.0
      });
    }

    setPetals(newPetals);
  }, [petalsCount]);

  if (!mounted || petals.length === 0) return null;

  return (
    <div className="sakura-falling">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s, ${petal.swayDuration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
            backgroundColor: isDark
              ? "rgba(255, 183, 197, 0.5)"
              : "rgba(255, 183, 197, 0.7)",
          }}
        />
      ))}
    </div>
  );
}
