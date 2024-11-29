import { getPattern, getPatternSlugs } from '@/utils/getPattern'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = await getPatternSlugs()
  const langs = ['en', 'fr']

  return slugs.flatMap(slug =>
    langs.map(lang => ({
      lang,
      slug,
    }))
  )
}

export default async function PatternPage({
  params: { slug, lang },
}) {
  const pattern = await getPattern(slug, lang)

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href={`/${lang}`}
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← {lang === 'en' ? 'Back to Home' : 'Retour à l\'accueil'}
        </Link>
        <div className="prose max-w-none">
          <h1>{pattern.title}</h1>
          <p className="text-lg text-gray-600">{pattern.description}</p>
          <div className="flex gap-2 items-center text-sm text-gray-500 mb-8">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {pattern.category}
            </span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: pattern.content }} />
        </div>
      </div>
    </main>
  )
}
