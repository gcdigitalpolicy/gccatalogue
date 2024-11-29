import { getHomeContent } from '@/utils/getHomeContent'
import { getPatterns } from '@/utils/getPatterns'
import { PatternList } from '@/components/PatternList'

export default async function Home({
  params: { lang },
}) {
  const { content } = await getHomeContent(lang)
  const patterns = getPatterns(lang)

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PatternList patterns={patterns} />
    </main>
  )
}
