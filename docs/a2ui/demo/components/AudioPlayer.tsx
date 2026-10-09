import { isHidden } from './checks'

interface AudioPlayerProps {
  accessibility?: unknown
  description?: unknown
  url?: unknown
}

export default function AudioPlayer({ accessibility, description, url }: AudioPlayerProps) {
  if (isHidden(accessibility)) return null
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio
      controls
      className="w-full"
      src={url == null ? '' : String(url)}
      title={description == null ? undefined : String(description)}
    />
  )
}
