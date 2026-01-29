"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Building2, Check } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import Badge from "@/components/ui/badge";

type ContactTrack = "homeowner" | "professional";

const professionalBenefits = [
  "Turnkey cabinet solutions from design to installation",
  "Reliable timelines your clients can count on",
  "Dedicated project management for every job",
  "Premium quality that elevates your projects",
  "Volume pricing for builders and contractors",
];

export default function ContactPage() {
  const [activeTrack, setActiveTrack] = useState<ContactTrack>("homeowner");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/Stock/IMG_8640.jpg"
            alt="Custom bathroom vanity cabinets"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/70 to-primary-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="gold" className="mb-6">Get In Touch</Badge>
            <h1 className="font-display text-display-lg text-white mb-6">
              Let&apos;s Build Something Beautiful
            </h1>
            <p className="font-body text-body-lg text-neutral-300 max-w-2xl mx-auto">
              Whether you&apos;re a homeowner with a vision or a professional 
              seeking a reliable partner, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Track Selector */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TrackButton
              active={activeTrack === "homeowner"}
              onClick={() => setActiveTrack("homeowner")}
              icon={Home}
              title="I'm a Homeowner"
              description="Schedule your free vision consultation"
            />
            <TrackButton
              active={activeTrack === "professional"}
              onClick={() => setActiveTrack("professional")}
              icon={Building2}
              title="I'm a Professional"
              description="Partner with us on your projects"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTrack === "homeowner" ? (
                <>
                  <h2 className="font-display text-display-md text-primary-950 mb-4">
                    Start Your Cabinet Journey
                  </h2>
                  <p className="font-body text-body-lg text-primary-700 mb-8">
                    Schedule your free vision consultation. We&apos;ll translate your 
                    Pinterest board into a real design you&apos;ll love.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-display text-display-md text-primary-950 mb-4">
                    Partner With Us
                  </h2>
                  <p className="font-body text-body-lg text-primary-700 mb-6">
                    We work with builders, contractors, and designers who demand 
                    quality and reliability. Let&apos;s discuss how we can support your projects.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {professionalBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-body text-primary-600">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="bg-white p-8 shadow-sm border border-neutral-100 rounded-xl">
                <ContactForm type={activeTrack} />
              </div>
            </motion.div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="font-display text-heading-lg text-primary-900 mb-6">
                Contact Information
              </h3>
              <ContactInfo />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <section className="bg-accent-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-heading-lg text-primary-900 italic">
            &quot;We only take 3 new projects per month. Every design gets our complete attention.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}

interface TrackButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function TrackButton({ active, onClick, icon: Icon, title, description }: TrackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-6 text-left border-2 transition-all duration-300
        ${active 
          ? "border-accent-500 bg-accent-50" 
          : "border-neutral-200 bg-white hover:border-neutral-300"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className={`
          w-12 h-12 flex items-center justify-center flex-shrink-0
          ${active ? "bg-accent-500 text-white" : "bg-neutral-100 text-neutral-600"}
        `}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className={`
            font-display text-heading-md mb-1
            ${active ? "text-primary-900" : "text-primary-700"}
          `}>
            {title}
          </h3>
          <p className="font-body text-small text-primary-500">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}
