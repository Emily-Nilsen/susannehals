import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { YoutubeVideo } from '@/components/YoutubeVideo'

export function Offers() {
  const { t } = useTranslation()

  return (
    <div className="relative bg-white pt-8 xl:pb-32 xl:pt-20">
      <div className="lg:absolute lg:inset-0">
        <div className="bg-white lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
      </div>
      <div className="relative px-4 pb-0 pt-12 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-0 lg:pb-16">
        <div className="z-10 px-0 sm:px-6 lg:col-start-2 lg:pl-0">
          <div className="mx-auto max-w-prose text-base sm:mx-0">
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-7xl">
              {t('home:offerTitle')}
            </h1>
            <div className="prose prose-gray mt-8 text-gray-500">
              <p>{t('home:offerSent01')}</p>
              <p>{t('home:offerSent02')}</p>
              <p>{t('home:offerSent04')}</p>
              <div className="relative -mt-4 lg:mt-0">
                <Image
                  src="/images/Susanne_favicon.svg"
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
          <div className="-mt-6 py-16">
            <div className="relative z-0 aspect-[7/4] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
              <div className="z-1 absolute flex h-auto w-full items-center justify-center overflow-hidden rounded-2xl pt-10">
                <div className="aspect-video relative w-full rounded-2xl object-cover">
                  <YoutubeVideo publicId="https://www.youtube.com/watch?v=cIEWg-XSqAI" />
                </div>
              </div>
            </div>
          </div>
          <p className="xl max-w-sm pb-10 text-sm text-gray-500 lg:prose sm:m-0 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            {t('home:unicaja')}
          </p>
        </div>
      </div>

      {/* Desktop image */}
      <div className="absolute hidden lg:inset-0 lg:block">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/susanne_left_side.webp"
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
          src="/images/Susanne_full_length.webp"
          alt="Susanne Hals"
          sizes="100vw"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
