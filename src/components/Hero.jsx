import { useId, useRef, useState } from 'react'
import { CldImage } from 'next-cloudinary'
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
    <main className="relative flex min-h-[70vh] overflow-hidden">
      <div className="flex items-center py-20 overflow-hidden sm:py-32 lg:pb-32 xl:pb-32">
        <Container>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 3.3,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="relative z-10 h-full"
          >
            <div className="flex flex-col justify-center h-full p-12">
              <div className="mt-0">
                <p className="mb-6 text-lg text-gray-600 uppercase">soprano</p>
                <h1 className="text-6xl font-medium tracking-tight text-gray-900 sm:text-8xl">
                  Susanne Hals
                </h1>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/q_auto/Susanne%20Hals/Susanne_img_3_v1_b8lfxy.webp"
            alt="Susanne Hals"
            sizes="100vw"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 2.8,
          duration: 0.1,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.div
          animate={{ display: 'none' }}
          initial={{ display: 'block' }}
          transition={{
            delay: 2.8,
            duration: 0.1,
            type: 'fade',
            ease: 'easeIn',
          }}
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/q_auto/Susanne%20Hals/Susanne_img_2_right_b_w_bkee3m.webp"
            alt="Susanne Hals"
            sizes="100vw"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          animate={{ y: [1000, 0, 1000] }}
          initial={{ y: [0, 1000, 0] }}
          transition={{
            delay: 2,
            duration: 1.5,
            // type: 'fade',

            ease: 'easeIn',
          }}
          className="absolute inset-0 overflow-hidden
            bg-[#161211]"
        ></motion.div>
        <Container>
          <motion.div
            animate={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 0.3,
              type: 'fade',
              ease: 'easeIn',
            }}
            class="absolute inset-0"
          >
            <div class="flex h-full w-full items-center p-32">
              <div className="relative font-medium tracking-tight text-gray-900 text-7xl sm:text-9xl">
                <div className="z-0 pl-6 -mb-16">
                  <h1 className="text-gray-900">Discover</h1>
                </div>
                <div className="relative z-10 pl-10">
                  <h1 className="text-white">Discover</h1>
                </div>
                <div className="z-0 ">
                  <h1 className="-mt-20 text-gray-800">Discover</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </main>
  )
}
