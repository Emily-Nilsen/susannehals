import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

export function YoutubeVideo({ publicId }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Render a placeholder that preserves the aspect ratio.
    return <div className="relative pt-[56.25%]" />
  }

  return (
    <div className="items-center justify-center overflow-hidden rounded-2xl">
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          url={publicId}
        />
      </div>
    </div>
  )
}
