import { LottieInteract } from '@/components/LottieInteract'
import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'
import Link from 'next/link'

export function Testimonial({ testimonial, author, lottie }) {
  return (
    <section
      id="testimonial"
      className="relative overflow-hidden bg-eye-green py-12 sm:py-16 md:py-24"
    >
      <Container className="relative">
        <div className="prose prose-lg mx-auto max-w-2xl text-center">
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              type: 'fade',
            }}
            className="text-xl font-light italic tracking-tight text-white/90 sm:text-2xl md:text-3xl"
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
          <div className="mb-4 hidden justify-center opacity-90 sm:mb-16 sm:flex">
            <div className="h-10 w-3/4">
              <LottieInteract
                path={lottie}
                interaction="play-on-show"
                speed="0.7"
                delay="500"
              />
            </div>
          </div>
          {/* Mobile */}
          <div className="mb-10 flex justify-center opacity-90 sm:hidden">
            <div className="h-10 w-3/4">
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
