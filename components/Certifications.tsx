'use client'

import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

export default function Certifications() {
  const certifications = [
    {
      title: 'Symfony7',
      issuer: 'Udemy',
      year: '2024',
    },
    {
      title: 'Programmation Orientée Objet en PHP',
      issuer: 'OpenClassrooms',
      year: '2020',
    },
    {
      title: 'Développement Web Full-Stack',
      issuer: 'LinkedIn Learning',
      year: '2021',
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors text-center"
              >
                <FaCertificate className="text-primary-400 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary-400 mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

