import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

// Fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Bhavuk's Portfolio",
  description:
    "Portfolio of Bhavuk Agrawal, specializing in AI, Machine Learning, and full-stack projects.",
  icons: {
    icon: [
      // Add your favicon here if needed:
      // { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
