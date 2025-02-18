import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'

export default function VideoPlayer({ publicId, poster }) {
  const videoRef = useRef()
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  // If the publicId starts with "http", assume it's a full URL
  if (publicId.startsWith('http')) {
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

  // Otherwise, use Cloudinary's Video component
  return (
    <CloudinaryContext cloud_name={cloudName}>
      <div className="overflow-hidden rounded-2xl">
        <Video
          playsInline
          publicId={publicId}
          width="100%"
          poster={poster}
          controls
          innerRef={videoRef}
          fluid={true} // Use a boolean, not a string
        />
      </div>
    </CloudinaryContext>
  )
}
