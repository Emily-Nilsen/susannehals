import { AppStoreLink } from '@/components/AppStoreLink'
import { LottieInteract } from '@/components/LottieInteract'
import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'

export function Testimonial({ testimonial, author, lottie }) {
  return (
    <section
      id="testimonial"
      className="relative py-12 overflow-hidden bg-eye-green sm:py-16 md:py-24"
    >
      <Container className="relative">
        <div className="max-w-2xl mx-auto prose prose-lg text-center">
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
          <div className="flex justify-center mb-4 opacity-90 sm:mb-16">
            <div className="w-3/4 h-10">
              <LottieInteract
                path={lottie}
                interaction="play-on-show"
                speed="0.7"
                delay="500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
