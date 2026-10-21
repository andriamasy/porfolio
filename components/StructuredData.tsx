export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andriamasy Eric Mathieu',
    jobTitle: 'Lead Developer',
    description: 'Lead Developer avec 8+ ans d\'expérience en développement web full-stack. Expert en Symfony, Laravel, ReactJS, TypeScript, Angular.',
    url: 'https://andriamasy.vercel.app',
    image: 'https://andriamasy.vercel.app/opengraph-image',
    email: 'm.andriamasy@outlook.fr',
    telephone: '+261 34 62 949 41',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antananarivo',
      addressCountry: 'MG',
    },
    sameAs: [
      'https://github.com/andriamasy',
      'https://linkedin.com/in/andriamasy',
    ],
    knowsAbout: [
      'Symfony',
      'Laravel',
      'ReactJS',
      'TypeScript',
      'Next.js',
      'Angular',
      'NestJS',
      'PHP',
      'JavaScript',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'CI/CD',
      'Clean Architecture',
      'SOLID Principles',
      'Web Development',
      'Full-Stack Development',
      'Backend Development',
      'Frontend Development',
      'API Development',
      'Database Design',
      'System Architecture',
      'Performance Optimization',
      'DevOps',
      'Agile Development',
      'Test Driven Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'EMIT',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'Symfony7',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Udemy',
        },
        dateCreated: '2024',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'Programmation Orientée Objet en PHP',
        recognizedBy: {
          '@type': 'Organization',
          name: 'OpenClassrooms',
        },
        dateCreated: '2020',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'Développement Web Full-Stack',
        recognizedBy: {
          '@type': 'Organization',
          name: 'LinkedIn Learning',
        },
        dateCreated: '2021',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portfolio Andriamasy Eric Mathieu',
    url: 'https://andriamasy.vercel.app',
    description: 'Portfolio professionnel d\'Andriamasy Eric Mathieu - Lead Developer',
    author: {
      '@type': 'Person',
      name: 'Andriamasy Eric Mathieu',
    },
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Services de Développement Web',
    provider: {
      '@type': 'Person',
      name: 'Andriamasy Eric Mathieu',
      jobTitle: 'Lead Developer',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Madagascar',
    },
    serviceType: [
      'Développement Web Full-Stack',
      'Développement Symfony',
      'Développement Laravel',
      'Développement ReactJS',
      'Développement TypeScript',
      'Développement Angular',
      'Développement Next.js',
      'Développement NestJS',
      'Architecture Logicielle',
      'Consulting Technique',
      'Mentorat Développeurs',
      'Optimisation de Performance',
      'CI/CD et DevOps',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
