import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import "../globals.css"

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

const locales = ['en', 'es']

export const metadata: Metadata = {
  title: "DLAY - Programming Team",
  description: "We are a team of passionate programmers who transform ideas into software",
  generator: "v0.app",
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} ${openSans.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
