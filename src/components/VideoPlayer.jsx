import { useRef } from 'react'
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react'

export default function VideoPlayer({ publicId }) {
  const videoRef = useRef()

  return (
    <CloudinaryContext cloud_name="dt3k2apqd">
      <div className="">
        <Video
          playsinline
          muted
          autoPlay
          publicId={publicId}
          width="100%"
          controls
          innerRef={videoRef}
          fluid
        ></Video>
      </div>
    </CloudinaryContext>
  )
}
