"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "dark";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default:
        "bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 ease-luxury",
      gold: "bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 ease-luxury border-t-2 border-accent-500",
      dark: "bg-primary-900 text-neutral-100 p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
