'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function Markdown({ content }) {
  const [Component, setComponent] = useState(null);

  // Remove frontmatter from content
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---/, '').trim();

  useEffect(() => {
    import('react-markdown').then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) {
    return null;
  }

  return (
    <Component className="prose max-w-none dark:prose-invert">
      {contentWithoutFrontmatter}
    </Component>
  );
}
