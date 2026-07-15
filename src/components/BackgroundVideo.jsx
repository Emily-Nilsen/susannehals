// `active` gates the download. Hiding a <video> with CSS does not stop the
// browser fetching it, so the src is only attached once we know this video is
// the one this viewport actually shows. Until then the poster stands in.
export function BackgroundVideo({ src, poster, active = true }) {
  return (
    <div>
      <video
        width="100%"
        autoPlay
        muted
        playsInline
        poster={poster}
        preload={active ? 'auto' : 'none'}
        src={active ? src : undefined}
      />
    </div>
  )
}
