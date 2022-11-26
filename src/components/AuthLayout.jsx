import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/components/Logo'

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex min-h-screen pt-16 bg-booking-bg sm:py-28">
      <div className="relative z-10 flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6">
        <Link className="mx-auto" href="/" aria-label="Home">
          <div className="h-full cursor-pointer">
            <div className="relative z-10 w-full h-full pr-1">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_Logo_white_u8p8jb.svg"
                width={100}
                height={100}
                alt="Susanne Halsen logo"
                unoptimized
              />
            </div>
          </div>
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-5xl font-medium tracking-tight text-center text-white sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-center text-gray-200">{subtitle}</p>
          )}
        </div>
        <div className="flex-auto px-4 py-10 mt-10 -mx-4 bg-white shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  )
}
