import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'

const CloudinaryVideoPlayer = ({ publicId }) => {
  const videoRef = useRef()
  return (
    <div>
      <Video width="100%" controls />
    </div>
  )
}
export default CloudinaryVideoPlayer
