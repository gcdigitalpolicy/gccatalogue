import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getPattern(slug, locale) {
  // Find the file that matches the slug in the given locale
  const patternsDirectory = path.join(process.cwd(), 'content/patterns')
  const fileNames = fs.readdirSync(patternsDirectory)
  const fileName = fileNames.find(file => {
    const { data } = matter(fs.readFileSync(path.join(patternsDirectory, file), 'utf8'))
    return data.slug === slug && file.endsWith(`.${locale}.md`)
  })

  if (!fileName) {
    throw new Error(`Pattern not found: ${slug}`)
  }

  const fullPath = path.join(patternsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    title: data.title,
    slug: data.slug,
    description: data.description,
    category: data.category,
    externalUrl: data.externalUrl,
    content: contentHtml,
  }
}

export async function getPatternSlugs() {
  const patternsDirectory = path.join(process.cwd(), 'content/patterns')
  const fileNames = fs.readdirSync(patternsDirectory)
  const slugs = new Set()

  fileNames.forEach(fileName => {
    const { data } = matter(fs.readFileSync(path.join(patternsDirectory, fileName), 'utf8'))
    if (!data.externalUrl) {
      slugs.add(data.slug)
    }
  })

  return Array.from(slugs)
}