import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import useTranslation from 'next-translate/useTranslation'
import { Logo } from '@/components/Logo'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  const { t } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // On the server (or before mounting), we render with full opacity to match SSR.
  const initialAnimation = isMounted ? { opacity: 0 } : { opacity: 1 }

  return (
    <header className="absolute w-full bg-gold">
      <nav>
        <Container className="relative z-50 flex justify-between p-6 sm:py-8 lg:px-0">
          <motion.div
            animate={{ opacity: 1 }}
            initial={initialAnimation}
            transition={{
              delay: 2.5,
              duration: 0.8,
              ease: 'easeIn',
            }}
            className="relative flex gap-16 lg:items-center"
          >
            <Link href="/" aria-label="Home">
              <div className="h-full cursor-pointer">
                <div className="relative w-full h-full pr-1">
                  <Logo className="w-auto h-12 fill-wheat sm:h-16" />
                </div>
              </div>
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={initialAnimation}
            transition={{
              delay: 2.8,
              duration: 0.8,
              ease: 'easeIn',
            }}
            className="flex items-center"
          >
            <Popover className="pl-6 lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 inline-flex items-center rounded-lg bg-light-beige/20 stroke-gold p-2 hover:bg-light-beige/50 active:stroke-gold [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <ChevronUpIcon className="w-6 h-6" />
                    ) : (
                      <MenuIcon className="w-6 h-6" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 px-6 pt-32 pb-6 origin-top shadow-2xl rounded-b-2xl bg-gray-50 shadow-gray-900/20"
                        >
                          <div className="space-y-4 uppercase">
                            <MobileNavLink href="#latest">
                              {t('common:latest')}
                            </MobileNavLink>
                            <MobileNavLink href="#media">Media</MobileNavLink>
                            <MobileNavLink href="#about">
                              {t('common:about')}
                            </MobileNavLink>
                            <MobileNavLink href="#sostrenehals">
                              Søstrene Hals
                            </MobileNavLink>
                            <MobileNavLink href="#contact">
                              {t('common:contact')}
                            </MobileNavLink>
                          </div>
                          <div className="flex justify-center gap-4 mt-8">
                            <div>
                              <LanguageSwitcher />
                            </div>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
          </motion.div>
        </Container>
      </nav>
    </header>
  )
}
