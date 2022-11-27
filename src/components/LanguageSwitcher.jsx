import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function LanguageSwitcher() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <span className="relative z-0 inline-flex shadow-none">
      <button
        type="button"
        className="relative inline-flex items-center px-0 text-gray-500 transition duration-300 ease-in-out cursor-pointer bg-t border-y-0 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-0"
      >
        <Link
          activeclassname={locale === 'en'}
          locale="en"
          passHref
          href={asPath}
        >
          <p className="text-xs font-normal uppercase cursor-pointer sm:text-sm">
            En
          </p>
        </Link>
      </button>

      <button>
        <p className="px-1 text-sm font-normal pointer-events-none text-eye-green sm:px-2">
          |
        </p>
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-0 text-gray-500 transition duration-300 ease-in-out bg-t border-y-0 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-0"
      >
        <Link
          activeclassname={locale === 'no'}
          locale="no"
          passHref
          href={asPath}
        >
          <p className="text-xs font-normal uppercase sm:text-sm">no</p>
        </Link>
      </button>
    </span>
  )
}
