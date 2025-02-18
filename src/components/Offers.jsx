import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { YoutubeVideo } from '@/components/YoutubeVideo'

export function Offers() {
  const { t } = useTranslation()

  return (
    <div className="relative pt-8 bg-white xl:pb-32 xl:pt-20">
      <div className="lg:absolute lg:inset-0">
        <div className="bg-white lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
      </div>
      <div className="relative px-4 pt-12 pb-0 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-0 lg:pb-16">
        <div className="z-10 px-0 sm:px-6 lg:col-start-2 lg:pl-0">
          <div className="mx-auto text-base max-w-prose sm:mx-0">
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-7xl">
              {t('home:offerTitle')}
            </h1>
            <div className="mt-8 prose text-gray-500 prose-gray">
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
              <p className="-mt-10 text-gray-800">Susanne Hals</p>
            </div>
          </div>
          <div className="py-16 -mt-6">
            <div className="relative z-0 aspect-[7/4] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
              <div className="absolute flex items-center justify-center w-full h-auto pt-10 overflow-hidden z-1 rounded-2xl">
                <div className="relative object-cover w-full aspect-video rounded-2xl">
                  <YoutubeVideo publicId="https://www.youtube.com/watch?v=cIEWg-XSqAI" />
                </div>
              </div>
            </div>
          </div>
          <p className="max-w-sm pb-10 text-sm text-gray-500 xl lg:prose sm:m-0 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            {t('home:unicaja')}
          </p>
        </div>
      </div>

      {/* Desktop image */}
      <div className="absolute hidden lg:inset-0 lg:block">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/susanne_left_side_syd63h.webp"
            alt="Susanne Hals"
            sizes="100vw"
            fill
            className="object-cover"
          />
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
