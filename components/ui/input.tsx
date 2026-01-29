"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-small font-medium uppercase tracking-wider text-primary-700 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 bg-neutral-50 border text-primary-900 font-body placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-colors duration-300 rounded-lg",
            error
              ? "border-error focus:border-error focus:ring-error"
              : "border-neutral-300 focus:border-accent-500 focus:ring-accent-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-small text-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
