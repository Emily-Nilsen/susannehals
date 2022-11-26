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
          loop
          autoPlay
          publicId={publicId}
          width="100%"
          controls
          innerRef={videoRef}
          fluid
          poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_img_1_c3qttj.webp"
        >
          {/* <Transformation quality="auto" videoCodec="auto" /> */}
        </Video>
      </div>
    </CloudinaryContext>
  )
}
