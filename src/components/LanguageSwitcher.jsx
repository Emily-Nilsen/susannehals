import { useRouter } from 'next/router'
import Link from 'next/link'

export function LanguageSwitcher() {
  const { locale, asPath } = useRouter()

  return (
    <span className="relative z-0 inline-flex shadow-none">
      <button
        type="button"
        className="relative inline-flex items-center px-0 transition duration-300 ease-in-out cursor-pointer bg-t border-y-0 text-gold hover:text-gold focus:z-10 focus:outline-none focus:ring-0 lg:text-wheat"
      >
        <Link
          activeclassname={locale === 'en' ? 'true' : ''}
          locale="en"
          passHref
          href={asPath}
        >
          <p className="hidden font-normal uppercase cursor-pointer sm:text-sm lg:block">
            en
          </p>
          <p className="font-medium uppercase cursor-pointer sm:text-sm lg:hidden">
            english
          </p>
        </Link>
      </button>

      <button>
        <p className="px-3 text-sm font-normal pointer-events-none text-tan/50 sm:px-2">
          |
        </p>
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-0 transition duration-300 ease-in-out bg-t text-goldfocus:z-10 border-y-0 text-gold hover:text-gold focus:outline-none focus:ring-0 lg:text-wheat"
      >
        <Link
          activeclassname={locale === 'no' ? 'true' : ''}
          locale="no"
          passHref
          href={asPath}
        >
          <p className="hidden font-normal uppercase sm:text-sm lg:block">no</p>
          <p className="font-medium uppercase sm:text-sm lg:hidden">norsk</p>
        </Link>
      </button>
    </span>
  )
}
