import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/theme-provider";
import Footer from "@/widgets/footer/footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["200", "300", "400", "700"],
  display: 'swap',
  variable: '--font-montserrat',
})

const integralCF = localFont({
  src: [
    {
      path: '../shared/font_IntegralCF/IntegralCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/font_IntegralCF/IntegralCF-Bold.woff2',
      weight: '500',
      style: 'bolt',
    },
    {
      path: '../shared/font_IntegralCF/IntegralCF-Heavy.woff2',
      weight: '700',
      style: 'heavy',
    },    
  ],
})

export const metadata: Metadata = {
  title: "YAROVISION",
  description: "3D MOTION DEGIGNE",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${integralCF.className } ${montserrat.variable}`}>
        <ThemeProvider>
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
