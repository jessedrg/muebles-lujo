import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap'
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: '--font-serif',
  display: 'swap'
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxeinterieur.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Luxe Interieur | Muebles de Lujo para tu Hogar',
    template: '%s | Luxe Interieur',
  },
  description: 'Muebles de lujo artesanales. Sofás, mesas, camas y sillones de diseño. Fabricación europea, garantía 10 años. Entrega e instalación incluida.',
  keywords: ['muebles de lujo', 'sofás de diseño', 'mesas de comedor', 'camas premium', 'sillones de diseño', 'muebles artesanales', 'mobiliario de lujo', 'decoración de interiores'],
  authors: [{ name: 'Luxe Interieur' }],
  creator: 'Luxe Interieur',
  publisher: 'Luxe Interieur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/icon-light-32x32.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'Luxe Interieur',
    title: 'Luxe Interieur | Muebles de Lujo para tu Hogar',
    description: 'Muebles de lujo artesanales. Sofás, mesas, camas y sillones de diseño. Fabricación europea, garantía 10 años.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1577421759415-bba870669383?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxe Interieur - Muebles de Lujo para tu Hogar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Interieur | Muebles de Lujo',
    description: 'Muebles de lujo artesanales para tu hogar.',
    images: ['https://images.unsplash.com/photo-1577421759415-bba870669383?w=1200&h=630&fit=crop&q=80'],
    creator: '@luxeinterieur',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f4f0',
  width: 'device-width',
  initialScale: 1,
}

import { IntercomProvider } from '@/components/intercom'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <IntercomProvider />
        <Analytics />
      </body>
    </html>
  )
}
