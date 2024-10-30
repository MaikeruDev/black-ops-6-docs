'use client'

import { useEffect, useState, useContext } from 'react'
import { Link } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { LanguageContext } from '@/app/language-context'

interface TableOfContentsProps {
  className?: string
}

interface HeadingItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([])
  const pathname = usePathname()
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    const updateHeadings = () => {
      const headingElements = Array.from(document.querySelectorAll('h1, h2'))
      const headingItems: HeadingItem[] = headingElements.map((heading, index) => ({
        id: heading.id || `heading-${index}`,
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1])
      }))
      setHeadings(headingItems)
    }

    updateHeadings()

    // Use MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(updateHeadings)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [pathname, language]) // Add language as a dependency

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className={`p-4 bg-gray-900 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Link className="mr-2" size={20} />
        {language === 'EN' ? 'Table of Contents' : 'Inhaltsverzeichnis'}
      </h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={`${heading.id}-${heading.text}`} className={`${heading.level === 2 ? 'ml-4' : ''}`}>
            <a
              href={`#${heading.id}`}
              className="text-sm hover:underline text-gray-300 hover:text-gray-100"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}