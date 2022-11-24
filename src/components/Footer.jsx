import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { motion, useInView, useMotionValue } from 'framer-motion'
import { LottieInteract } from '@/components/LottieInteract'
import Logo from '@/images/logos/logoSH.svg'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
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

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/susanne.hals',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 320 512" {...props}>
        <path
          fillRule="evenodd"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCfQ3DbSgyRLLZt7aOAAUo3A',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 576 512" {...props}>
        <path
          fillRule="evenodd"
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/susanne.hvinden/?r=nametag',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 448 512" {...props}>
        <path
          fillRule="evenodd"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center text-xs font-medium text-gray-700 transition group hover:text-eye-green-light dark:text-gray-200 dark:hover:text-eye-green-light"
      >
        <Icon className="flex-none w-6 h-6 transition fill-gray-500 group-hover:fill-eye-green-light" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <>
      <footer className="relative py-12 border-t border-gray-200 min-h-96">
        <Container>
          <div className="relative z-10 flex flex-col items-start justify-between h-full pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
            <div className="absolute top-0 left-0 flex mt-0">
              <Link href="/" aria-label="Home">
                <div className="h-full cursor-pointer">
                  <div className="relative z-10 w-full h-full pr-1">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668925083/Susanne%20Hals/Susanne_Logo_white_u8p8jb.svg"
                      width={100}
                      height={100}
                      alt="Susanne Halsen logo"
                      unoptimized
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-end"></div>
            {/* Testimonial */}
            <div className="hidden my-32 lg:block">
              <div className="max-w-xs prose prose-lg text-right">
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    type: 'fade',
                  }}
                  className="text-base italic font-light tracking-tight text-white/90 sm:text-lg"
                >
                  Susanne’s voice quality is indisputable. She has a high
                  soprano sound, which is clear and pointed out. At the same
                  time, it is warm and rich in colours. She has excellent
                  musical understanding and walks quickly in-depth on the
                  composite personalities of the opera repertoire.
                </motion.p>
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.8,
                    type: 'fade',
                  }}
                  className="w-full pl-12 mt-4 text-xs font-medium text-gray-400 uppercase sm:text-sm"
                >
                  Eli K. Hanssveen / Soprano, The Norwegian Opera & Ballet
                </motion.p>
              </div>
            </div>
          </div>
          {/* Social icon links */}
          <div className="relative z-10 flex justify-start space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 transition duration-300 ease-in-out hover:text-eye-green"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="relative z-10 flex items-center pt-8 pb-12 border-none border-gray-500/50 md:justify-start md:pt-6">
            <p className="mt-6 text-xs text-gray-400 sm:text-sm md:mt-0">
              &copy; Copyright Susanne Hals {new Date().getFullYear()}
            </p>
          </div>
        </Container>
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669270574/Susanne%20Hals/Susanne_img_2_centre_b_w_hzj2yx.webp"
              alt="Susanne Hals"
              sizes="100vw"
              layout="fill"
              objectPosition="top"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Animation */}
        <div className="absolute top-0 right-0">
          <div className="flex justify-center m-12">
            <div className="w-32 h-32">
              <LottieInteract
                path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668970106/Susanne%20Hals/flower-decoration-850x850_fxzggu.json"
                interaction="play-on-show"
                speed="1.2"
                delay="500"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
