import { NavLinks } from '@/components/NavLinks'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import navigation from './Socials'

export function Footer() {
  return (
    <footer className="bg-dark-beige">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
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
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-wheat">
            &copy; Copyright Susanne Hals {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
