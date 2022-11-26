import Head from 'next/head'
import Link from 'next/link'

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
        subtitle={
          <>
            Prefer e-mail? Contact me at{' '}
            <Link
              href="mailto:emily.jane.nilsen@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white hover:underline"
            >
              susannehvinden@gmail.com
            </Link>{' '}
            or ring me on{' '}
            <Link
              href="tel:007445506256"
              className="font-semibold text-white hover:underline"
            >
              {' '}
              455 06 256
            </Link>
            .
          </>
        }
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
                  className="block w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-none shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <Button type="submit" color="eyeGreen" className="w-full mt-8">
            Send
          </Button>
        </form>
      </AuthLayout>
    </motion.main>
  )
}