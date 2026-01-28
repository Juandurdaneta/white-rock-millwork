"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { label: "Kitchen Cabinets" },
  { label: "Bathroom Vanities" },
  { label: "Closet Systems" },
  { label: "Custom Millwork" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-neutral-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold text-neutral-50 tracking-wide">
                WHITE ROCK
                <br />
                MILLWORK
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Custom cabinets designed for your style and your daily life.
              Delivered on time, built to last.
            </p>
            <div className="w-16 h-px bg-accent-500" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-neutral-50 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quiz"
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-300"
                >
                  Take the Style Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg text-neutral-50 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-neutral-400">
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg text-neutral-50 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  1717 US-281
                  <br />
                  Blanco, TX 78606
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <a
                  href="mailto:info@wrmtx.com"
                  className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                >
                  info@wrmtx.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} White Rock Millwork. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-neutral-500 text-sm hover:text-neutral-300 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-500 text-sm hover:text-neutral-300 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
