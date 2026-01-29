"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Palette, Shield, Home, Wrench, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Palette,
    title: "Design Without Guessing",
    description:
      "Show us your Pinterest board. We'll identify your true style (even if you're pinning five different aesthetics) and design cabinets that capture what you're actually envisioning.",
  },
  {
    icon: Shield,
    title: "Quality You Understand",
    description:
      "We'll show you exactly what makes cabinets last 50 years vs. 5 years. No jargon. No guessing. Just confidence in your investment.",
  },
  {
    icon: Home,
    title: "Built For How You Live",
    description:
      "Do you bake? Entertain? Need storage for a million things? We design for YOUR daily reality, not cookie-cutter \"kitchens.\"",
  },
  {
    icon: Wrench,
    title: "Flawless Installation",
    description:
      "Our team installs everything perfectly. On time. Clean. Professional. Done right.",
  },
];

export default function FourPillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="py-section bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-lg text-neutral-50 mb-4">
            Our Unique{" "}
            <span className="italic text-accent-400">Proven System</span>
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto" />
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                variant="dark"
                className="h-full bg-primary-900/50 backdrop-blur-sm border border-primary-800 hover:border-accent-500/50 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 flex items-center justify-center bg-accent-500/10 border border-accent-500/30 mb-6 rounded-xl">
                    <pillar.icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <h3 className="font-display text-heading-lg text-neutral-50 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-body text-neutral-400 flex-1">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <p className="font-body text-body-lg text-neutral-300 max-w-3xl mx-auto mb-10">
            The difference? One consultation where we actually listen. One design
            process focused on YOUR vision. One team that handles everything from
            concept to installation.
          </p>

          <Link href="/quiz">
            <Button variant="secondary" className="group">
              Discover Your Cabinet Style
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
