import VideoPlayer from './VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export function Offers() {
  const { t } = useTranslation()

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="bg-white lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
      </div>
      <div className="relative px-4 pt-12 pb-0 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:pb-16">
        <div className="z-10 lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-7xl">
              {t('home:offerTitle')}
            </h1>

            <div className="prose prose-gray mt-8 text-gray-500">
              <p>{t('home:offerSent01')}</p>
              <p>{t('home:offerSent02')}</p>
              <p>
                {t('home:offerSent03')}{' '}
                <Link href="/booking">{t('home:getInTouch')}</Link>.
              </p>
              <p>{t('home:offerSent04')}</p>
              <div className="relative -mt-4 lg:mt-0">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668168980/Susanne%20Hals/Susanne_favicon_htjila.svg"
                  alt="SH initials"
                  width={100}
                  height={100}
                  objectPosition="center"
                  objectFit="contain"
                />
              </div>
              <p className="-mt-10 text-gray-800 ">Susanne Hals</p>
            </div>
          </div>
          {/* <VideoFeature /> */}
          <div className="mt-16 mb-0 lg:my-24 lg:ml-16">
            <div id="malaga-video" className="flex-shrink-0">
              <div className="relative z-0 mx-auto grid w-fit grid-cols-1 bg-opacity-20 shadow-gray-900/5 backdrop-blur-sm sm:max-w-none md:w-full md:p-4 lg:rounded-3xl lg:shadow-xl">
                <div className="relative flex w-full justify-center rounded-2xl">
                  <div className="relative h-[14rem] w-96 sm:h-[30rem] sm:w-[42rem] md:h-80 md:w-[40rem]">
                    <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
                      <VideoPlayer publicId="Susanne Hals/Pamina2021.Malaga_bjnlmi" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-sm text-sm text-gray-500 sm:m-0 sm:max-w-lg sm:px-12 sm:text-base lg:mt-8 lg:max-w-none lg:prose lg:px-0 lg:text-gray-500">
              {t('home:unicaja')}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop image */}
      <div className="absolute hidden lg:inset-0 lg:block">
        <div className="absolute inset-0 h-full w-full">
          {/* <div className="absolute w-full h-full"> */}
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668973698/Susanne%20Hals/susanne_left_side_syd63h.webp"
            alt="Susanne Hals"
            sizes="100vw"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
          {/* </div> */}
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative h-[calc(100vw*1.6)] w-full object-cover lg:hidden">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669395188/Susanne%20Hals/Susanne_img_4_v2_wefgzq.webp"
          alt="Susanne Hals"
          sizes="100vw"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
        <div className="absolute inset-0 h-20 w-full bg-gradient-to-b from-white"></div>
      </div>
    </div>
  )
}

{
  /* <VideoPlayer publicId="Susanne Hals/Pamina2021.Malaga_bjnlmi" /> */
}
