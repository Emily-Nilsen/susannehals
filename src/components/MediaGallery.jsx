import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import useTranslation from 'next-translate/useTranslation'

const DynamicVideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
})

export function MediaGallery() {
  const { t } = useTranslation()

  const videos = [
    {
      id: 'Kjærlighet',
      title: `Kjærlighet`,
      description: `${t('home:kjærlighet')}`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/Susanne%20Hals/Kj%C3%A6rlighet_full_version_rviozs.mp4',
      poster:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Kj%C3%A6rlighet_poster_jsmifl.webp',
    },
    {
      id: 'Norinas_Cavatina',
      title: `Norina’s Cavatina`,
      description: `Don Pasquale ${t('home:by')} Donizetti`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Norinas_Cavattina_minified_ih69gj.mp4',
      poster:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/noritas_cavatina_w45cwk.webp',
    },
    {
      id: 'Deh_vieni',
      title: `Deh vieni, non tardar`,
      description: `Le Nozze di Figaro ${t('home:by')} Mozart`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Deh_vieni_-_minified_adnvav.mp4',
      poster:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/deh_vieni_ggggcw.webp',
    },
    {
      id: 'Adinas_arie',
      title: `Adina’s arie`,
      description: `The Elixir of Love ${t('home:by')} Donizetti`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/Adinas_arie_-_minified_poiwnf.mp4',
      poster:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/adinas_aria_r1rgth.webp',
    },
    // More videos...
  ]

  return (
    <div
      id="media"
      aria-labelledby="media-title"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-6xl leading-8 tracking-tight text-gray-900 sm:text-7xl">
            Media
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            {t('home:mediaText')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {videos.map((video) => (
            <li key={video.title}>
              <div className="relative aspect-[3/2] w-full rounded-2xl object-cover">
                <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
                  <DynamicVideoPlayer
                    publicId={video.promo}
                    poster={video.poster}
                  />
                </div>
              </div>
              <h3 className="mt-1 text-base font-semibold leading-8 tracking-tight text-gray-900 sm:mt-2">
                {video.title}
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                {video.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
