export function BackgroundVideo({ src, autoPlay, muted, poster }) {
  return (
    <div>
      <video width="100%" autoPlay muted playsInline poster="">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

// https://res.cloudinary.com/dt3k2apqd/video/upload/v1682070200/Susanne%20Hals/Luxury_NO_text_uyqi5q.mp4
