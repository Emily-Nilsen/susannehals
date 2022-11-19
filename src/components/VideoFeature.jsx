import { Container } from '@/components/Container'
import useTranslation from 'next-translate/useTranslation'
import { VideoPlayer } from './VideoPlayer'
import Image from 'next/image'

export function VideoFeature() {
  return (
    <section
      id="feature-video"
      className="relative mb-20 overflow-hidden bg-[#a8a38a]
        py-20 sm:py-28"
    >
      <div className="absolute inset-0 mt-32 flex items-start justify-end opacity-50">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668364051/Susanne%20Hals/line_art_yjvmlm.svg"
          // width={563}
          // height={681}
          alt="Emily Nilsen"
          layout="fill"
          // objectPosition="right"

          // className="object-cover rotate-0 rounded-none aspect-square"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="">
          <div className="max-w-lg py-24">
            <p className="pb-6 text-[#4d4a3f]">
              Susanne has a beautiful voice and possesses a very great and
              dramatic talent; her timing is natural and on point.
            </p>

            <p className="text-sm font-semibold uppercase text-gray-900">
              Idil Alpsøy / opera singer, copenhagen
            </p>
          </div>
          <div className="relative flex h-96 w-1/2 rounded-xl border-4 border-white shadow-2xl">
            <div className="relative h-full w-full">
              <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-md">
                <VideoPlayer publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/v1668357503/Susanne%20Hals/Pamina2021.Malaga_bjnlmi.mp4" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
