"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WaveHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  center?: boolean;
}

export default function WaveHeading({
  children,
  className,
  as = "h2",
  center = true,
}: WaveHeadingProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const headingText =
    typeof children === "string" ? children : String(children);
  const letters = Array.from(headingText);

  const Heading = as;

  return (
    <Heading
      className={cn(
        "relative overflow-hidden pb-6 mb-6",
        center && "text-center",
        className
      )}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {letters.map((letter, index) => (
          <motion.span
            variants={child}
            key={index}
            className={letter === " " ? "inline-block mr-2" : "inline-block"}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-1 bg-sakura"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      />
    </Heading>
  );
}
