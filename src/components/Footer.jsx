import { NavLinks } from '@/components/NavLinks'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import navigation from './Socials'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-dark-beige">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-last">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-wheat hover:text-light-beige"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-center text-xs leading-5 text-wheat">
            {t('home:utviklet')}{' '}
            <a
              href="https://norsknett.no"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:underline"
            >
              Norsk Nett
            </a>
          </p>
        </div>

        <div className="mt-8 md:order-first md:mt-0">
          <p className="text-center text-xs leading-5 text-wheat">
            &copy; Copyright Susanne Hals {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
