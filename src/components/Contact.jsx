import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import {
  EnvelopeIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

import navigation from './Socials'

export function Contact() {
  const { t } = useTranslation()

  const cards = [
    {
      name: `${t('home:email')}`,
      description: 'susannehvinden@gmail.com',
      icon: EnvelopeIcon,
    },
  ]

  return (
    <section id="contact">
      <div className="relative isolate overflow-hidden bg-gold py-24 sm:py-40">
        <div className="sm:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/gold_Susanne_contact_mobile_gcbewk.webp"
            fill
            alt="Susanne Hvinden Hals"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-dark-beige mix-blend-multiply" />
        </div>
        <div className="hidden sm:block">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/gold_Susanne_bwvkvx.jpg"
            fill
            alt="Susanne Hvinden Hals"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-dark-beige mix-blend-multiply" />
        </div>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5DEB3" />
              <stop offset={1} stopColor="#F5F5DC" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#49c00522-612e-41d3-bb32-ce7d1fa28850)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="49c00522-612e-41d3-bb32-ce7d1fa28850"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5DEB3" />
              <stop offset={1} stopColor="#F5F5DC" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-light-beige sm:text-6xl">
              {t('home:contactTitle')}
            </h1>
            <p className="mt-6 max-w-[50vw] text-lg leading-8 text-wheat sm:max-w-none sm:text-wheat">
              {t('home:contactText')}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <Link href="tel:+47 455 06 256">
              <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 transition duration-300 ease-in-out hover:bg-white/10">
                <PhoneIcon
                  className="h-7 w-5 flex-none text-wheat/50"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-wheat">
                    {t('home:phone')}
                  </h3>
                  <p className="mt-2 text-white">+47 455 06 256</p>
                </div>
              </div>
            </Link>
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
              >
                <card.icon
                  className="h-7 w-5 flex-none text-wheat/50"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-wheat">{card.name}</h3>
                  <p className="mt-2 text-white">{card.description}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 py-11 ring-1 ring-inset ring-white/10 lg:py-0">
              <div className="mx-auto flex items-center">
                <div className="flex justify-center space-x-12 md:order-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-wheat hover:text-light-beige"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
