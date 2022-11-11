import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { LottieInteract } from '@/components/LottieInteract'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

export function Hero() {
  return (
    <main className="relative min-h-[70vh]">
      <div className="py-20 overflow-hidden bg-t sm:py-32 lg:pb-32 xl:pb-32">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 max-w-2xl mx-auto mt-40 lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <p className="mb-6 text-lg text-gray-600 uppercase">soprano</p>
              <h1 className="text-6xl font-medium tracking-tight text-gray-900 sm:text-8xl">
                Susanne Hals
              </h1>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"></div>
            <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
              {/* <p className="text-sm font-semibold text-center text-gray-900 lg:text-left">
              As featured in
            </p>
             */}
              <div className="mt-20">Testimonials?</div>
            </div>
          </div>
        </Container>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668202000/Susanne%20Hals/Susanne_img_3_v1_b8lfxy.webp"
          alt="Susanne Hals"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          unoptimized
        />
      </div>
      <div
        whileInView={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 4,
          duration: 0.3,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="absolute inset-0 z-50 w-full h-full"
      >
        <motion.div
          whileInView={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{
            delay: 4,
            duration: 0.3,
            type: 'fade',
            ease: 'easeIn',
          }}
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668202680/Susanne%20Hals/Susanne_img_2_iu2smq.webp"
            alt="Susanne Hals"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            unoptimized
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{
            delay: 5.6,
            duration: 0.3,
            type: 'fade',
            ease: 'easeIn',
          }}
          className="absolute w-full h-full overflow-hidden"
        >
          <div className="relative z-50 -ml-[25%] flex w-[150%]">
            <LottieInteract
              path="https://assets10.lottiefiles.com/packages/lf20_gmds3wm6.json"
              speed="0.5"
              autoplay
              loop="false"
              delay="2000"
              aspectRatio="xMidYMid slice"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{
            delay: 3.6,
            duration: 0.3,
            type: 'fade',
            ease: 'easeIn',
          }}
          class="absolute inset-0"
        >
          <div class="flex h-full w-full items-center p-12">
            <div>
              <h1 className="text-6xl font-medium tracking-tight text-white sm:text-8xl">
                Discover
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
