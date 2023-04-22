import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function NavLinks() {
  const { t } = useTranslation()

  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    [`${t('common:latest')}`, '#latest'],
    ['Media', '#media'],
    [`${t('common:about')}`, '#about'],
    ['Søstrene Hals', '#sostrenehals'],
    [`${t('common:contact')}`, '#contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm uppercase text-wheat transition-colors delay-150 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-light-beige/10"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
