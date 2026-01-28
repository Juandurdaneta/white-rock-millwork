"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/button";
import { ArrowRight, Gem } from "lucide-react";

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-section bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <Gem className="w-10 h-10 text-accent-400" />
                  </div>
                  <span className="text-neutral-500 font-body text-sm uppercase tracking-wider">
                    Quality Comparison Image
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-100 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-display-md text-primary-950 mb-6">
              Value of investing right:{" "}
              <span className="italic text-accent-500">
                Priceless + zero replacement costs
              </span>
            </h2>

            <div className="w-16 h-px bg-accent-500 mb-8" />

            <p className="font-body text-body-lg text-primary-700 mb-6">
              You don't have a budget problem. You have a "knowing what quality
              actually means" problem.
            </p>

            <p className="font-body text-body text-primary-700 mb-6">
              And here's the secret big box stores pray you never learn:{" "}
              <strong className="text-primary-900">
                The finish is where cheap cabinets reveal themselves.
              </strong>
            </p>

            <div className="bg-neutral-100 p-6 border-l-2 border-accent-500 mb-8">
              <p className="font-body text-body text-primary-700 mb-2">
                <strong className="text-primary-900">Premium finishes</strong>{" "}
                last decades.
              </p>
              <p className="font-body text-body text-primary-700 mb-4">
                <strong className="text-primary-900">Cheap finishes?</strong>{" "}
                They chip, yellow, and show wear within years.
              </p>
              <p className="font-body text-body-lg text-primary-900 font-medium">
                But they look identical in the showroom.
              </p>
            </div>

            <p className="font-body text-body text-primary-700 mb-8">
              Stop gambling on cabinets that might look good now.{" "}
              <strong className="text-primary-900">
                Start investing in quality you'll love for the next 30 years.
              </strong>
            </p>

            <Link href="/quiz">
              <Button variant="primary" className="group">
                Discover Your Cabinet Style
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
