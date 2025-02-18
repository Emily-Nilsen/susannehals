import { useEffect, useState } from 'react'
import { BackgroundVideo } from './BackgroundVideo'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

export function VideoHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section>
      {/* Mobile */}
      <div className="relative z-20 h-[100vw] overflow-hidden rounded-none object-cover sm:hidden">
        <div className="z-1 absolute flex h-[100vw] w-full items-center justify-center overflow-hidden rounded-none">
          <BackgroundVideo src="https://res.cloudinary.com/dt3k2apqd/video/upload/v1682180650/Susanne%20Hals/Mobile_square_rqsibu.mp4" />
        </div>
        <div className="absolute inset-0 z-20">
          <Container className="h-full">
            <div className="flex h-full w-full items-center pt-20">
              <motion.div
                key={
                  isMounted ? 'mobile-first-mounted' : 'mobile-first-unmounted'
                }
                // On SSR (or before mount) we render the final state:
                initial={
                  isMounted ? { opacity: 0, x: '100vw' } : { opacity: 0, x: 0 }
                }
                animate={{ opacity: [1, 1, 1, 1, 0], x: 0 }}
                transition={{
                  delay: 2,
                  duration: 13,
                  ease: 'easeOut',
                }}
                className="w-fit text-center"
              >
                <h1 className="mt-2 text-6xl font-bold tracking-tight text-wheat">
                  Susanne Hals
                </h1>
                <p className="font-medium uppercase tracking-widest text-tan">
                  soprano
                </p>
              </motion.div>
            </div>
          </Container>
        </div>
        <div className="absolute inset-0 z-20">
          <Container className="h-full">
            <div className="flex h-full w-full items-center pt-20">
              <motion.div
                key={
                  isMounted
                    ? 'mobile-second-mounted'
                    : 'mobile-second-unmounted'
                }
                initial={
                  isMounted ? { opacity: 0, x: '-100vw' } : { opacity: 1, x: 0 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 22,
                  duration: 6.3,
                  ease: 'easeOut',
                }}
                className="w-fit text-left"
              >
                <h1 className="mt-2 text-6xl font-bold tracking-tight text-wheat">
                  Susanne
                  <br /> Hals
                </h1>
                <p className="font-medium uppercase tracking-widest text-tan">
                  soprano
                </p>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>

      {/* Desktop */}
      <div>
        <div className="relative z-20 hidden w-full bg-gold pt-[56.25%] sm:block sm:h-auto">
          <div className="absolute inset-0">
            <BackgroundVideo src="/media/Luxury_hero_4k.mp4" />
          </div>
          {/* Text 1 */}
          <div className="absolute inset-0 z-20">
            <Container className="h-full">
              <div className="flex h-full w-full items-center">
                <motion.div
                  key={
                    isMounted
                      ? 'desktop-text1-mounted'
                      : 'desktop-text1-unmounted'
                  }
                  initial={isMounted ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    delay: 5,
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  className="w-fit text-center"
                >
                  <h1 className="mt-2 font-bold tracking-tight text-wheat sm:mt-6 sm:text-7xl">
                    Susanne Hals
                  </h1>
                  <p className="font-medium uppercase tracking-widest text-tan">
                    soprano
                  </p>
                </motion.div>
              </div>
            </Container>
          </div>
          {/* Text 2 */}
          <div className="absolute inset-0 z-20">
            <Container className="h-full">
              <div className="flex h-full w-full items-center justify-end">
                <motion.div
                  key={
                    isMounted
                      ? 'desktop-text2-mounted'
                      : 'desktop-text2-unmounted'
                  }
                  initial={
                    isMounted
                      ? { opacity: 1, x: '100vw' }
                      : { opacity: 0, x: 0 }
                  }
                  animate={{ opacity: [0, 1, 1, 1, 1, 1, 0], x: 0 }}
                  transition={{
                    delay: 2,
                    duration: 10,
                    ease: 'easeOut',
                  }}
                  className="w-fit text-center"
                >
                  <h1 className="mt-2 text-7xl font-bold tracking-tight text-wheat">
                    Susanne Hals
                  </h1>
                  <p className="font-medium uppercase tracking-widest text-tan">
                    soprano
                  </p>
                </motion.div>
              </div>
            </Container>
          </div>
          {/* Text 3 */}
          <div className="absolute inset-0 z-20">
            <Container className="h-full">
              <div className="flex h-full w-full items-center">
                <motion.div
                  key={
                    isMounted
                      ? 'desktop-text3-mounted'
                      : 'desktop-text3-unmounted'
                  }
                  initial={
                    isMounted
                      ? { opacity: 0, x: '-100vw' }
                      : { opacity: 1, x: 0 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 20,
                    duration: 10,
                    ease: 'easeOut',
                  }}
                  className="w-fit text-center"
                >
                  <h1 className="mt-2 font-bold tracking-tight text-wheat sm:mt-6 sm:text-7xl">
                    Susanne Hals
                  </h1>
                  <p className="font-medium uppercase tracking-widest text-tan">
                    soprano
                  </p>
                </motion.div>
              </div>
            </Container>
          </div>
          <div className="absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-gray-900 sm:h-40" />
        </div>
      </div>
    </section>
  )
}
