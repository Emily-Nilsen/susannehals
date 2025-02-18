import Link from 'next/link'
import navigation from './Socials'

export function Footer() {
  return (
    <footer className="bg-dark-beige">
      <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
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
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-8 md:order-first md:mt-0">
          <p className="text-xs leading-5 text-center text-wheat">
            &copy; Copyright Susanne Hals {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
