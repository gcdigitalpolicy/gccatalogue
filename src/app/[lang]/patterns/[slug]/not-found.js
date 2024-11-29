'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function NotFound() {
  const { lang } = useParams()
  const isEnglish = lang === 'en'

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {isEnglish ? 'Pattern Not Found' : 'Modèle introuvable'}
        </h1>
        <p className="text-gray-600 mb-8">
          {isEnglish
            ? 'The pattern you are looking for does not exist or has been moved.'
            : 'Le modèle que vous recherchez n\'existe pas ou a été déplacé.'}
        </p>
        <Link
          href={`/${lang}`}
          className="text-blue-600 hover:underline"
        >
          {isEnglish ? '← Back to Home' : '← Retour à l\'accueil'}
        </Link>
      </div>
    </main>
  )
}
