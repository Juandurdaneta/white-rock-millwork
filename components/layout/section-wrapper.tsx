"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "default" | "secondary" | "dark";
  size?: "default" | "narrow" | "wide" | "full";
  animate?: boolean;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  (
    {
      className,
      children,
      variant = "default",
      size = "default",
      animate = true,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef(null);
    const isInView = useInView(internalRef, { once: true, amount: 0.2 });

    const backgrounds = {
      default: "bg-neutral-50",
      secondary: "bg-neutral-100",
      dark: "bg-primary-950 text-neutral-100",
    };

    const widths = {
      default: "max-w-7xl",
      narrow: "max-w-4xl",
      wide: "max-w-screen-2xl",
      full: "max-w-none",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "py-section px-4 sm:px-6 lg:px-8",
          backgrounds[variant],
          className
        )}
        {...props}
      >
        <motion.div
          ref={internalRef}
          className={cn("mx-auto", widths[size])}
          initial={animate ? { opacity: 0, y: 40 } : undefined}
          animate={
            animate
              ? isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
              : undefined
          }
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
