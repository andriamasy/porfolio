import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Andriamasy Eric Mathieu - Lead Developer | Portfolio',
    template: '%s | Andriamasy Eric Mathieu'
  },
  description: 'Andriamasy Eric Mathieu - Lead Developer à Madagascar. 8+ ans d\'expérience en développement web full-stack. Expert Symfony, Laravel, ReactJS, TypeScript, Angular, NestJS. Développeur freelance disponible pour vos projets web. Spécialisé Clean Architecture, SOLID, CI/CD, Docker. Contactez-moi à Antananarivo.',
  keywords: [
    // Recherches avec localisation
    'Lead Developer Madagascar',
    'Développeur Full-Stack Madagascar',
    'Développeur Symfony Madagascar',
    'Développeur Laravel Madagascar',
    'Développeur ReactJS Madagascar',
    'Développeur TypeScript Madagascar',
    'Développeur Angular Madagascar',
    'Développeur Next.js Madagascar',
    'Développeur freelance Madagascar',
    'Lead Developer Antananarivo',
    'Développeur web Antananarivo',
    'Programmeur PHP Madagascar',
    'Développeur JavaScript Madagascar',
    'Architecte logiciel Madagascar',
    'Consultant technique Madagascar',
    'Portfolio développeur Madagascar',
    // Recherches sans localisation (IMPORTANT)
    'Développeur Symfony',
    'Développeur ReactJS',
    'Développeur React',
    'Développeur TypeScript',
    'Développeur Laravel',
    'Développeur Angular',
    'Développeur Next.js',
    'Développeur NestJS',
    'Développeur PHP',
    'Développeur JavaScript',
    'Développeur Full-Stack',
    'Lead Developer',
    'Expert Symfony',
    'Expert Laravel',
    'Expert ReactJS',
    'Expert TypeScript',
    'Expert Angular',
    'Expert Symfony Laravel',
    'Expert ReactJS TypeScript',
    // Compétences techniques
    'Expert Clean Architecture',
    'Expert SOLID principles',
    'Développeur PostgreSQL',
    'Développeur MongoDB',
    'Expert Docker CI/CD',
    'Architecte logiciel',
    'Full-Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'Web Developer',
    'Software Engineer',
    'Technical Lead',
    // Autres
    'Andriamasy Eric Mathieu',
    'Freelance développeur web',
    'Consultant technique',
    'Mentor développeur',
    'Développeur web expérimenté',
    '8 ans expérience développement',
    'Portfolio développeur',
  ],
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
    title: 'Andriamasy Eric Mathieu - Lead Developer | Portfolio',
    description: 'Portfolio professionnel d\'Andriamasy Eric Mathieu - Lead Developer avec 8+ ans d\'expérience en développement web full-stack. Expert en Symfony, Laravel, ReactJS, TypeScript.',
    siteName: 'Portfolio Andriamasy Eric Mathieu',
    images: [
      {
        url: '/og-image.jpg', // Vous pouvez créer cette image plus tard
        width: 1200,
        height: 630,
        alt: 'Andriamasy Eric Mathieu - Lead Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andriamasy Eric Mathieu - Lead Developer',
    description: 'Portfolio professionnel - 8+ ans d\'expérience en développement web full-stack',
    creator: '@andriamasy', // Votre handle Twitter si vous en avez un
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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

