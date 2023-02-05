import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import qrCode from '@/images/QR-kode-julekonsert.svg'
import useTranslation from 'next-translate/useTranslation'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

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

export function Sisters() {
  const { t } = useTranslation()

  return (
    <main>
      <section id="sostrenehals" aria-labelledby="sostrenehals-title">
        <div className="overflow-hidden bg-white">
          <Container>
            <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-32 lg:px-8">
              <div className="absolute top-0 bottom-0 hidden w-screen left-3/4 bg-eye-green-light/20 lg:block" />
              <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                  <h2 className="pb-4 text-base text-gray-600 uppercase">
                    {t('home:duoPerformers')}
                  </h2>
                  <h1 className="mt-2 text-6xl tracking-tight text-gray-900 sm:text-7xl">
                    Søstrene Hals
                  </h1>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <div className="object-cover object-center">
                          <Image
                            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/S%C3%B8strene%20Hals/goldCutout_fhrxem_ocomnj.webp"
                            alt="Søstrene Hals - Kathrine og Susanne Hals"
                            width={1548}
                            height={2064}
                            unoptimized
                          />
                        </div>
                      </div>
                      <figcaption className="flex mt-3 text-sm text-gray-500 group lg:justify-end">
                        <div className="flex items-center">
                          <a
                            href="https://www.sostrenehals.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="flex items-center">
                              <div className="relative z-10 w-full h-full pr-1">
                                <Image
                                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/nutmegLogo_p5hobn.svg"
                                  width={30}
                                  height={30}
                                  alt="Søstrene Hals logo"
                                  unoptimized
                                />
                              </div>

                              <span className="ml-2 transition duration-300 ease-in-out group-hover:text-gray-900">
                                www.sostrenehals.com
                              </span>
                            </div>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="grid mt-8 place-content-between lg:mt-0">
                  <div className="mx-auto mt-0 prose text-gray-500 prose-gray lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <div>
                      <p>{t('home:sistersSent01')}</p>
                      <p>{t('home:sistersSent02')}</p>
                      <p>{t('home:sistersSent03')}</p>
                    </div>
                  </div>
                  <div>
                    <div className="relative flex items-center self-stretch py-4 -mx-4 transition-colors group sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:py-6">
                      <div className="relative flex items-center justify-center flex-none w-24 h-24">
                        <QrCodeBorder className="absolute inset-0 w-full h-full transition-colors stroke-gray-300 group-hover:stroke-eye-green" />
                        <Image
                          src={qrCode}
                          alt="Julekonsert i Ris kirke med Søstrene Hals"
                          className="p-1 overflow-hidden rounded-xl"
                          unoptimized
                        />
                      </div>
                      <div className="ml-8 lg:w-64">
                        <a
                          className="group"
                          href="https://www.ticketmaster.no/artist/sostrene-hals-tickets/1213834?gclid=CjwKCAiA7IGcBhA8EiwAFfUDseSyIimMkpNhCgwdnC6WRN4DerYjNaqtVHvU8kqwrwaJ2MhWTjbhrhoC6AMQAvD_BwE&gclsrc=aw.ds&language=en-us&utm_source=TM-google"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="relative z-10 flex text-sm font-normal transition duration-300 ease-in-out text-zinc-500 group-hover:text-eye-green">
                            <span className="mr-2 text-base font-semibold text-gray-900 group-hover:underline">
                              {t('home:julekonsert')}
                            </span>
                            <LinkIcon className="flex-none w-6 h-6" />
                          </p>
                        </a>

                        <p className="mt-1 text-sm text-gray-700">
                          {t('home:julekonsertInfo')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  )
}
