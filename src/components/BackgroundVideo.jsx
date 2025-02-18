export function BackgroundVideo({ src }) {
  return (
    <div>
      <video width="100%" autoPlay muted playsInline poster="">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
