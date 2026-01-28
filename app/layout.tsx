import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

// Font loading is handled via CSS in globals.css
// This provides better compatibility across environments
// In production, add Google Fonts via the head component or CSS @import

export const metadata: Metadata = {
  title: {
    default: "White Rock Millwork | Custom Cabinets in Texas",
    template: "%s | White Rock Millwork",
  },
  description:
    "Custom cabinets designed for your style AND your daily life. Delivered on time, built to last. Serving affluent Texas homeowners with premium cabinetry.",
  keywords: [
    "custom cabinets",
    "Texas cabinets",
    "kitchen cabinets",
    "bathroom vanities",
    "custom millwork",
    "Blanco TX",
    "Austin cabinets",
    "San Antonio cabinets",
    "luxury cabinets",
    "premium cabinetry",
  ],
  authors: [{ name: "White Rock Millwork" }],
  creator: "White Rock Millwork",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wrmtx.com",
    siteName: "White Rock Millwork",
    title: "White Rock Millwork | Custom Cabinets in Texas",
    description:
      "Custom cabinets designed for your style AND your daily life. Delivered on time, built to last.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Rock Millwork - Premium Custom Cabinets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Rock Millwork | Custom Cabinets in Texas",
    description:
      "Custom cabinets designed for your style AND your daily life. Delivered on time, built to last.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
