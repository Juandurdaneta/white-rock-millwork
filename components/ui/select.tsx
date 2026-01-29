"use client";

import { cn } from "@/lib/utils";
import { forwardRef, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, placeholder, ...props }, ref) => {
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
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={cn(
              "w-full px-4 py-3 bg-neutral-50 border text-primary-900 font-body appearance-none cursor-pointer focus:outline-none focus:ring-1 transition-colors duration-300 rounded-lg",
              error
                ? "border-error focus:border-error focus:ring-error"
                : "border-neutral-300 focus:border-accent-500 focus:ring-accent-500",
              !props.value && "text-neutral-400",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
        {error && <p className="mt-1 text-small text-error">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
