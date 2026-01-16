export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>
            © {currentYear} Portfolio Lead Developer. Tous droits réservés.
          </p>
          <p className="mt-2 text-sm">
            Construit avec Next.js, TypeScript et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}


