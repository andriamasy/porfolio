'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const contactMethods = [
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
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/andriamasy',
      href: 'https://github.com/andriamasy',
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            Prochaine étape
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Parlons de votre projet
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous cherchez un développeur expérimenté ou un partenaire technique
            pour faire avancer votre produit ? Écrivez-moi pour présenter votre
            besoin et voir comment je peux vous accompagner.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-primary-400/30 bg-gradient-to-br from-primary-900/40 to-gray-900 p-6 text-center sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary-200">
              Contact direct
            </p>
            <a
              href="mailto:m.andriamasy@outlook.fr"
              className="mt-3 inline-block break-all text-xl font-semibold text-white transition-colors hover:text-primary-200 sm:text-2xl"
            >
              m.andriamasy@outlook.fr
            </a>
            <div>
              <a
                href="mailto:m.andriamasy@outlook.fr"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary-500 px-6 py-3 font-semibold text-gray-950 transition-colors hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
              >
                Envoyer un message
              </a>
            </div>
          </div>

          <details className="mx-auto max-w-4xl rounded-2xl border border-gray-700 bg-gray-900/40 p-5 sm:p-6">
            <summary className="cursor-pointer text-center font-semibold text-gray-200 hover:text-primary-200">
              Voir les autres coordonnées et profils
            </summary>
            <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <motion.div
                key={method.label}
                className="min-w-0 bg-gray-900/50 p-5 sm:p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center">
                  <method.icon className="text-primary-400 text-2xl mr-4" />
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold mb-1">
                      {method.label}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="break-all text-gray-400 hover:text-primary-400 transition-colors"
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
          </details>
        </div>
      </div>
    </section>
  )
}
