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
        className="bg-t relative inline-flex cursor-pointer items-center border-y-0 px-0 text-gray-500 transition duration-300 ease-in-out hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-0"
      >
        <Link
          activeclassname={locale === 'en' ? 'true' : ''}
          locale="en"
          passHref
          href={asPath}
        >
          <p className="hidden cursor-pointer font-normal uppercase sm:text-sm lg:block">
            en
          </p>
          <p className="cursor-pointer font-normal uppercase sm:text-sm lg:hidden">
            english
          </p>
        </Link>
      </button>

      <button>
        <p className="pointer-events-none px-3 text-sm font-normal text-eye-green sm:px-2">
          |
        </p>
      </button>
      <button
        type="button"
        className="bg-t relative inline-flex items-center border-y-0 px-0 text-gray-500 transition duration-300 ease-in-out hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-0"
      >
        <Link
          activeclassname={locale === 'no' ? 'true' : ''}
          locale="no"
          passHref
          href={asPath}
        >
          <p className="hidden font-normal uppercase sm:text-sm lg:block">no</p>
          <p className="font-normal uppercase sm:text-sm lg:hidden">norsk</p>
        </Link>
      </button>
    </span>
  )
}
