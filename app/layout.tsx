import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import StructuredData from "@/components/structured-data"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {

  title: "DLAY - Programming Team",
  description: "We are a team of passionate programmers who transform ideas into software",
  generator: "v0.app",
  icons: {
    icon: '/icons/icon.png',
    shortcut: '/icons/icon.png',
    apple: '/icons/icon.png',
      
  description: "DLAY - Equipo de desarrolladores de software especializados en crear soluciones digitales innovadoras. Transformamos ideas en realidad con tecnología de vanguardia.",
  keywords: [
    "DLAY",
    "desarrollo de software",
    "programación",
    "soluciones digitales",
    "desarrollo web",
    "aplicaciones móviles",
    "tecnología",
    "innovación",
    "software development",
    "programming",
    "digital solutions",
    "web development",
    "mobile apps"
  ],
  authors: [{ name: "DLAY Team" }],
  creator: "DLAY",
  publisher: "DLAY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dlay.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://dlay.com',
    title: 'DLAY - Desarrollo de Software & Soluciones Digitales',
    description: 'Equipo de desarrolladores de software especializados en crear soluciones digitales innovadoras. Transformamos ideas en realidad con tecnología de vanguardia.',
    siteName: 'DLAY',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DLAY - Desarrollo de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DLAY - Desarrollo de Software & Soluciones Digitales',
    description: 'Equipo de desarrolladores de software especializados en crear soluciones digitales innovadoras.',
    images: ['/twitter-image.jpg'],
    creator: '@dlay',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} ${openSans.variable}`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
