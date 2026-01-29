import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { styleProfiles, getStyleProfile, StyleProfile } from "@/data/quiz-results";
import { StyleType } from "@/lib/quiz-logic";
import SectionWrapper from "@/components/layout/section-wrapper";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Palette,
  Sparkles,
  Phone,
  Download,
} from "lucide-react";

interface Props {
  params: Promise<{ style: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const style = resolvedParams.style as StyleType;
  const profile = styleProfiles[style];

  if (!profile) {
    return {
      title: "Style Not Found | Whiterock Millwork",
    };
  }

  return {
    title: `${profile.name} | Your Cabinet Style | Whiterock Millwork`,
    description: profile.tagline,
    openGraph: {
      title: `${profile.name} | Your Cabinet Style`,
      description: profile.tagline,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(styleProfiles).map((style) => ({
    style,
  }));
}

export default async function QuizResultsPage({ params }: Props) {
  const resolvedParams = await params;
  const style = resolvedParams.style as StyleType;
  const profile = styleProfiles[style];

  if (!profile) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-primary-950 overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-950">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent-500/20 rotate-12" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent-500/10 -rotate-6" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              Your Cabinet Style Revealed
            </Badge>

            <h1 className="font-display text-display-xl text-white mb-6">
              {profile.name}
            </h1>

            <p className="font-display text-display-md text-accent-400 italic mb-8">
              {profile.tagline}
            </p>

            <p className="font-body text-body-lg text-neutral-300 max-w-2xl">
              We&apos;ve analyzed your responses to reveal the cabinet aesthetic that
              truly matches your personality and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-display-md text-primary-950 mb-8 text-center">
            Here&apos;s what we discovered about your{" "}
            <span className="italic text-accent-500">design personality</span>
          </h2>

          <div className="space-y-6">
            {profile.description.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-body-lg text-primary-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center my-12">
            <div className="w-px h-16 bg-accent-500" />
          </div>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper variant="secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-display-md text-primary-950 mb-4 text-center">
            Your Perfect Cabinet Features
          </h2>
          <p className="font-body text-body-lg text-primary-600 text-center mb-12 max-w-2xl mx-auto">
            Based on your style profile, here are the specific elements that will
            bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Door Style"
              description={profile.features.doorStyle}
              icon="door"
            />
            <FeatureCard
              title="Hardware"
              description={profile.features.hardware}
              icon="hardware"
            />
            <FeatureCard
              title="Finish"
              description={profile.features.finish}
              icon="finish"
            />
            <FeatureCard
              title="Layout Recommendations"
              description={profile.features.layout}
              icon="layout"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Color Palette Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-6 h-6 text-accent-500" />
            <h2 className="font-display text-display-md text-primary-950">
              Colors That Complement Your Style
            </h2>
          </div>
          <p className="font-body text-body-lg text-primary-600 text-center mb-12 max-w-2xl mx-auto">
            These carefully curated palettes will create the perfect atmosphere
            for your {profile.name.toLowerCase()} kitchen.
          </p>

          {/* Color Swatches */}
          <div className="flex justify-center gap-4 mb-12">
            {profile.colorSwatches.map((color, index) => (
              <div
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: color }}
                title={profile.colors.primary[index] || "Accent"}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-100 p-6">
              <h3 className="font-display text-heading-lg text-primary-900 mb-4">
                Primary Colors
              </h3>
              <ul className="space-y-2">
                {profile.colors.primary.map((color, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="font-body text-body text-primary-700">
                      {color}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-100 p-6">
              <h3 className="font-display text-heading-lg text-primary-900 mb-4">
                Accent Elements
              </h3>
              <ul className="space-y-2">
                {profile.colors.accent.map((accent, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="font-body text-body text-primary-700">
                      {accent}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mistakes to Avoid Section */}
      <SectionWrapper variant="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-accent-400" />
            <h2 className="font-display text-display-md text-white">
              Common Mistakes to Avoid
            </h2>
          </div>
          <p className="font-body text-body-lg text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
            Homeowners with your style often make these mistakes. Here&apos;s how to
            get it right.
          </p>

          <div className="space-y-6">
            {profile.mistakes.map((mistake, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-primary-900/50 p-6 border-l-4 border-accent-500"
              >
                <span className="font-display text-2xl text-accent-500 flex-shrink-0">
                  {index + 1}
                </span>
                <p className="font-body text-body-lg text-neutral-200">
                  {mistake}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="gold" className="mb-6">
            Your Next Step
          </Badge>

          <h2 className="font-display text-display-md text-primary-950 mb-6">
            Ready to Bring Your{" "}
            <span className="italic text-accent-500">{profile.name}</span> Kitchen
            to Life?
          </h2>

          <p className="font-body text-body-lg text-primary-700 mb-8 max-w-2xl mx-auto">
            Now that you know your style, let&apos;s translate your Pinterest board
            into a real design. Schedule your free vision consultation and walk
            out with clarity, timeline, and transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                <Phone className="w-4 h-4 mr-2" />
                Schedule My Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Button variant="secondary" size="lg" disabled>
              <Download className="w-4 h-4 mr-2" />
              Download Style Guide (Coming Soon)
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="font-body text-small text-neutral-500 uppercase tracking-wider">
              500+ Projects • 500+ Thrilled Homeowners • Zero Regrets
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Final Nudge */}
      <section className="bg-accent-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-heading-lg text-primary-900 italic">
            &quot;You&apos;re going to look at these cabinets every single day for the next
            30+ years. Three minutes on a quiz led you here—imagine what a real
            consultation could do.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    door: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
    hardware: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2v4m0 12v4m10-10h-4M6 12H2"
        />
      </svg>
    ),
    finish: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    layout: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  };

  return (
    <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-accent-500">
      <div className="text-accent-500 mb-4">{iconMap[icon]}</div>
      <h3 className="font-display text-heading-lg text-primary-900 mb-3">
        {title}
      </h3>
      <p className="font-body text-body text-primary-600">{description}</p>
    </div>
  );
}
