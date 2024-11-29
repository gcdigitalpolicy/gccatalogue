'use client'

import Link from 'next/link'

export function PatternList({ patterns }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-8">Patterns</h2>
      {Object.entries(patterns).map(([category, categoryPatterns]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {categoryPatterns.map((pattern) => (
              <div key={pattern.slug} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium mb-2">
                  {pattern.externalUrl ? (
                    <a
                      href={pattern.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {pattern.title}
                    </a>
                  ) : (
                    <Link
                      href={`/patterns/${pattern.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {pattern.title}
                    </Link>
                  )}
                </h4>
                <p className="text-gray-600">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
