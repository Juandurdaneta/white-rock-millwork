"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover Your Style",
    timeframe: "Free, 3 Minutes",
    description:
      'Take our movie-inspired style quiz. It reveals which aesthetic truly matches your personality, even if you\'re pinning five different looks. No more confusion about "what you really want."',
  },
  {
    number: "02",
    title: "Your Vision Consultation",
    timeframe: "Week 1",
    description:
      "Bring your Pinterest board. We'll translate your inspiration into REAL designs that match YOUR style and YOUR daily life. Walk out with clarity, timeline, and transparent pricing. Zero pressure, just answers.",
  },
  {
    number: "03",
    title: "Custom Design Process",
    timeframe: "Weeks 1-2",
    description:
      "We refine your design with unlimited revisions. Select finishes in person, and understand exactly what you're getting. Every question answered. Every detail explained.",
  },
  {
    number: "04",
    title: "Master Craftsmanship",
    timeframe: "Weeks 3-5",
    description:
      "Your cabinets are built with obsessive attention to detail. Premium materials. Hand-applied finishes, made to last for decades.",
  },
  {
    number: "05",
    title: "Flawless Installation",
    timeframe: "Weeks 6-8",
    description:
      "Our team installs everything perfectly. On time, clean, and professional. We don't leave until you're thrilled.",
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-section bg-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-lg text-primary-950 mb-4">
            The Cabinet Process That{" "}
            <span className="italic text-accent-500">Eliminates</span> All The
            Confusion
          </h2>
          <p className="font-body text-body-lg text-primary-700 max-w-2xl mx-auto">
            Finally understand what you're choosing and why it's right for YOUR
            home
          </p>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-neutral-300" />

          {/* Steps */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number Badge */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 bg-neutral-50 border-2 border-accent-500 flex items-center justify-center z-10">
                  <span className="font-display text-xl text-accent-500 font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-28 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                    isEven ? "lg:pr-0" : "lg:pl-0"
                  }`}
                >
                  <div className="bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-4 h-4 text-accent-500" />
                      <Badge variant="gold">{step.timeframe}</Badge>
                    </div>
                    <h3 className="font-display text-heading-lg text-primary-950 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-body text-primary-700">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-accent-100 px-6 py-3 mb-8">
            <CheckCircle className="w-5 h-5 text-accent-500" />
            <span className="font-body text-body font-medium text-accent-500 uppercase tracking-wider">
              Your Timeline Guaranteed
            </span>
          </div>

          <div className="block">
            <Link href="/quiz">
              <Button variant="primary" size="lg" className="group">
                Discover Your Cabinet Style
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
