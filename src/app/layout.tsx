import './globals.css';
import Header from '@/app/components/layout/header';
import Footer from '@/app/components/layout/footer';
import Providers from '@/providers/Provider';
import { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

export const metadata: Metadata = {
  title: "Výcvik konstelací",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
    apple: "/favicon.png",
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
