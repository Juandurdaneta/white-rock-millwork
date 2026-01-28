"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { ArrowRight, Quote, User } from "lucide-react";

export default function Testimonials() {
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
    <section className="py-section bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-lg text-primary-950 mb-4">
            What Changes When You Find A Cabinet Partner Who{" "}
            <span className="italic text-accent-500">Actually Listens</span>
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full bg-white border border-neutral-200 hover:border-accent-300 transition-all duration-500">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-accent-300" />
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body text-body text-primary-700 mb-6 flex-1 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                      <User className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-primary-900">
                        {testimonial.name}
                      </p>
                      <p className="font-body text-small text-neutral-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <Link href="/quiz">
            <Button variant="primary" className="group">
              Discover Your Cabinet Style
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
