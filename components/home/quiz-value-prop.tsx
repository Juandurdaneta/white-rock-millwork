"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Your True Cabinet Style",
    description:
      "Which aesthetic actually matches your personality and style",
  },
  {
    title: "Your Perfect Cabinet Features",
    description:
      "Specific door styles, finishes, hardware, and details that match YOUR vision",
  },
  {
    title: "Colors That Complement",
    description: "Exact color palettes that work with your home",
  },
  {
    title: "Common Mistakes To Avoid",
    description:
      "What homeowners with your style get wrong (and how to get it right)",
  },
  {
    title: "BONUS: Cabinet Quality Checklist",
    description:
      "The 5 construction red flags that separate 30-year cabinets from 5-year disasters",
    isBonus: true,
  },
];

export default function QuizValueProp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-section bg-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-display text-display-md text-primary-950 mb-4">
              The Cabinet Secrets That Could Save You{" "}
              <span className="italic text-accent-500">
                $15,000 In Mistakes
              </span>
            </h2>

            <p className="font-body text-body-lg text-primary-700 mb-8">
              Here's exactly what you'll discover when you take the style quiz
            </p>

            <div className="w-16 h-px bg-accent-500 mb-8" />

            {/* Benefits List */}
            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${
                      benefit.isBonus
                        ? "bg-accent-500 text-neutral-50"
                        : "bg-accent-100"
                    }`}
                  >
                    {benefit.isBonus ? (
                      <Sparkles className="w-4 h-4" />
                    ) : (
                      <Check className="w-4 h-4 text-accent-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-body font-medium text-primary-900">
                      {benefit.title}
                    </p>
                    <p className="font-body text-body text-primary-700">
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <p className="font-body text-body-lg text-primary-900 font-medium mb-8">
              The clarity you've been searching for, delivered in 3 minutes.
            </p>

            <Link href="/quiz">
              <Button variant="primary" size="lg" className="group">
                Discover Your Cabinet Style
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/Images/Stock/IMG_5005.heic.webp"
                alt="Beautiful utility room with custom cabinets"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent-500 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
