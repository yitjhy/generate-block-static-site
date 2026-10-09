import { isHidden } from './checks'

interface ImageProps {
  accessibility?: unknown
  description?: unknown
  fit?: string
  url?: unknown
}

const FIT_CLASS: Record<string, string> = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
  scaleDown: 'object-scale-down',
}

export default function Image({ accessibility, description, fit = 'fill', url }: ImageProps) {
  if (isHidden(accessibility)) return null
  return (
    <img
      alt={description == null ? '' : String(description)}
      className={`max-w-full rounded-[8px] ${FIT_CLASS[fit] ?? 'object-fill'}`}
      src={url == null ? '' : String(url)}
    />
  )
}
