import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You | Whiterock Millwork",
  description:
    "Thank you for contacting Whiterock Millwork. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/Stock/IMG_8640.jpg"
            alt="Custom cabinet craftsmanship"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/70 to-primary-950/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-20 h-20 text-accent-400 mx-auto mb-8" />
          <h1 className="font-display text-display-lg text-white mb-6">
            Thank You for Reaching Out!
          </h1>
          <p className="font-body text-body-lg text-neutral-300 mb-4">
            We&apos;ve received your message and our team will be in touch
            within 24 hours to discuss your project.
          </p>
          <p className="font-body text-body text-neutral-400 mb-10">
            In the meantime, feel free to explore our gallery for inspiration or
            learn more about our process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery">
              <Button variant="secondary" size="lg">
                View Our Gallery
              </Button>
            </Link>
            <Link href="/">
              <Button variant="white" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
