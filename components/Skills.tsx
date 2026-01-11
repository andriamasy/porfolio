'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Langages',
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      category: 'Frameworks & Frontend',
      skills: [
        { name: 'Symfony', level: 95 },
        { name: 'Laravel', level: 95 },
        { name: 'ReactJS', level: 90 },
        { name: 'Next.js', level: 90 },
        { name: 'VueJS', level: 85 },
        { name: 'Angular', level: 85 },
      ],
    },
    {
      category: 'Backend & Bases de données',
      skills: [
        { name: 'Node.js / NestJS', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Oracle', level: 80 },
        { name: 'Redis', level: 85 },
      ],
    },
    {
      category: 'DevOps & Outils',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 90 },
        { name: 'AWS', level: 85 },
        { name: 'Webpack', level: 85 },
        { name: 'NGINX', level: 85 },
      ],
    },
    {
      category: 'Tests & Qualité',
      skills: [
        { name: 'TDD', level: 90 },
        { name: 'PHPUnit', level: 90 },
        { name: 'Jest', level: 85 },
        { name: 'Tests E2E', level: 85 },
      ],
    },
    {
      category: 'CMS & Autres',
      skills: [
        { name: 'WordPress', level: 85 },
        { name: 'Prestashop', level: 80 },
        { name: 'React Native', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-primary-400 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

