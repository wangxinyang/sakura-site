"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";

interface InkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "default" | "outline" | "sakura";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const InkButton = forwardRef<HTMLButtonElement, InkButtonProps>(
  (
    {
      className,
      children,
      variant = "default",
      size = "md",
      href,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "btn-ink relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variantStyles = {
      default: "bg-slate-900 text-white hover:bg-slate-800",
      outline:
        "border border-slate-900 bg-transparent text-slate-900 hover:bg-slate-100",
      sakura: "bg-sakura text-sakura-foreground hover:bg-sakura-dark",
    };

    const sizeStyles = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-6 py-3 text-lg",
    };

    const MotionSpan = motion.span as React.ForwardRefExoticComponent<
      Omit<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLSpanElement>,
          HTMLSpanElement
        >,
        "ref"
      > &
        MotionProps &
        React.RefAttributes<HTMLSpanElement>
    >;

    const buttonContent = (
      <MotionSpan
        className="relative z-10 flex items-center justify-center gap-2"
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </MotionSpan>
    );

    const buttonClass = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={buttonClass}>
          {buttonContent}
        </Link>
      );
    }

    return (
      <button className={buttonClass} ref={ref} {...props}>
        {buttonContent}
      </button>
    );
  }
);

InkButton.displayName = "InkButton";

export { InkButton };
