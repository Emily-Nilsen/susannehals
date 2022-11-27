import React, { useRef } from 'react'

export function Lottie({
  lottieUrl,
  lottieWidth,
  lottieHeight,
  lottieAspectRatio,
  lottieSpeed,
}) {
  const ref = useRef(null)
  React.useEffect(() => {
    import('@lottiefiles/lottie-player')
  })
  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      // controls
      loop
      mode="normal"
      src={lottieUrl}
      style={{
        width: lottieWidth,
        height: lottieHeight,
        preserveAspectRatio: lottieAspectRatio,
        speed: lottieSpeed,
      }}
    ></lottie-player>
  )
}
