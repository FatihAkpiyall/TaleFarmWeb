import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaleFarm - Hikaye Oluşturma Uygulaması',
  description: 'Yapay zeka destekli hikaye oluşturma uygulaması. Hayal gücünüzü serbest bırakın!',
  keywords: 'hikaye, yapay zeka, yaratıcılık, yazılım, mobil uygulama',
  authors: [{ name: 'TaleFarm Team' }],
  openGraph: {
    title: 'TaleFarm - Hikaye Oluşturma Uygulaması',
    description: 'Yapay zeka destekli hikaye oluşturma uygulaması',
    url: 'https://tale-farm.com',
    siteName: 'TaleFarm',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TaleFarm',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaleFarm - Hikaye Oluşturma Uygulaması',
    description: 'Yapay zeka destekli hikaye oluşturma uygulaması',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
