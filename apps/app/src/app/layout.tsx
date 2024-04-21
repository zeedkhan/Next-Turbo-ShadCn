import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@turbocharger/ui/styles/shared-globals.css";
import { cn } from "@turbocharger/utils";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { display, inter } from "@/styles/fonts";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.thumbnail],
  },
  metadataBase: new URL(siteConfig.url),
};

const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export { viewport };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={cn(inter.variable, display.variable)} suppressHydrationWarning>
        <Providers>
          <Analytics />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
