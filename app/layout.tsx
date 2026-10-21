import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import AnalyticsConsent from '@/components/AnalyticsConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Andriamasy Eric Mathieu — Lead Developer à Madagascar',
    template: '%s | Andriamasy Eric Mathieu'
  },
  description: 'Lead Developer full-stack à Antananarivo, Madagascar. Découvrez les projets et l’expérience d’Andriamasy Eric Mathieu en Symfony, Laravel, React et TypeScript.',
  authors: [{ name: 'Andriamasy Eric Mathieu' }],
  creator: 'Andriamasy Eric Mathieu',
  publisher: 'Andriamasy Eric Mathieu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://andriamasy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://andriamasy.vercel.app',
    title: 'Andriamasy Eric Mathieu — Lead Developer à Madagascar',
    description: 'Découvrez les projets et l’expérience d’Andriamasy Eric Mathieu, Lead Developer full-stack à Antananarivo.',
    siteName: 'Portfolio Andriamasy Eric Mathieu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andriamasy Eric Mathieu — Lead Developer',
    description: 'Projets et expérience en développement web full-stack à Antananarivo, Madagascar.',
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
  category: 'Portfolio Professionnel',
  classification: 'Développeur Web Full-Stack',
  verification: {
    google: 'SSv_6goMdeeDIa4EebKqfeNBth8GDRQmOdWml6',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <StructuredData />
        <AnalyticsConsent />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
