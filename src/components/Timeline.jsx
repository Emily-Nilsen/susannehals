import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

const timeFrames = [
  {
    name: '2003-2011',
    dateTime: '2022-04-04',
    highlights: [
      {
        name: 'Montpellier Opera, France',
        role: 'Together with the Norwegian Girls’ Choir, in 2005, Susanne Hals participated in the staging of the opera "Libertad" written by Gabriel Alegria.',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/montpellier_opera_2_arnn2l.jpg',
      },
      {
        name: 'The Oseana Art and Cultural Centre, Os',
        role: 'At the Bergen International Festival in 2013, together with the opera company Opera Omnia, Susanne performed in the opera «Havfest», role-playing «sea creature».',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/os_kulturhus_2_fjdm1p.jpg',
      },
      {
        name: 'Oslo Opera House, Norway',
        role: 'Susanne has participated in productions such as La Clemenza di Tito, The rape of Lucretia and Sondheim’s A little night music at the LidalNorth International Opera Workshop.',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Oslo_2_gbqgrl.jpg',
      },
    ],
  },
  {
    name: '2012-2018',
    dateTime: '2022-04-05',
    highlights: [
      {
        name: 'Bergen, Norway',
        role: 'Susanne studied a Bachelor of Music, Voice and Opera at the Grieg Academy from 2012 to 2016. ',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Bergen_2_f9cmbp.jpg',
      },
      {
        name: 'The Grieg Hall, Bergen',
        role: 'During the 2015 and 2016 Bergen International Festivals, Susanne performed solo concerts within the foyer.',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1669036829/Susanne%20Hals/Grieghallen_2_ikrolg.jpg',
      },
      {
        name: 'Copenhagen, Denmark',
        role: 'Susanne studied a Master of Voice, specialising in opera, at The Royal Danish Academy of Music, from 2016 to 2018.',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Copenhagen_2_y9mvtl.jpg',
      },
    ],
  },
  {
    name: '2019-2022',
    dateTime: '2022-04-06',
    highlights: [
      {
        name: 'Málaga, Spain',
        role: 'In 2019 Susanne performed as a Málaga Clásica Artist at the VII International Chamber Music Festival.',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Malaga_2_junypw.jpg',
      },
      {
        name: 'Søstrene Hals, Oslo',
        role: 'Since 2014, Søstrene Hals have held an extremely popular Christmas concert at the Majorstuen church, "julekonsert i Majorstuen kirke".',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1669037976/Susanne%20Hals/all_in_pink_qpgf1x.webp',
      },
      {
        name: 'Susanne Hals, Oslo',
        role: 'Susanne is currently available for tailored, private singing lessons in Oslo.',
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668183818/Susanne%20Hals/Susanne_img_1_c3qttj.webp',
      },
    ],
  },
]

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
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1
            id="about-title"
            className="font-display text-6xl font-medium tracking-tighter text-gray-900 sm:text-7xl"
          >
            About Susanne
          </h1>
          <div className="prose prose-lg text-sm text-eye-green-dark sm:text-base">
            <p className="mt-4">
              The young Norwegian soprano, Susanne Hvinden Hals, hails from
              Oslo, Norway. She received her master of music from The Royal
              Danish Academy of Music in Copenhagen.
            </p>
            <p className="mt-2">
              Susanne has sung roles as Susanna in Mozart’s «Le nozze di
              Figaro», Adele in «Die Fledermaus», J. Strauss, Pamina in «Die
              Zauberflöte», and Lucia in Benjamin Brittens «The rape of
              Lucretia».
            </p>
            <p className="mt-2">
              In 2003 Susanne Hals made her debut with The Norwegian Girls Choir
              at Opera Montpellier in France. Her accomplishments and
              professional singing skills have led to Susanne being a highly
              sought after soprano in Norway.
            </p>
            <p className="mt-2">
              Moreover, she often sings with orchestras in oratorios and has
              performed at various festivals and concerts, both in Norway and
              abroad, including Málaga Clásica in Spain.
            </p>
          </div>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-gray-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
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
                          'text-2xl font-normal tracking-tight',
                          timeframeIndex === selectedIndex
                            ? 'text-gray-800'
                            : 'text-gray-500'
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
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
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
