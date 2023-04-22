import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import { Container } from '@/components/Container'

export function VideoHero() {
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
                animate={{ opacity: [1, 1, 1, 1, 0], x: 0 }}
                initial={{ opacity: 0, x: '100vw' }}
                transition={{
                  delay: 2,
                  duration: 13,
                  type: 'fade',
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
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: '-100vw' }}
                transition={{
                  delay: 22,
                  duration: 6.3,
                  type: 'fade',
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
            <BackgroundVideo src="https://res.cloudinary.com/dt3k2apqd/video/upload/v1682101960/Susanne%20Hals/Luxury_hero_4k_scj9w0.mp4" />
          </div>
          {/* Text 1 */}
          <div className="absolute inset-0 z-20">
            <Container className="h-full">
              <div className="flex h-full w-full items-center">
                <motion.div
                  animate={{ opacity: 0 }}
                  initial={{ opacity: 1 }}
                  transition={{
                    delay: 5,
                    duration: 1,
                    type: 'fade',
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
                  animate={{ opacity: [0, 1, 1, 1, 1, 1, 0], x: 0 }}
                  initial={{ opacity: 1, x: '100vw' }}
                  transition={{
                    delay: 2,
                    duration: 10,
                    type: 'fade',
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
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: '-100vw' }}
                  transition={{
                    delay: 20,
                    duration: 10,
                    type: 'fade',
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
          <div className="absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-gray-900 sm:h-40" />
        </div>
      </div>
    </section>
  )
}
