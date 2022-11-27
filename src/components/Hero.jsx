import { useId, useRef, useState } from 'react'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { LottieInteract } from '@/components/LottieInteract'
import { Lottie } from '@/components/Lottie'
import useTranslation from 'next-translate/useTranslation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  const { t } = useTranslation()

  return (
    <main className="relative flex h-[70vh] overflow-hidden">
      {/* Mobile hero text */}
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 2,
            duration: 0.5,
            type: 'fade',
            ease: 'easeIn',
          }}
          className="relative z-10 h-full w-full"
        >
          <div className="flex h-full w-full items-center justify-start">
            <div className="flex flex-col p-6">
              <div className="z-20">
                <p className="mb-4 text-base uppercase text-gray-600 sm:mb-6">
                  {t('home:soprano')}
                </p>
                <h1 className="text-5xl font-medium tracking-tight text-gray-800 sm:text-6xl">
                  Susanne <br />
                  Hals
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop hero text */}
      <Container>
        <div className="hidden h-full w-screen overflow-hidden md:flex">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.9,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="relative z-10 flex h-full w-full items-center"
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex h-fit w-full flex-col">
                <div className="">
                  <p className="mb-6 text-lg uppercase text-gray-600">
                    {t('home:soprano')}
                  </p>
                  <h1 className="text-7xl font-medium tracking-tight text-gray-900 lg:text-8xl">
                    Susanne Hals
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Mobile devices */}
      <div className="absolute inset-0 h-full w-full md:hidden">
        <div className="relative h-full w-full">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669371594/Susanne%20Hals/Susanne_img_3_centred_blyzzm.webp"
            alt="Susanne Hals"
            sizes="100vw"
            layout="fill"
            objectPosition="10%"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Mobile image */}
      <motion.div
        animate={{ x: '100vw' }}
        initial={{ x: 0 }}
        transition={{
          delay: 1.6,
          duration: 0.5,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="absolute inset-0 h-full w-full md:hidden"
      >
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669270574/Susanne%20Hals/Susanne_img_2_centre_b_w_hzj2yx.webp"
          alt="Susanne Hals"
          sizes="100vw"
          layout="fill"
          objectPosition="13% 100%"
          objectFit="cover"
        />
      </motion.div>
      {/* Large desktop */}
      <div className="absolute inset-0 hidden h-full w-full md:block">
        <div className="z-1 relative h-full w-full">
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

      {/* Desktop image */}
      <div
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 0.1,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="absolute inset-0 hidden h-full w-full md:block"
      >
        <motion.div
          animate={{ display: 'none' }}
          initial={{ display: 'block' }}
          transition={{
            delay: 1.6,
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

        {/* Transition animation desktop */}
        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <div className="h-full w-[200%] lg:w-[177%]">
            <LottieInteract
              path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1669546413/Susanne%20Hals/gray900Transition1920x1080_tmsc0u.json"
              autoplay
              speed="1"
              delay="1500"
              interaction="play-on-show"
            />
          </div>
        </div>

        {/* <motion.div
          animate={{ y: [1000, 0, 1000] }}
          initial={{ y: [0, 1000, 0] }}
          transition={{
            delay: 2,
            duration: 1.5,

            ease: 'easeIn',
          }}
          className="absolute inset-0 overflow-hidden
            bg-[#161211]"
        ></motion.div> */}
      </div>
      {/* Desktop dicover text */}
      <motion.div
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.3,
          type: 'fade',
          ease: 'easeIn',
        }}
        class="absolute inset-0 hidden md:block"
      >
        <div class="flex h-full w-full items-center p-32">
          <div className="relative z-10 text-7xl font-medium tracking-tight sm:text-8xl">
            <div className="z-0 -mb-10 pl-6">
              <h1 className="text-gray-800">Discover</h1>
            </div>
            <div className="relative z-10 pl-10">
              <h1 className="text-white">Discover</h1>
            </div>
            <div className="z-0 ">
              <h1 className="-mt-12 text-gray-700">Discover</h1>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Mobile discover text */}
      <motion.div
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 0.3,
          type: 'fade',
          ease: 'easeIn',
        }}
        class="absolute inset-0 h-full w-full"
      >
        <div class="mt-52 flex h-full w-full p-6 md:hidden">
          <div className="relative text-5xl font-medium tracking-tight sm:text-6xl">
            <div className="z-0 -mb-5 pl-6">
              <h1 className="text-gray-600">Discover</h1>
            </div>
            <div className="relative z-10 pl-10">
              <h1 className="text-white">Discover</h1>
            </div>
            <div className="z-0 ">
              <h1 className="-mt-6 text-gray-700">Discover</h1>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Transition animation mobile */}
      {/* <div className="absolute inset-0 overflow-hidden md:hidden">
        <div className="h-full w-[300%]">
          <LottieInteract
            path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1669546413/Susanne%20Hals/gray900Transition1920x1080_tmsc0u.json"
            autoplay
            speed="1.5"
            delay="1500"
            interaction="play-on-show"
          />
        </div>
      </div> */}
    </main>
  )
}
