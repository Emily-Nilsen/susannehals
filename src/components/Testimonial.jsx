import { LottieInteract } from '@/components/LottieInteract'
import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'
import Link from 'next/link'

export function Testimonial({ testimonial, author, lottie }) {
  return (
    <section
      id="testimonial"
      className="relative py-12 overflow-hidden bg-eye-green sm:py-16 md:py-24"
    >
      <Container className="relative">
        <div className="max-w-2xl mx-auto prose prose-lg text-center">
          <motion.button
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: 'fade',
            }}
          >
            <Link href="/booking" aria-label="Booking" className="no-underline">
              <div className="flex items-center w-full text-sm text-center text-gray-800 uppercase transition duration-300 ease-in-out cursor-pointer group hover:text-gray-900 focus:outline-none sm:text-base">
                <p className="flex items-center font-semibold leading-3 tracking-wide">
                  booking
                </p>{' '}
                <span className="transition duration-300 ease-in-out group-hover:translate-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.button>
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              type: 'fade',
            }}
            className="text-xl italic font-light tracking-tight text-white/90 sm:text-2xl md:text-3xl"
          >
            {testimonial}
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              type: 'fade',
            }}
            className="mt-4 text-xs font-semibold uppercase text-black/80 sm:text-sm md:text-base"
          >
            {author}
          </motion.p>
          {/* Desktop */}
          <div className="justify-center hidden mb-4 opacity-90 sm:mb-16 sm:flex">
            <div className="w-3/4 h-10">
              <LottieInteract
                path={lottie}
                interaction="play-on-show"
                speed="0.7"
                delay="500"
              />
            </div>
          </div>
          {/* Mobile */}
          <div className="flex justify-center mb-10 opacity-90 sm:hidden">
            <div className="w-3/4 h-10">
              <LottieInteract
                path={lottie}
                autoplay
                loop
                speed="0.5"
                delay="500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
