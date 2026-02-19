import './globals.css';
import Header from '@/app/components/layout/header';
import Footer from '@/app/components/layout/footer';
import Providers from '@/providers/Provider';
import AnimatedWrapper from '@/providers/AnimatedWrapper';
import { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

export const metadata: Metadata = {
  title: "Optura Agency by Get NextJs Templates",
};
const font = Inter_Tight({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <Header />
          <AnimatedWrapper>
            {children}
            <Footer />
          </AnimatedWrapper>
        </Providers>
      </body>
    </html>
  )
}
