"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "ghost";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-body font-medium uppercase tracking-widest transition-all duration-300 ease-luxury disabled:opacity-50 disabled:cursor-not-allowed rounded-full border";

    const variants = {
      primary:
        "bg-primary-950 text-neutral-100 border-primary-800 hover:border-accent-500 hover:shadow-lg hover:-translate-y-0.5",
      secondary:
        "bg-transparent text-accent-500 border-accent-500 hover:bg-accent-500 hover:text-neutral-50",
      white:
        "bg-neutral-50 text-primary-950 border-neutral-300 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50",
      ghost:
        "bg-transparent text-primary-900 hover:text-accent-500 border-primary-300 hover:border-accent-500",
    };

    const sizes = {
      default: "px-8 py-4 text-sm",
      sm: "px-6 py-3 text-xs",
      lg: "px-10 py-5 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// Animated version using Framer Motion
export const MotionButton = motion.create(Button);

export default Button;
