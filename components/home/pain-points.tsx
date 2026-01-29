"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import {
  AlertCircle,
  EarOff,
  HelpCircle,
  FileQuestion,
  Clock,
  ArrowRight,
} from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    text: "Showrooms with 1,000 samples and zero honest guidance",
  },
  {
    icon: EarOff,
    text: "Contractors who don't actually listen to what you're saying",
  },
  {
    icon: HelpCircle,
    text: "Quotes that vary wildly with no explanation why",
  },
  {
    icon: FileQuestion,
    text: "Technical terms that make you feel like you should have studied cabinet construction",
  },
  {
    icon: Clock,
    text: '"What if I choose wrong and hate these cabinets for the next 20 years?"',
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

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
            <h2 className="font-display text-display-lg text-primary-950 mb-6">
              The Real Reason You{" "}
              <span className="italic text-accent-500">Can't Decide</span> On
              Cabinets
            </h2>

            <div className="w-16 h-px bg-accent-500 mb-8" />

            <p className="font-body text-body-lg text-primary-700 mb-6">
              We get it. You're terrified of making the wrong choice.
            </p>

            <p className="font-body text-body text-primary-700 mb-4">
              You've been scrolling Pinterest for months. You know what you
              love. You can <em>FEEL</em> what you want your home to be like.
            </p>

            <p className="font-body text-body text-primary-700 mb-8">
              But between your vision and reality? There's a minefield:
            </p>

            {/* Pain Points List */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 mb-8"
            >
              {painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent-100 rounded-full">
                    <point.icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <p className="font-body text-body text-primary-700 pt-2">
                    {point.text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <div className="bg-neutral-50 p-6 border-l-2 border-accent-500 mb-8 rounded-lg">
              <p className="font-body text-body text-primary-700 mb-4">
                Every cabinet looks fine under showroom lighting. Everyone
                promises quality. Every contractor says they can "do custom." But
                six months after installation, you'll know if you got what you
                paid for.
              </p>
              <p className="font-body text-body-lg text-primary-900 font-medium">
                And there's no undo button on cabinets.
              </p>
            </div>

            <p className="font-body text-body text-primary-700 mb-4">
              You didn't save hundreds of ideas just to end up with regret.
            </p>

            <p className="font-body text-body-lg text-primary-900 font-medium mb-8">
              You deserve a partner who eliminates the overwhelm, speaks your
              language, and gives you complete confidence in every decision.
            </p>

            <Link href="/quiz">
              <Button variant="primary" className="group">
                Discover Your Cabinet Style
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Kitchen Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/Images/Stock/landing.webp"
                alt="Beautiful custom kitchen cabinets"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent-500 -z-10 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
