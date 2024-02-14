import type { Metadata } from "next";
import { GeistSansFont } from "@/lib/fonts";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/lib/functions/theme-providers";
import "@/styles/root-layout.css";
import { Header } from "@/ui/components/header";
import { Footer } from "@/ui/components/footer";

export const metadata: Metadata = {
  title: "Writer",
  description: "Writer",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Writer",
    description: "Writer",
    url: "https://writer.vgseven.com",
    siteName: "Writer",
    images: [
      {
        url: "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company/vgseven-company.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company/vgseven-company.png",
        width: 1800,
        height: 1600,
        alt: "Writer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writer",
    description: "Writer",
    images: [
      "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company/vgseven-company.png",
    ],
  },
  metadataBase: new URL("https://writer.vgseven.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSansFont.variable}`}
      suppressHydrationWarning
    >
      <body className={"font-sans"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
