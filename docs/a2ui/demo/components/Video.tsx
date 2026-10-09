import { isHidden } from './checks'

interface VideoProps {
  accessibility?: unknown
  url?: unknown
}

export default function Video({ accessibility, url }: VideoProps) {
  if (isHidden(accessibility)) return null
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video controls className="max-w-full" src={url == null ? '' : String(url)} />
  )
}
