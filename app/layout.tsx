import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenteng Magic Dharma Karya - Body Repair Specialist | Yogyakarta",
  description:
    "Professional automotive body repair services in Tegal Mraen, Sleman, Yogyakarta. Expert dent repair, painting, and collision restoration.",
  openGraph: {
    title: "Kenteng Magic Dharma Karya",
    description:
      "Professional automotive body repair services in Tegal Mraen, Sleman, Yogyakarta. Expert dent repair, painting, and collision restoration.",
    url: "https://dharmakarya.vercel.app",
    siteName: "Kenteng Magic Dharma Karya",
    images: [
      {
        url: "https://dharmakarya.vercel.app/16.jpg",
        width: 1200,
        height: 630,
        alt: "Kenteng Magic Dharma Karya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenteng Magic Dharma Karya",
    description:
      "Professional automotive body repair services in Tegal Mraen, Sleman, Yogyakarta. Expert dent repair, painting, and collision restoration.",
    images: ["https://dharmakarya.vercel.app/16.jpg"], // sama seperti di atas
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
