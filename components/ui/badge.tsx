"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "dark" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-neutral-200 text-primary-700",
      gold: "bg-accent-100 text-accent-500",
      dark: "bg-primary-900 text-neutral-100",
      outline: "bg-transparent border border-accent-500 text-accent-500",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
