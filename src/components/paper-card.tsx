"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PaperCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  sakuraBorder?: boolean;
}

export default function PaperCard({
  children,
  className,
  hover = true,
  sakuraBorder = false,
  ...props
}: PaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "japanese-paper p-6 rounded-lg",
        hover && "transition-all duration-300 hover:shadow-lg",
        sakuraBorder && "border-2 border-sakura/20",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
