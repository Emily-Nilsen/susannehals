import VideoPlayer from './VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { BackgroundVideo } from './BackgroundVideo'
import { YoutubeVideo } from '@/components/YoutubeVideo'

export function HvemErJeg() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden bg-white pb-12 pt-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 className="mt-2 max-w-2xl text-6xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-7xl">
          Hvem er jeg?
        </h1>

        <div className="mx-auto max-w-7xl px-0">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto max-w-7xl">
            {/* <VideoFeature /> */}
            <div className="">
              <div className="relative z-0 aspect-[7/4] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
                <div className="z-1 absolute flex h-auto w-full items-center justify-center overflow-hidden rounded-2xl pt-10">
                  <div className="aspect-video relative w-full rounded-2xl object-cover">
                    <YoutubeVideo publicId="https://youtu.be/TAqPhOHex6M?si=8n2TSf4DxGbu6ADz" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p className="xl max-w-sm py-10 text-sm text-gray-500 lg:prose sm:m-0 sm:mt-10 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            {t('home:hvemerjeg')}
          </p>
        </div>
      </div>
    </div>
  )
}
