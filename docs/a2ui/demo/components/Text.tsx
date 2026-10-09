import DOMPurify from 'dompurify'

import { isHidden } from './checks'

interface TextProps {
  accessibility?: unknown
  text?: unknown
  variant?: string
}

const ALLOWED_TAGS = [
  'strong',
  'em',
  'del',
  'code',
  'br',
  'p',
  'ul',
  'ol',
  'li',
  'blockquote',
  'hr',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
]

export default function Text({ accessibility, text, variant = 'body' }: TextProps) {
  const raw = text == null ? '' : String(text)
  const html = DOMPurify.sanitize(raw ?? '', {
    ALLOWED_TAGS,
    ALLOWED_ATTR: ['class', 'style'],
  })

  if (isHidden(accessibility)) return null

  switch (variant) {
    case 'h1':
      return <h1>{raw}</h1>
    case 'h2':
      return <h2>{raw}</h2>
    case 'h3':
      return <h3>{raw}</h3>
    case 'h4':
      return <h4>{raw}</h4>
    case 'h5':
      return <h5>{raw}</h5>
    case 'caption':
      return <span dangerouslySetInnerHTML={{ __html: html }} className="text-12px text-[rgba(0,0,0,0.45)]" />
    default:
      return <span dangerouslySetInnerHTML={{ __html: html }} />
  }
}
