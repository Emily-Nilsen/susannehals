import VideoPlayer from './VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { BackgroundVideo } from './BackgroundVideo'

export function Offers() {
  const { t } = useTranslation()

  return (
    <div className="relative bg-white pt-8 xl:pb-32 xl:pt-20">
      <div className="lg:absolute lg:inset-0">
        <div className="bg-white lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
      </div>
      <div className="relative px-4 pt-12 pb-0 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-0 lg:pb-16">
        <div className="z-10 px-0 sm:px-6 lg:col-start-2 lg:pl-0">
          <div className="mx-auto max-w-prose text-base sm:mx-0 ">
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-7xl">
              {t('home:offerTitle')}
            </h1>

            <div className="prose prose-gray mt-8 text-gray-500">
              <p>{t('home:offerSent01')}</p>
              <p>{t('home:offerSent02')}</p>
              <p>{t('home:offerSent04')}</p>
              <div className="relative -mt-4 lg:mt-0">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_favicon_htjila.svg"
                  alt="SH initials"
                  width={100}
                  height={100}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="-mt-10 text-gray-800 ">Susanne Hals</p>
            </div>
          </div>
          {/* <VideoFeature /> */}
          <div className="py-16">
            <div className="relative z-0 aspect-[7/4] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
              <div className="z-1 absolute flex h-auto w-full items-center justify-center overflow-hidden rounded-2xl">
                <VideoPlayer
                  poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/malaga_clasica_susanne_mt6ywn.webp"
                  publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Pamina2021.Malaga_bjnlmi.mp4"
                />
              </div>
            </div>
          </div>
          <p className="xl mx-auto max-w-sm pt-0 text-sm text-gray-500 sm:m-0 sm:max-w-lg sm:px-0 sm:pt-16 sm:text-base lg:max-w-none lg:prose lg:px-0 lg:pt-10 lg:text-gray-500">
            {t('home:unicaja')}
          </p>
        </div>
      </div>

      {/* Desktop image */}
      <div className="absolute hidden lg:inset-0 lg:block">
        <div className="absolute inset-0 h-full w-full">
          {/* <div className="absolute w-full h-full"> */}
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/susanne_left_side_syd63h.webp"
            alt="Susanne Hals"
            sizes="100vw"
            fill
            className="object-cover"
          />
          {/* </div> */}
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative h-[calc(100vw*1.6)] w-full object-cover lg:hidden">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_full_length_ewi4au.webp"
          alt="Susanne Hals"
          sizes="100vw"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
