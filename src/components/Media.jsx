import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { Container } from '@/components/Container'
import { LottieInteract } from '@/components/LottieInteract'
import { PageSeparator } from '@/components/PageSeparator'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicVideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
})

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function WebsiteIcon(props) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path
        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Media() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { t } = useTranslation()

  const promotions = [
    {
      id: 'Kjærlighet',
      title: `Kjærlighet`,
      description: `Don Pasquale ${t('home:by')} Donizetti`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/Susanne%20Hals/Kj%C3%A6rlighet_full_version_rviozs.mp4',
    },
    {
      id: 'Norinas_Cavatina',
      title: `Norina’s Cavatina`,
      description: `Don Pasquale ${t('home:by')} Donizetti`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Norinas_Cavattina_minified_ih69gj.mp4',
    },
    {
      id: 'Deh_vieni',
      title: `Deh vieni, non tardar`,
      description: `Le Nozze di Figaro ${t('home:by')} Mozart`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Deh_vieni_-_minified_adnvav.mp4',
    },
    {
      id: 'Adinas_arie',
      title: `Adina’s arie`,
      description: `The Elixir of Love ${t('home:by')} Donizetti`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Adinas_arie_-_minified_poiwnf.mp4',
    },
  ]

  return (
    <main>
      <section className="relative w-full border-none border-gray-200 bg-white py-20 sm:pt-32 sm:pb-24">
        <div className="relative z-0">
          <Container>
            {/* Text */}
            <div className="max-full mx-auto mb-10 sm:text-center lg:mx-0">
              <h1
                id="faqs-title"
                className="mt-2 pb-6 text-6xl leading-8 tracking-tight text-gray-900 sm:text-7xl"
              >
                Media
              </h1>
              <p className="mx-auto mt-2 max-w-lg text-lg text-gray-600">
                {t('home:mediaSubtitle')}
              </p>
            </div>
          </Container>

          {/* videos below */}

          <div className="ml-0 flex space-x-3 overflow-x-auto px-1 pb-6 sm:space-x-8 md:space-x-10 md:p-10 lg:max-w-none">
            {promotions.map((site) => (
              <section key={site.id} id={site.id} className="flex-shrink-0">
                <div className="relative z-0 grid max-w-[100vw] grid-cols-1 gap-3 rounded-3xl bg-white p-6 shadow-xl md:max-w-[40rem] md:gap-8 md:p-8">
                  <div className="sm:pt-2 md:pr-6 ">
                    <div className="flex items-center pb-2">
                      <div className="w-full pl-2">
                        <h2 className="text-base font-semibold capitalize text-gray-900">
                          {site.title}
                        </h2>
                        <p className="max-w-xs text-sm leading-6 text-gray-600">
                          {site.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full overflow-hidden rounded-2xl">
                    <div className="relative h-[14rem] w-auto">
                      <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
                        <DynamicVideoPlayer publicId={site.promo} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          {/* <Container> */}
          <div className="flex justify-end pr-6">
            <div className="flex items-center">
              <p className="flex items-center text-sm font-normal text-gray-500">
                {t('home:scrollRight')}
              </p>
              <div className="ml-1 flex justify-center opacity-100">
                <div className="h-16 w-16">
                  <LottieInteract
                    path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1669308393/Susanne%20Hals/rightsArrowsThree_wpbe2f.json"
                    loop
                    autoplay
                    speed="1"
                    delay="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
