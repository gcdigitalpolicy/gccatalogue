import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getHomeContent(locale) {
  const fullPath = path.join(process.cwd(), 'content', `home.${locale}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    frontmatter: data,
    content: contentHtml,
  }
}
