"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-neutral-50/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <span
                className={cn(
                  "font-display text-xl sm:text-2xl font-semibold tracking-wide transition-colors duration-300",
                  isScrolled
                    ? "text-primary-950"
                    : "text-neutral-50 group-hover:text-accent-300"
                )}
              >
                WHITE ROCK MILLWORK
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-body text-sm uppercase tracking-widest transition-colors duration-300",
                    isScrolled
                      ? "text-primary-700 hover:text-primary-950"
                      : "text-neutral-200 hover:text-neutral-50",
                    pathname === link.href && "text-accent-500"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent-500"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button
                  variant={isScrolled ? "primary" : "white"}
                  size="sm"
                >
                  Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "lg:hidden p-2 transition-colors duration-300",
                isScrolled ? "text-primary-950" : "text-neutral-50"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-950/90 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-primary-950 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-300 hover:text-neutral-50 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex flex-col justify-center px-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-4 font-display text-3xl transition-colors duration-300",
                          pathname === link.href
                            ? "text-accent-500"
                            : "text-neutral-300 hover:text-neutral-50"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-8"
                >
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full">
                      Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
