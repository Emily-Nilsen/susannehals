import { useRef } from 'react'
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react'

export function VideoPlayer({ publicId }) {
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
          data-cld-colors='{ "base": "#eef9ee", "accent": "#00e64c", "text": "#009688" }'
          class="cld-video-player cld-video-player-skin-light"
        >
          <Transformation
            audioCodec="none"
            height="480"
            quality="auto"
            videoCodec="auto"
            width="852"
            crop="fill"
          />
        </Video>
      </div>
    </CloudinaryContext>
  )
}
