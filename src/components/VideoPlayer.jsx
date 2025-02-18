import { useRef } from 'react'

export default function VideoPlayer({ publicId, poster }) {
  const videoRef = useRef()

  return (
    <div className="overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        src={publicId}
        poster={poster}
        controls
        playsInline
        className="w-full"
      />
    </div>
  )
}
