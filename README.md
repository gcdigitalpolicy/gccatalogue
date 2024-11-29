# GC Catalogue

The GC Catalogue is a curated set of reusable digital patterns and data policy tools to help unblock Government of Canada teams trying to deliver secure, easy-to-use and trustworthy services.

Policy tools here range from sample legal wording for use in vendor contracts to updated job descriptions available for reuse.

## Overview

The GC Catalogue is a curated collection of reusable digital and data policy tools designed to help government teams deliver secure, accessible, and user-friendly services. It includes:

- Policy guidance and templates
- Best practices and patterns
- Reusable components and tools
- Case studies and examples

## Features

- **Bilingual Support**: Full English and French language support with automatic language detection
- **Markdown-Based Content**: Simple content management using markdown files with frontmatter
- **Dynamic Routing**: Language-specific routes with fallback support
- **Modern UI**: Clean, accessible interface using Tailwind CSS and GCDS components
- **Responsive Design**: Mobile-friendly layout that works across all devices
- **Accessibility**: Built with WCAG compliance in mind

## Categories

The catalogue currently includes patterns in these categories:

- **Accessibility**: Statements, procurement requirements, and guidelines
- **Privacy**: Information sharing agreements, privacy notices, and breach management
- **User Research**: Compensation guidelines, consent forms, and testing environments

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gcdigitalpolicy/gccatalogue.git
cd gccatalogue_next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
gccatalogue_next/
├── content/               # Markdown content files
│   ├── patterns/         # Pattern documentation
│   │   ├── *.en.md      # English pattern files
│   │   └── *.fr.md      # French pattern files
│   ├── home.en.md       # English home page
│   └── home.fr.md       # French home page
├── src/
│   ├── app/             # Next.js app router
│   ├── components/      # React components
│   └── utils/           # Helper functions
```

## Content Management

Content is managed through markdown files with frontmatter metadata:

```markdown
---
title: "Pattern Title"
slug: "pattern-slug"
description: "Pattern description"
category: "Category"
externalUrl: "https://example.com" # Optional
---

Pattern content in markdown...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Government of Canada Design System
- Next.js team
- All contributors to the project
