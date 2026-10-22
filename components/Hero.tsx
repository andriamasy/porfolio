import Image from 'next/image'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/andriamasy', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/andriamasy', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:m.andriamasy@outlook.fr', label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-gray-950 px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-900/50 via-gray-950 to-gray-950"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-2 text-sm font-medium text-primary-200">
            <FaMapMarkerAlt aria-hidden="true" />
            Antananarivo, Madagascar
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Andriamasy Eric Mathieu
          </h1>
          <h2 className="mt-5 text-2xl font-semibold text-primary-300 sm:text-3xl">
            Lead développeur full-stack
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Avec plus de 8 ans d’expérience, je conçois des applications web
            full-stack et accompagne les équipes dans leurs choix d’architecture
            et leur livraison.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:m.andriamasy@outlook.fr"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 font-semibold text-gray-950 transition-colors hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
            >
              Parler de votre projet
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:border-primary-300 hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
            >
              Découvrir mes projets
            </a>
          </div>

          <nav aria-label="Réseaux professionnels" className="mt-9 flex gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
              >
                <Icon aria-hidden="true" size={22} />
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto w-52 sm:w-60 lg:w-full">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-primary-950/40">
            <Image
              src="/icon.png"
              alt="Portrait d’Andriamasy Eric Mathieu"
              width={256}
              height={256}
              priority
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            Architecture · Développement · Leadership technique
          </p>
        </div>
      </div>
    </section>
  )
}
