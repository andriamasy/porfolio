import { FaCode, FaDatabase, FaLaptopCode, FaTools, FaCheckCircle, FaLayerGroup } from 'react-icons/fa'

const skillCategories = [
  {
    category: 'Langages',
    icon: FaCode,
    skills: ['PHP', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    category: 'Frameworks & interfaces',
    icon: FaLaptopCode,
    skills: ['Symfony', 'Laravel', 'React', 'Next.js', 'Vue.js', 'Angular'],
  },
  {
    category: 'Backend & données',
    icon: FaDatabase,
    skills: ['Node.js / NestJS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Redis'],
  },
  {
    category: 'Architecture & qualité',
    icon: FaLayerGroup,
    skills: ['Clean Architecture', 'SOLID', 'TDD', 'PHPUnit', 'Jest', 'Tests E2E'],
  },
  {
    category: 'DevOps & outils',
    icon: FaTools,
    skills: ['Docker', 'CI/CD', 'AWS', 'NGINX', 'Git', 'Webpack'],
  },
  {
    category: 'Autres technologies',
    icon: FaCheckCircle,
    skills: ['React Native', 'WordPress', 'PrestaShop'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Les outils pour construire des produits fiables
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300">
            Des technologies choisies selon les besoins du produit, avec une
            attention particulière à l’architecture, la qualité et la livraison.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ category, icon: Icon, skills }) => (
            <article
              key={category}
              className="rounded-2xl border border-gray-700/80 bg-gray-800/50 p-5 transition-colors hover:border-primary-400/60 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400/10 text-primary-300">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-gray-600 bg-gray-900/70 px-3 py-1.5 text-sm text-gray-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
