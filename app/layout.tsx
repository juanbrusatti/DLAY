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
  title: {
    default: "DLAY - Desarrollo de Software & Soluciones Digitales",
    template: "%s | DLAY"
  },
  description: "DLAY - Equipo de programadores y desarrolladores de software en Río Cuarto. Especializados en desarrollo de aplicaciones web, móviles y soluciones digitales a medida. Transformamos ideas en realidad con tecnología de vanguardia.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/icon.png',
  },
  keywords: [
    "DLAY",
    "programadores",
    "desarrolladores",
    "software",
    "software Río Cuarto",
    "programadores Río Cuarto",
    "desarrollo de software",
    "programación",
    "desarrollo web",
    "aplicaciones móviles",
    "soluciones digitales",
    "tecnología",
    "innovación",
    "software development",
    "programming",
    "web developers",
    "mobile app development",
    "digital solutions",
    "Río Cuarto",
    "Córdoba",
    "Argentina",
    "desarrollo a medida",
    "consultoría software",
    "empresa de software",
    "servicios de programación"
  ],
  authors: [{ name: "DLAY Team" }],
  creator: "DLAY",
  publisher: "DLAY",
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
    title: 'DLAY - Programadores & Desarrollo de Software en Río Cuarto',
    description: 'Equipo de programadores y desarrolladores de software especializados en aplicaciones web, móviles y soluciones digitales a medida en Río Cuarto, Córdoba.',
    siteName: 'DLAY',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DLAY - Programadores y Desarrollo de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DLAY - Programadores & Desarrollo de Software en Río Cuarto',
    description: 'Equipo de programadores y desarrolladores de software especializados en aplicaciones web, móviles y soluciones digitales a medida.',
    images: ['/twitter-image.jpg'],
    creator: '@dlay',
  },
  robots: {
    index: true,
    follow: true,
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
