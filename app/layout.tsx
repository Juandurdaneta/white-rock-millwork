import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

// Font loading is handled via CSS in globals.css
// This provides better compatibility across environments
// In production, add Google Fonts via the head component or CSS @import

export const metadata: Metadata = {
  title: {
    default: "Whiterock Millwork | Custom Cabinets in Texas",
    template: "%s | Whiterock Millwork",
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
  authors: [{ name: "Whiterock Millwork" }],
  creator: "Whiterock Millwork",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wrmtx.com",
    siteName: "Whiterock Millwork",
    title: "Whiterock Millwork | Custom Cabinets in Texas",
    description:
      "Custom cabinets designed for your style AND your daily life. Delivered on time, built to last.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whiterock Millwork - Premium Custom Cabinets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whiterock Millwork | Custom Cabinets in Texas",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4XBJ6C9');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4XBJ6C9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
