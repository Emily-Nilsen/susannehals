import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Testimonial({ testimonial, author }) {
  return (
    <section
      id="testimonial"
      className="relative overflow-hidden bg-gold/100 py-12 sm:py-16 md:py-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/media/gold_background.webp"
          fill
          alt="Golden background"
          className="blur-sm"
        />
        <div className="absolute inset-0 bg-light-beige mix-blend-multiply" />
      </div>

      <Container className="relative">
        <div className="prose prose-lg mx-auto max-w-2xl text-center">
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.1,
              duration: 1.5,
              type: 'fade',
            }}
            className="text-lg font-light italic tracking-tight text-light-beige sm:text-xl md:text-2xl"
          >
            {testimonial}
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 1.5,
              type: 'fade',
            }}
            className="mt-4 text-xs font-semibold uppercase text-tan sm:text-sm md:text-base"
          >
            {author}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
