import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getPatterns(locale) {
  const patternsDirectory = path.join(process.cwd(), 'content/patterns')
  const fileNames = fs.readdirSync(patternsDirectory)
  const patterns = fileNames
    .filter(fileName => fileName.endsWith(`.${locale}.md`))
    .map(fileName => {
      const fullPath = path.join(patternsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        title: data.title,
        slug: data.slug,
        description: data.description,
        category: data.category,
        externalUrl: data.externalUrl,
      }
    })

  // Group patterns by category
  const patternsByCategory = patterns.reduce((acc, pattern) => {
    const category = pattern.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(pattern)
    return acc
  }, {})

  return patternsByCategory
}
