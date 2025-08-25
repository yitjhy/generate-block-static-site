import { useState, useEffect } from 'react'

interface Options {
  /**
   * 是否启用亮度检测，避免黑帧
   */
  detectBrightness?: boolean

  /**
   * 当亮度过低时，每次跳过多少秒
   */
  step?: number

  /**
   * 检测帧最大偏移秒数（防止跳太远）
   */
  maxOffset?: number

  /**
   * 平均亮度阈值，低于认为是黑场
   */
  brightnessThreshold?: number
}

export default function useVideoThumbnail(fileOrUrl: File | string | null, options: Options = {}) {
  const { detectBrightness = true, step = 0.1, maxOffset = 2, brightnessThreshold = 10 } = options

  const [thumbnail, setThumbnail] = useState<string | null>(null)

  useEffect(() => {
    if (!fileOrUrl) return

    const video = document.createElement('video')
    video.crossOrigin = 'anonymous'
    video.preload = 'auto'
    video.muted = true

    if (typeof fileOrUrl === 'string') {
      video.src = fileOrUrl
    } else {
      video.src = URL.createObjectURL(fileOrUrl)
    }

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!

    const checkFrame = (time: number) => {
      video.currentTime = time

      video.addEventListener(
        'seeked',
        function onSeeked() {
          video.removeEventListener('seeked', onSeeked)

          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

          let sum = 0
          for (let i = 0; i < data.length; i += 4) {
            sum += (data[i] + data[i + 1] + data[i + 2]) / 3
          }
          const avgBrightness = sum / (data.length / 4)

          if (detectBrightness && avgBrightness < brightnessThreshold && time < maxOffset) {
            // 太暗，继续检测下一帧
            checkFrame(time + step)
          } else {
            setThumbnail(canvas.toDataURL('image/png'))
          }
        },
        { once: true }
      )
    }

    video.addEventListener(
      'loadedmetadata',
      () => {
        const duration = video.duration
        const startTime = Math.min(0.1, duration * 0.01)
        checkFrame(startTime)
      },
      { once: true }
    )

    return () => {
      if (typeof fileOrUrl !== 'string') {
        URL.revokeObjectURL(video.src)
      }
    }
  }, [fileOrUrl, detectBrightness, step, maxOffset, brightnessThreshold])

  return thumbnail
}
