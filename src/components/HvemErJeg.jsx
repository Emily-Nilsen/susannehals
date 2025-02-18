import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { YoutubeVideo } from '@/components/YoutubeVideo'

export function HvemErJeg() {
  const { t } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="pt-20 pb-12 overflow-hidden bg-white sm:py-32">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <h1 className="max-w-2xl mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-7xl">
          Hvem er jeg?
        </h1>

        <div className="px-0 mx-auto max-w-7xl">
          <div className="mx-auto max-w-7xl">
            <div className="">
              <div className="relative z-0 aspect-[7/4] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
                <div className="absolute flex items-center justify-center w-full h-auto pt-10 overflow-hidden z-1 rounded-2xl">
                  <div className="relative object-cover w-full aspect-video rounded-2xl">
                    {isMounted ? (
                      <YoutubeVideo publicId="https://youtu.be/TAqPhOHex6M?si=8n2TSf4DxGbu6ADz" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p className="max-w-sm py-10 text-sm text-gray-500 xl lg:prose sm:m-0 sm:mt-10 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            {t('home:hvemerjeg')}
          </p>
        </div>
      </div>
    </div>
  )
}
