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
      id: 'Norinas_Cavatina',
      title: `Norina’s Cavatina`,
      description: `Don Pasquale by Donizetti`,
      promo: 'Susanne Hals/Norinas_Cavattina_minified_ih69gj',
    },
    {
      id: 'Deh_vieni',
      title: `Deh vieni, non tardar`,
      description: `Le Nozze di Figaro by Mozart`,
      promo: 'Susanne Hals/Deh_vieni_-_minified_adnvav',
    },
    {
      id: 'Adinas_arie',
      title: `Adina’s arie`,
      description: `The Elixir of Love by Donizetti`,
      promo: 'Susanne Hals/Adinas_arie_-_minified_poiwnf',
    },
  ]

  return (
    <main>
      <section
        id="media"
        aria-labelledby="media-title"
        className="relative w-full py-20 border-gray-200 border-none bg-gradient-to-br from-gray-800 to-gray-600 sm:pt-32 sm:pb-24"
      >
        <div className="absolute inset-0">
          <div className="relative object-cover object-center w-full h-full">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669307832/Susanne%20Hals/elegant_media_bg_ym0c5i.webp"
              alt="Media background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="relative z-0">
          <Container>
            {/* Text */}
            <div className="mx-auto mb-10 max-full sm:text-center lg:mx-0">
              <h1
                id="faqs-title"
                className="pb-6 mt-2 text-6xl leading-8 tracking-tight text-white sm:text-7xl"
              >
                Media
              </h1>
              <p className="max-w-lg mx-auto mt-2 text-lg text-gray-300">
                Here is a selection of videos recorded at the Gamle Rådhus Scene
                with pianist Tore Dindstad.
              </p>
            </div>
          </Container>

          {/* videos below */}

          <div className="flex px-1 pb-6 ml-0 space-x-3 overflow-x-auto sm:space-x-8 md:space-x-10 md:p-10 lg:max-w-none">
            {promotions.map((site) => (
              <>
                <section key={site.id} id={site.id} className="flex-shrink-0">
                  <div className="relative z-0 grid max-w-[100vw] grid-cols-1 gap-3 rounded-3xl bg-white bg-opacity-20 p-6 shadow-xl shadow-gray-900/5 backdrop-blur-sm md:max-w-[40rem] md:gap-8 md:p-8">
                    <div className="sm:pt-2 md:pr-6 ">
                      <div className="flex items-center pb-2">
                        <div className="w-full pl-2">
                          <h2 className="text-base font-semibold text-white capitalize">
                            {site.title}
                          </h2>
                          <p className="max-w-xs text-sm leading-6 text-gray-300">
                            {site.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full rounded-2xl">
                      <div className="relative h-[14rem] w-96">
                        <div className="absolute flex items-center justify-center w-full h-full overflow-hidden rounded-2xl">
                          <DynamicVideoPlayer publicId={site.promo} />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ))}
          </div>
          {/* <Container> */}
          <div className="flex justify-end pr-6">
            <div className="flex items-center">
              <p className="flex items-center text-sm font-normal text-gray-300">
                Scroll right
                {/* <WebsiteIcon className="flex-none w-3 h-3 ml-2" /> */}
              </p>
              <div className="flex justify-center ml-1 opacity-100">
                <div className="w-16 h-16">
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
