import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import useTranslation from 'next-translate/useTranslation'

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Timeline() {
  const { t } = useTranslation()

  const timeFrames = [
    {
      name: '2003-2011',
      dateTime: '2022-04-04',
      highlights: [
        {
          name: `${t('home:timelineTitle01')}`,
          role: `${t('home:timelineDesc01')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/montpellier_opera_2_arnn2l.jpg',
        },
        {
          name: `${t('home:timelineTitle02')}`,
          role: `${t('home:timelineDesc02')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/os_kulturhus_2_fjdm1p.jpg',
        },
        {
          name: `${t('home:timelineTitle03')}`,
          role: `${t('home:timelineDesc03')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Oslo_2_gbqgrl.jpg',
        },
      ],
    },
    {
      name: '2012-2018',
      dateTime: '2022-04-05',
      highlights: [
        {
          name: `${t('home:timelineTitle04')}`,
          role: `${t('home:timelineDesc04')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Bergen_2_f9cmbp.jpg',
        },
        {
          name: `${t('home:timelineTitle05')}`,
          role: `${t('home:timelineDesc05')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Grieghallen_2_ikrolg.jpg',
        },
        {
          name: `${t('home:timelineTitle06')}`,
          role: `${t('home:timelineDesc06')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Copenhagen_2_y9mvtl.jpg',
        },
      ],
    },
    {
      name: '2019-2022',
      dateTime: '2022-04-06',
      highlights: [
        {
          name: `${t('home:timelineTitle07')}`,
          role: `${t('home:timelineDesc07')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Malaga_2_junypw.jpg',
        },
        {
          name: `${t('home:timelineTitle08')}`,
          role: `${t('home:timelineDesc08')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/all_in_pink_qpgf1x.webp',
        },
        {
          name: `${t('home:timelineTitle09')}`,
          role: `${t('home:timelineDesc09')}`,
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_img_1_c3qttj.webp',
        },
      ],
    },
  ]

  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1
            id="about-title"
            className="text-6xl font-medium tracking-tighter text-gray-900 font-display sm:text-7xl lg:pb-6"
          >
            {t('home:timelineTitle')}
          </h1>
          <div className="prose text-gray-500 lg:prose-lg">
            <p className="mt-4">{t('home:timelineSent01')}</p>
            <p className="mt-2">{t('home:timelineSent02')}</p>
            <p className="mt-2">{t('home:timelineSent03')}</p>
            <p className="mt-2">{t('home:timelineSent04')}</p>
          </div>
        </div>
        <Tab.Group
          as="div"
          className="grid items-start grid-cols-1 mt-14 gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-gray-200 lg:block" />
            <Tab.List className="grid justify-start grid-flow-col px-4 auto-cols-auto gap-x-8 gap-y-10 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                timeFrames.map((timeframe, timeframeIndex) => (
                  <div key={timeframe.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        timeframeIndex === selectedIndex
                          ? 'fill-gray-800 stroke-gray-800'
                          : 'fill-transparent stroke-gray-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'text-lg font-medium tracking-tight lg:text-2xl lg:font-normal',
                          timeframeIndex === selectedIndex
                            ? 'border-b-2 font-semibold text-gray-900 lg:border-none lg:font-semibold'
                            : 'text-gray-400'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {timeframe.name}
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {timeFrames.map((timeframe) => (
              <Tab.Panel
                key={timeframe.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {timeframe.highlights.map((featureImage, featureImageIndex) => (
                  <div key={featureImageIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-eye-green-light',
                            'border-eye-green',
                            'border-eye-green-dark',
                          ][featureImageIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{
                          clipPath: `url(#${id}-${featureImageIndex % 3})`,
                        }}
                      >
                        <Image
                          className="absolute inset-0 object-cover w-full h-full transition duration-300 group-hover:scale-110"
                          src={featureImage.image}
                          alt=""
                          layout="fill"
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-6 text-gray-900">
                      {featureImage.name}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      {featureImage.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
