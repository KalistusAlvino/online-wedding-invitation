import { useCallback, useEffect, useRef, useState } from 'react'

interface PreloadAsset {
  type: 'image' | 'video' | 'audio'
  src: string
}

interface UsePreloadOptions {
  assets: PreloadAsset[]
  onComplete?: () => void
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.preload = 'auto'
    video.onloadeddata = () => resolve()
    video.onerror = () => resolve()
    video.src = src
  })
}

function preloadAudio(src: string): Promise<void> {
  return new Promise((resolve) => {
    const audio = document.createElement('audio')
    audio.preload = 'auto'
    audio.onloadeddata = () => resolve()
    audio.onerror = () => resolve()
    audio.src = src
  })
}

export function usePreload({ assets, onComplete }: UsePreloadOptions) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const completedRef = useRef(false)

  useEffect(() => {
    let loaded = 0
    const total = assets.length

    const promises = assets.map(async (asset) => {
      try {
        if (asset.type === 'image') {
          await preloadImage(asset.src)
        } else if (asset.type === 'video') {
          await preloadVideo(asset.src)
        } else if (asset.type === 'audio') {
          await preloadAudio(asset.src)
        }
      } catch {
        // Silently fail
      }
      loaded++
      setProgress(Math.round((loaded / total) * 100))
    })

    Promise.all(promises).then(() => {
      setProgress(100)
      setIsComplete(true)
      if (!completedRef.current) {
        completedRef.current = true
        onComplete?.()
      }
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { progress, isComplete }
}
