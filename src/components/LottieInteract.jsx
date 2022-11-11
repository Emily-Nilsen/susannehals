import React from 'react'

export function LottieInteract({
  path,
  interaction,
  speed,
  loop,
  autoplay,
  delay,
  aspectRatio,
  reset,
  sColor,
  sWidth,
  viewBox,
}) {
  React.useEffect(() => {
    import('lottie-interactive/dist/lottie-interactive.js')
  })

  return (
    <div>
      <lottie-interactive
        path={path}
        interaction={interaction}
        speed={speed}
        autoplay={autoplay}
        loop={loop}
        delay={delay}
        aspect-ratio={aspectRatio}
        reset={reset}
        s-color={sColor}
        s-width={sWidth}
        view-box={viewBox}
      />
    </div>
  )
}

//! Interactions
//* click
//? Plays animation when user clicks on animation container

//* freeze click
//? Freezes animation when user clicks on animation container

//* hover
//? Plays animation when user hovers on animation container

//* morph
//? Plays animation when user hovers on animation container, plays in reverse on 'mouseexit' event

//* morph-lock
//? Plays animation when user hovers on animation container. Locks animation at the end if user clicks. Plays in reverse on 'mouseexit' event.

//* switch
//? Plays animation when user clicks on animation container, plays again in reverse on second click

//* play-on-show
//? Plays animation when container is visible

//* play-once
//? Plays animation once

//! Attributes
//? The default state for attributes are false or null for stroke width and color.

//* loop
//? Makes the animation loop
//$ <lottie-interactive path="button.json" loop></lottie-interactive>

//* s-width
//? Changes the stroke width of every stroke
//$ <lottie-interactive path="button.json" s-width="25"></lottie-interactive>

//* s-color
//? Changes the stroke color of every stroke, must be a full hexadecimal color
//$ <lottie-interactive path="button.json" s-color="#ffffff"></lottie-interactive>

//* autoplay
//? Makes the animation play automatically on load
//$ <lottie-interactive path="button.json" autoplay></lottie-interactive>

//* speed
//? Sets the speed of the animation
//$ <lottie-interactive path="button.json" speed="0.5"></lottie-interactive>

//* delay
//? Delay the loading of the animation, defined in milliseconds
//$ <lottie-interactive path="button.json" delay="3000"></lottie-interactive>

//* reset
//? Resets the animation to the first frame after it has finished playing
//$ <lottie-interactive path="button.json" reset></lottie-interactive>

//* aspect-ratio
//? Define aspect ratio, default value is 'xMidYMid slice', more information here
//$ <lottie-interactive path="button.json" aspect-ratio='xMidYMid meet'></lottie-interactive>

//! Aspect Ratios
// "xMidYMid meet"
// "xMinYMid meet"
// "xMaxYMid meet"
// "xMidYMin slice"
// "xMidYMid slice"
// "xMidYMax slice"
// "xMidYMin meet"
// "xMidYMid meet"
// "xMidYMax meet"
// "xMinYMid slice"
// "xMidYMid slice"
// "xMaxYMid slice"
// "none"

//? The value of the viewBox attribute is a list of four numbers: min-x, min-y, width and height.
