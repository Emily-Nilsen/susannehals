import Head from 'next/head'

import { Testimonial } from '@/components/Testimonial'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoHero } from '@/components/VideoHero'
import { MediaGallery } from '@/components/MediaGallery'
import { Offers } from '@/components/Offers'
import { HvemErJeg } from '@/components/HvemErJeg'
import { Sisters } from '@/components/Sisters'
import { Timeline } from '@/components/Timeline'
import { Contact } from '@/components/Contact'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('common:title')}</title>
        <meta name="description" content={t('common:description')} />
        <link
          rel="canonical"
          href="https://www.susannehals.com/"
          key="canonical"
        />
      </Head>
      <Header />
      <main>
        <VideoHero />
        <HvemErJeg />

        <Testimonial
          testimonial={t('home:testimonial01')}
          author={t('home:author01')}
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        <Offers />
        <Testimonial
          testimonial={t('home:testimonial02')}
          author="Trish McCaffrey / Voice Studio, New York"
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />

        <MediaGallery />

        <Testimonial
          testimonial={t('home:testimonial03')}
          author={t('home:author03')}
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        <Timeline />

        <Contact />
        <Sisters />
      </main>
      <Footer />
    </>
  )
}
