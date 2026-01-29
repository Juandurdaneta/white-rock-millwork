"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Gift,
  Sparkles,
  Star,
} from "lucide-react";

const valueStack = [
  { icon: Star, text: "Personalized Style Guide" },
  { icon: Check, text: "Cabinet Quality Checklist ($297 Value)" },
  { icon: Sparkles, text: "Design Ideas For Your Specific Style" },
  { icon: Gift, text: 'BONUS: "The 7 Questions That Expose Low-Quality Cabinets"' },
];

const promises = [
  "Match your vision perfectly",
  "Arrive exactly when promised",
  "Function for how you live",
  "Last for decades",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* Commitment Section */}
      <section className="py-section bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-display text-display-lg text-primary-950 mb-6">
              Your Vision, Built Flawlessly, Delivered On Time,{" "}
              <span className="italic text-accent-500 whitespace-nowrap">
                Loved For Generations
              </span>
            </h2>

            <p className="font-body text-body-lg text-primary-700 mb-8 max-w-3xl mx-auto">
              We build custom cabinets for homeowners across Texas, creating
              designs other shops say are "too custom" or "too complicated."
            </p>

            <div className="w-16 h-px bg-accent-500 mx-auto mb-8" />

            <p className="font-body text-body text-primary-700 mb-6">
              Our promise isn't just beautiful cabinets. It's cabinets that:
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex items-center gap-2 bg-accent-100 px-4 py-2"
                >
                  <Check className="w-4 h-4 text-accent-500" />
                  <span className="font-body text-small text-primary-900">
                    {promise}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-body-lg text-primary-900 font-medium mb-8">
              We don't guess what you want. We help you DISCOVER what you want,
              then build it flawlessly.
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-6 h-6 text-accent-500" />
              <span className="font-body text-body font-medium text-primary-900">
                500+ Projects, 500+ Thrilled Homeowners, Zero Regrets
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scarcity Banner */}
      <div className="bg-accent-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-neutral-50" />
            <span className="font-body text-body font-semibold text-neutral-50 uppercase tracking-wider">
              Limited Availability — We Only Take 3 New Homeowner Projects Per
              Month
            </span>
          </div>
        </div>
      </div>

      {/* Final Quiz CTA */}
      <section className="py-section bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge variant="outline" className="border-accent-400 text-accent-400 mb-8">
              Start Your Journey
            </Badge>

            <h2 className="font-display text-display-lg text-neutral-50 mb-4">
              Find The Cabinet Style You'll Love Today And{" "}
              <span className="italic text-accent-400">
                Treasure For Decades
              </span>
            </h2>

            <p className="font-body text-body-lg text-neutral-300 mb-10">
              PLUS Get Your Personalized Cabinet Blueprint Showing Exactly What
              Features Match Your Aesthetic
            </p>

            {/* Value Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
              {valueStack.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex items-center gap-3 bg-primary-900/50 border border-primary-800 p-4 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="font-body text-small text-neutral-300 text-left">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Qualifier Text */}
            <div className="bg-primary-900/30 border border-primary-800 p-6 mb-10 text-center rounded-xl">
              <p className="font-body text-small text-neutral-400">
                We're not for everyone. We only work with homeowners who value
                quality and want cabinets they'll actually love. We limit
                projects to 3 per month so every design gets our complete
                attention. If you're looking for the cheapest option, we're not
                it.{" "}
                <strong className="text-neutral-200">
                  If you're looking for cabinets you'll be proud of for decades,
                  start with the quiz.
                </strong>
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/quiz">
              <Button variant="secondary" size="lg" className="group mb-10">
                Discover Your Cabinet Style
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* Final Nudge */}
            <div className="border-t border-primary-800 pt-10">
              <p className="font-body text-body text-neutral-400 italic max-w-2xl mx-auto">
                Still not sure? Think about this: You're going to look at these
                cabinets every single day for the next 30+ years. Three minutes
                to discover your true style could save you from decades of
                regret.{" "}
                <span className="text-accent-400 font-medium not-italic">
                  Worth it?
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
