import VideoPlayer from './VideoPlayer'
import { VideoFeature } from './VideoFeature'
import Image from 'next/image'

export function Offers() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="bg-white lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="z-10 lg:col-start-2 lg:pl-8">
          <div className="mx-auto text-base max-w-prose lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h1 className="mt-2 text-6xl font-bold leading-8 tracking-tight text-gray-900 sm:text-7xl">
              An extensive repertoire
            </h1>

            <div className="mt-8 prose text-gray-500 prose-gray">
              <p>
                Classically trained soprano Susanne Hals enchants audiences with
                her soaring high voice and performs an extensive repertoire.
              </p>
              <p>
                Delivering a stunning performance every time, the versatile
                Susanne Hals can provide everything from pop to opera. An
                elegant addition to any special occasion, Susanne can also
                provide a pianist or other singers and instruments.
              </p>
              <p>
                Whether you are thinking of booking Susanne Hals for a wedding,
                corporate event, party or funeral service, please get in touch.
              </p>
              <p>
                Susanne is also available for tailored, private singing lessons
                in Oslo, Norway.
              </p>
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668168980/Susanne%20Hals/Susanne_favicon_htjila.svg"
                  alt="SH initials"
                  width={100}
                  height={100}
                  objectPosition="center"
                  objectFit="contain"
                />
              </div>
              <p className="-mt-10 text-gray-800">Susanne Hals</p>
            </div>
          </div>
          {/* <VideoFeature /> */}
          <div className="my-24 ml-16 ">
            <div className="w-{852px} relative flex h-[480px] flex-none rounded-xl border-4 border-white shadow-2xl md:h-80">
              <div className="relative w-full h-full">
                <div className="absolute flex items-center justify-center w-full h-full overflow-hidden rounded-md">
                  <VideoPlayer publicId="Susanne Hals/Pamina2021.Malaga_bjnlmi" />
                </div>
              </div>
            </div>
            <p className="mt-8 prose text-gray-500 ">Video description</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668973698/Susanne%20Hals/susanne_left_side_syd63h.webp"
            alt="Susanne Hals"
            sizes="100vw"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
