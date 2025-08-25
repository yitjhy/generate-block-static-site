import React from 'react'
import useVideoThumbnail from './hooks/useVideoThumbnail'

const Demo = () => {
  const [file, setFile] = React.useState<File | null>(null)
  const thumbnail = useVideoThumbnail(file, {
    detectBrightness: true,
    step: 0.2,
    maxOffset: 3,
  })

  return (
    <div>
      <div>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setFile(e.target.files[0])
            }
          }}
        />
      </div>
      {thumbnail && <img src={thumbnail} alt="视频封面" style={{ width: 500 }} className="rounded-[6px] mt-[12px]" />}
    </div>
  )
}

export default Demo
