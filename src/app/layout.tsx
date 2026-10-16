import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/ui/SkipToContent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sahiltomar.pro"),
  title: {
    default: "Sahil Tomar — Founder's Office · Product & AI Operations",
    template: "%s | Sahil Tomar",
  },
  description:
    "Decoding startup bottlenecks and engineering practical AI systems. Personal executive portfolio of Sahil Tomar — Operator, Product Builder, and Architect of CevonX.",
  keywords: [
    "Sahil Tomar",
    "Founder's Office",
    "Product Operations",
    "AI Systems Architecture",
    "CevonX",
    "Product Studio",
    "LedgerLens",
    "ProductScout",
    "PrioX",
    "Strategy and Operations",
    "Venture Forensics",
  ],
  authors: [{ name: "Sahil Tomar", url: "https://sahiltomar.pro" }],
  creator: "Sahil Tomar",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahiltomar.pro",
    title: "Sahil Tomar — Founder's Office · Product & AI Operations",
    description:
      "Decoding startup bottlenecks and engineering practical AI systems. Personal executive portfolio of Sahil Tomar — Operator, Product Builder, and Architect of CevonX.",
    siteName: "Sahil Tomar",
    images: [
      {
        url: "https://sahiltomar.pro/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sahil Tomar — Founder's Office · Product & AI Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Tomar — Founder's Office · Product & AI Operations",
    description:
      "Decoding startup bottlenecks and engineering practical AI systems. Personal executive portfolio of Sahil Tomar — Operator, Product Builder, and Architect of CevonX.",
    images: ["https://sahiltomar.pro/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sahil Tomar",
    jobTitle: "Founder's Office · Product & AI Operations",
    description:
      "Computer Science graduate and AI-augmented product builder based in Delhi NCR. Architect at CevonX.",
    url: "https://sahiltomar.pro",
    email: "sahiltomar2430@gmail.com",
    sameAs: [
      "https://linkedin.com/in/me-sahiltomar",
      "https://github.com/me-sahiltomar",
      "https://productstudio.cevonx.com",
      "https://cevonx.com",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Deenbandhu Chhotu Ram University of Science and Technology (DCRUST), Murthal",
      },
      {
        "@type": "EducationalOrganization",
        name: "iHUB DivyaSampark, IIT Roorkee",
      },
    ],
    knowsAbout: [
      "Founder's Office",
      "Product Management",
      "Business Operations",
      "Root Cause Analysis",
      "Applied AI & LLM Engineering",
      "Workflow Automation",
      "Full-Stack Software Engineering",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`min-h-screen flex flex-col font-sans bg-[#FAFAFA] text-[#09090B] ${inter.variable} ${jetbrains.variable}`}
      >
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
