import { useEffect } from 'react'
import { Container } from '@/components/Container'
import useTranslation from 'next-translate/useTranslation'
import { VideoPlayer } from './VideoPlayer'
import Image from 'next/image'

export function VideoFeature() {
  return (
    <section
      id="feature-video"
      className="relative my-24 ml-16 flex h-96 w-full"
    >
      <div className="relative z-10 h-96 w-1/2 rotate-90 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669027031/Emily%20Nilsen/SVGs/frame-241x323_j4a9qu.svg"
          alt="Vintage photo frame"
          width={482}
          height={646}
          // layout="contain"
          objectPosition="center"
          objectFit="contain"
        />
      </div>
      <div className="absolute inset-0">
        <VideoPlayer publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/v1668357503/Susanne%20Hals/Pamina2021.Malaga_bjnlmi.mp4" />
      </div>
    </section>
  )
}
