import 'cloudinary-video-player/dist/cld-video-player.min.js'
import 'cloudinary-video-player/dist/cld-video-player.min.css'
import { Cloudinary } from 'cloudinary-core'
import { useEffect } from 'react'

const NativeVideoPlayer = ({ video }) => {
  const cld = new Cloudinary({ cloud_name: 'dt3k2apqd' })
  useEffect(() => {
    const videoPlayer = cld.videoPlayer('video-player', {
      muted: true,
      controls: true,
    })
    videoPlayer.source('Susanne Hals/Pamina2021.Malaga_bjnlmi')
  })
  return (
    <div>
      <video id="video-player" />
    </div>
  )
}
export default NativeVideoPlayer
