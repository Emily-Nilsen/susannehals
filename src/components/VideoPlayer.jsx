import { useRef } from 'react'
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react'

export default function VideoPlayer({ publicId }) {
  const videoRef = useRef()
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <CloudinaryContext cloud_name={cloudName}>
      <div>
        <Video
          playsInline
          muted
          loop
          autoPlay
          publicId={publicId}
          width="100%"
          controls
          innerRef={videoRef}
          fluid="true"
        ></Video>
      </div>
    </CloudinaryContext>
  )
}
