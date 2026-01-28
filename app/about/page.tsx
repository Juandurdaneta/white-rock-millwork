"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  Shield, 
  Users, 
  Award,
  MapPin,
  Ruler,
  Wrench,
  ArrowRight
} from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const values = [
  {
    icon: Shield,
    title: "Quality Without Compromise",
    description: "We use only premium materials and time-tested construction methods. Every cabinet is built to last for generations.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "We limit projects to 3 per month so every client receives our complete focus. Your project deserves undivided attention.",
  },
  {
    icon: Clock,
    title: "Timelines You Can Trust",
    description: "We guarantee our delivery dates. When we say your cabinets will be ready, they will be ready—no excuses.",
  },
  {
    icon: Sparkles,
    title: "Design That Listens",
    description: "Your vision drives everything we do. We translate your Pinterest board into reality, not push you toward cookie-cutter solutions.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your vision, lifestyle, and how you use your space.",
  },
  {
    number: "02",
    title: "Design",
    description: "Custom designs with unlimited revisions until every detail is perfect.",
  },
  {
    number: "03",
    title: "Craft",
    description: "Hand-built with premium materials and obsessive attention to detail.",
  },
  {
    number: "04",
    title: "Install",
    description: "Professional installation, on time, clean, and done right.",
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Local Texas Company",
    description: "We're your neighbors, not a faceless corporation. Based in Blanco, serving homeowners across Texas.",
  },
  {
    icon: Ruler,
    title: "In-House Design to Installation",
    description: "One team handles everything. No miscommunication between designers, builders, and installers.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description: "We source the finest hardwoods and finishes. Quality you can see and feel for decades.",
  },
  {
    icon: Wrench,
    title: "Guaranteed Timelines",
    description: "We honor our commitments. Your project will be completed when we say it will.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-primary-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <div className="absolute top-20 right-10 w-64 h-64 border border-accent-500/20 rotate-12" />
        <div className="absolute bottom-10 left-20 w-48 h-48 border border-accent-500/10 -rotate-6" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUpVariants}>
              <Badge variant="gold" className="mb-6">Our Story</Badge>
            </motion.div>
            <motion.h1 
              variants={fadeUpVariants}
              className="font-display text-display-lg text-white mb-6"
            >
              Craftsmanship Meets Vision
            </motion.h1>
            <motion.p 
              variants={fadeUpVariants}
              className="font-body text-body-lg text-neutral-300"
            >
              We don&apos;t just build cabinets. We translate your vision into custom 
              pieces that elevate your home and simplify your daily life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 mx-auto text-neutral-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-body text-small text-neutral-500">Team Photo</span>
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent-500 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-display-md text-primary-950 mb-6">
              The White Rock Millwork{" "}
              <span className="italic text-accent-500">Difference</span>
            </h2>
            
            <div className="space-y-6 font-body text-body-lg text-primary-700">
              <p>
                For over three decades, we&apos;ve been crafting custom cabinets for Texas 
                homeowners who refuse to settle. We understand that cabinets aren&apos;t 
                just storage—they&apos;re the foundation of how your home feels and functions.
              </p>
              <p>
                Unlike big box stores and assembly-line manufacturers, we take on just 
                three new projects each month. This allows us to give every client 
                our complete attention, ensuring your vision is executed flawlessly.
              </p>
              <p>
                Our team handles everything from initial design through final installation. 
                One point of contact. One vision. One team that takes complete ownership 
                of your project from concept to completion.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="font-body text-small text-neutral-500 uppercase tracking-wider">
                500+ Projects • 500+ Thrilled Homeowners • Zero Regrets
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper variant="secondary">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-6">What We Believe</Badge>
          <h2 className="font-display text-display-md text-primary-950 mb-6">
            Our Core Values
          </h2>
          <p className="font-body text-body-lg text-primary-700">
            These principles guide every decision we make, from material selection 
            to the final handshake at installation.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <value.icon className="w-10 h-10 text-accent-500 mb-6" />
              <h3 className="font-display text-heading-lg text-primary-900 mb-4">
                {value.title}
              </h3>
              <p className="font-body text-body text-primary-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Process Overview */}
      <SectionWrapper variant="dark">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-6">How We Work</Badge>
          <h2 className="font-display text-display-md text-white mb-6">
            Our Process
          </h2>
          <p className="font-body text-body-lg text-neutral-300">
            A straightforward approach that eliminates confusion and delivers 
            results you&apos;ll love for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="font-display text-6xl text-accent-500/30 block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-heading-lg text-white mb-3">
                {step.title}
              </h3>
              <p className="font-body text-body text-neutral-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md text-primary-950 mb-6">
            Why Choose White Rock Millwork?
          </h2>
          <p className="font-body text-body-lg text-primary-700">
            When you work with us, you&apos;re not just getting cabinets—you&apos;re getting 
            a partner who cares as much about your project as you do.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="flex gap-6 p-6 border border-neutral-200 hover:border-accent-500/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-accent-100 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent-500" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-heading-md text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-body text-primary-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper variant="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-display-md text-primary-950 mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-body text-body-lg text-primary-700 mb-8">
            Take our style quiz to discover your perfect cabinet aesthetic, 
            or schedule a consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button variant="primary" size="lg" className="group">
                Discover Your Style
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
