'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'm.andriamasy@outlook.fr',
      href: 'mailto:m.andriamasy@outlook.fr',
    },
    {
      icon: FaEnvelope,
      label: 'Email (alternatif)',
      value: 'andriamasy1@gmail.com',
      href: 'mailto:andriamasy1@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/andriamasy',
      href: 'https://linkedin.com/in/andriamasy',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Antananarivo, Madagascar',
      href: null,
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+261 34 62 949 41',
      href: 'tel:+261346294941',
    },
    {
      icon: FaPhone,
      label: 'Téléphone (alternatif)',
      value: '+261 32 77 562 13',
      href: 'tel:+261327756213',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Intéressé par une collaboration ? N'hésitez pas à me contacter.
            Je suis toujours ouvert à discuter de nouveaux projets et opportunités.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center">
                  <method.icon className="text-primary-400 text-2xl mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {method.label}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{method.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:m.andriamasy@outlook.fr"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Envoyer un message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

