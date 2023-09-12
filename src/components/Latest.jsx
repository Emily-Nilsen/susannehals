import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'

import { MalagaClasicaLogo } from './Logos'
import { HalsSistersLogo } from './Logos'
import { BakgardenkonsertLogo } from './Logos'

const DynamicVideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
})

export function Latest() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation()

  const posts = [
    // More posts...
    {
      id: 3,
      title: 'Julekonsert i Ris kirke',
      href: 'https://bakgardensandvika.no/arrangementer/opera-til-folket-9',
      description: `Julekonsert med Søstrene Hals, Sølvguttene, Atle Tømmervik og Ingunn Tennøe.`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/v1694513379/S%C3%B8strene%20Hals/Julekonsert_2023_uten_klokkeslett_yo4edk.mp4',
      poster:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/S%C3%B8strene%20Hals/Julekonsert_poster_dc8fcv.webp',
      date: `19${locale === 'en' ? '' : '.'} ${t('common:dec')}, 2023`,
      datetime: '2023-12-19',
      category: { title: 'Konsert' },
      venue: {
        name: `Julekonsert med Søstrene Hals og Sølvguttene`,
        website: 'ticketmaster.no',

        logo: <HalsSistersLogo className="w-5" />,
      },
    },
    // {
    //   id: 2,
    //   title: 'Opera til Folket',
    //   href: 'https://www.ticketmaster.no/event/julekonsert-med-sostrene-hals-og-solvguttene-billetter/725651',
    //   description: `Julekonsert med Søstrene Hals, Sølvguttene, Atle Tømmervik og Ingunn Tennøe.`,
    //   promo:
    //     'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Susanne%20Hals/BAKga%CC%8Ardskonsert_mai_-_video_size_em4cyi.mp4',
    //   poster:
    //     'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/BAKga%CC%8Ardskonsert_poster_pfuxxt.webp',
    //   date: `28${locale === 'en' ? '' : '.'} ${t('common:may')}, 2023`,
    //   datetime: '2023-05-29',
    //   category: { title: 'Konsert' },
    //   venue: {
    //     name: `BAKgårdskonsert i Sandvika`,
    //     website: 'bakgardensandvika.no',

    //     logo: <BakgardenkonsertLogo className="w-5" />,
    //   },
    // },
    // {
    //   id: 1,
    //   title: 'Málaga Clásica 2023 - Revoluciones',
    //   href: 'https://www.malagaclasica.com/',
    //   description: `${t('home:revolutionsDescription')}`,
    //   promo:
    //     'https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Revoluciones_2023_with_music_uvmiav.mp4',
    //   poster:
    //     'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Revolutions_bb70zs.webp',
    //   date: `29${locale === 'en' ? '' : '.'} ${t('common:may')} - 04${
    //     locale === 'en' ? '' : '.'
    //   } ${t('common:jun')}, 2023`,
    //   datetime: '2023-07-01',
    //   category: { title: 'Festival' },
    //   venue: {
    //     name: `${t('home:malagaClasica')}`,
    //     website: 'malagaclasica.com',

    //     logo: <MalagaClasicaLogo className="w-7 fill-gold" />,
    //   },
    // },
  ]

  const currentDate = new Date()
  const oneWeekAgo = new Date(currentDate)
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const filteredPosts = posts.filter((post) => {
    const postDate = new Date(post.datetime)
    return postDate >= oneWeekAgo
  })

  return (
    <section id="latest">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-6xl tracking-tight text-gray-900 sm:text-7xl">
              {t('home:latestTitle')}
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600">
              {t('home:latestText')}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredPosts.length === 0 ? (
              <div className="col-span-3 w-fit overflow-hidden rounded-xl bg-wheat/20 p-6 text-left">
                {t('home:stayTuned')}
              </div>
            ) : (
              filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between"
                >
                  {post.promo ? (
                    <div className="relative aspect-[4/5] w-full rounded-2xl object-cover">
                      <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
                        <DynamicVideoPlayer
                          publicId={post.promo}
                          poster={post.poster}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={2152}
                        height={2689}
                        className="aspect-[4/5] w-full rounded-2xl bg-gold object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  )}

                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.datetime}
                        className="font-medium text-gray-500"
                      >
                        {post.date}
                      </time>
                      <div className="relative z-10 rounded-full bg-wheat/50 px-3 py-1.5 font-medium text-dark-beige">
                        {post.category.title}
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        <div>
                          <span className="absolute inset-0" />
                          {post.title}
                        </div>
                      </h3>
                      <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <Link href={post.href} target="_blank" rel="noreferrer">
                      <div className="group relative mt-8 flex items-center gap-x-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wheat/40">
                          {post.venue.logo}
                        </div>
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <div>
                              <span className="absolute inset-0" />
                              {post.venue.name}
                            </div>
                          </p>
                          <p className="font-semibold text-gold transition duration-300 ease-in-out group-hover:text-dark-beige">
                            {post.venue.website}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
