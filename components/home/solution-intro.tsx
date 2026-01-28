"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SolutionIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-section bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="w-px h-16 bg-accent-500 mx-auto mb-8" />

          <h2 className="font-display text-display-lg text-primary-950 mb-6">
            What If Someone Actually{" "}
            <span className="italic text-accent-500">Understood</span> Your
            Dream?
          </h2>

          <p className="font-body text-body-lg text-primary-700 max-w-2xl mx-auto">
            At White Rock Millwork, we translate your vision into custom
            cabinets built for YOUR style and YOUR life.
          </p>

          <div className="w-px h-16 bg-accent-500 mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
