import { LottieInteract } from '@/components/LottieInteract'

export function PageSeparator() {
  return (
    <div className="relative w-screen h-24 bg-t">
      <div className="absolute inset-0 z-10 w-full h-24 opacity-100 bg-t">
        <LottieInteract
          path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1666104234/Emily%20Nilsen/lotties/teal_waves_lqidsf.json"
          autoplay
          loop
          aspectRatio="none"
        />
      </div>
    </div>
  )
}
