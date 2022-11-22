import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import qrCode from '@/images/QR-kode-julekonsert.svg'

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

export function Sisters() {
  return (
    <div className="overflow-hidden bg-white">
      <Container>
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-32 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen left-3/4 bg-gray-50 lg:block" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-base text-gray-600 uppercase">
                Duo Performers
              </h2>
              <h1 className="mt-2 text-6xl font-bold leading-8 tracking-tight text-gray-900 sm:text-7xl">
                Søstrene Hals
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center"
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1665483758/S%C3%B8strene%20Hals/goldCutout_fhrxem_ocomnj.webp"
                      alt="Søstrene Hals - Kathrine og Susanne Hals"
                      width={1548}
                      height={2064}
                    />
                  </div>
                  <figcaption className="flex justify-end mt-3 text-sm text-gray-500 group">
                    <div className="flex items-center">
                      <a
                        href="https://www.sostrenehals.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex items-center">
                          <div className="relative z-10 w-full h-full pr-1">
                            <Image
                              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669124181/Susanne%20Hals/nutmegLogo_p5hobn.svg"
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
                  <p>
                    Susanne and her sister Kathrine Hvinden Hals form the duo
                    Søstrene Hals.
                  </p>
                  <p>
                    Kathrine studied at the Royal College of Music in London;
                    Susanne at the Royal Danish Conservatory of Music in
                    Copenhagen. Based on classical music, the duo can tailor a
                    repertoire, from pure classical to a cross-over between
                    classical and popular music.
                  </p>
                  <p>
                    Since 2014, Søstrene Hals have held an extremely popular
                    Christmas concert at the Majorstuen church, "julekonsert i
                    Majorstuen kirke".
                  </p>
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
                    <p className="text-base font-semibold text-gray-900">
                      <span className="absolute inset-0 sm:rounded-2xl" />
                      Julekonsert i Ris kirke
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Scan the QR code to buy tickets to this year's Christmas
                      concert on 15 December 2022.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
