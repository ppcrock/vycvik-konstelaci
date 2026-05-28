import './globals.css';
import Header from '@/app/components/layout/header';
import Footer from '@/app/components/layout/footer';
import Providers from '@/providers/Provider';
import { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://vycvikkonstelaci.cz"),
  title: "Výcvik konstelací",
  description: "Výcvik rodinných a firemních konstelací s Janem Krejčiříkem.",
  icons: {
    icon: [
      { url: "/web-app-manifest-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/web-app-manifest-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/web-app-manifest-192x192.png",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Výcvik konstelací",
    images: [
      {
        url: "/images/og-vycvik-konstelace.jpg",
        width: 1200,
        height: 630,
        alt: "Výcvik rodinných a firemních konstelací",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-vycvik-konstelace.jpg"],
  },
};
const font = Inter_Tight({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
