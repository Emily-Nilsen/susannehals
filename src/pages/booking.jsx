import Head from 'next/head'
import Link from 'next/link'

import { LottieInteract } from '@/components/LottieInteract'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

export default function Booking() {
  const { t } = useTranslation()

  return (
    <motion.main
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        type: 'fade',
        ease: 'easeIn',
      }}
    >
      <Head>
        <title>Kontakt Susanne Hals</title>
        <meta name="description" content="something here" />
      </Head>
      <AuthLayout
        title="Get in touch"
        question="Do you need a song soloist for a wedding? Would you like to surprise someone with a beautiful song for a special occasion?"
        info="Experienced professional solo artist, Susanne Hals, creates the right atmosphere for the occasion. Susanne sings all kinds of genres and has an extensive repertoire."
        subtitle="Contact Susanne if you want a personal solo song for a wedding, party, event, funeral or memorial service."
      >
        <form
          action="#"
          subject="Kontakt Susanne Halsen"
          name="Susanne Halsen - Kontaktskjema"
          data-netlify="true"
          method="POST"
        >
          <input
            type="hidden"
            name="form-name"
            value="Susanne Halsen - Kontaktskjema"
          />
          <input type="hidden" name="subject" value="Kontakt Susanne Halsen" />
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="First name"
              id="first_name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last name"
              id="last_name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <SelectField
              className="col-span-full"
              label="How can I help you?"
              id="how-source"
              name="how_source"
            >
              <option>Wedding</option>
              <option>Special occasion</option>
              <option>Funeral</option>
              <option>Memorial service</option>
              <option>Other</option>
            </SelectField>
            <div className="col-span-2 pt-2">
              <div className="flex justify-between">
                <label
                  htmlFor="form-message"
                  className="block mb-2 text-sm font-semibold text-zinc-900"
                >
                  Message
                </label>
                <span
                  id="form-message-description"
                  className="text-sm text-slate-500"
                >
                  Max. 500 characters
                </span>
              </div>
              <div className="mt-1">
                <textarea
                  id="form-message"
                  required
                  maxLength="500"
                  name="form-message"
                  aria-describedby="form-message-description"
                  rows={4}
                  className="block w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-none shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-eye-green focus:outline-none focus:ring-4 focus:ring-eye-green/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-eye-green-light dark:focus:ring-eye-green-light/10 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <Button type="submit" color="eyeGreen" className="w-full mt-8">
            Send
          </Button>
          <div className="pt-12 pb-4 mt-16 prose border-t">
            <p>Alternate contact info</p>
            <div className="flex items-center">
              <span className="w-10 h-10">
                <LottieInteract
                  path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1669490649/Susanne%20Hals/email_xkn2j9.json"
                  loop
                  autoplay
                  speed="0.5"
                  delay="500"
                />
              </span>
              <Link
                href="mailto:susannehvinden@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="pl-2 font-semibold text-gray-900 no-underline hover:underline"
              >
                susannehvinden@gmail.com
              </Link>
            </div>
            <div className="flex items-center">
              <span className="w-10 h-10">
                <LottieInteract
                  path="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1669489837/Susanne%20Hals/telephone_rlk8bm.json"
                  autoplay
                  loop
                  speed="0.7"
                  delay="500"
                  interaction="play-on-show"
                />
              </span>
              <Link
                href="tel:007445506256"
                className="pl-2 font-semibold text-gray-900 no-underline hover:underline"
              >
                +47 455 06 256
              </Link>
            </div>
          </div>
        </form>
      </AuthLayout>
    </motion.main>
  )
}
