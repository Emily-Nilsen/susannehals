import Head from 'next/head'

import { Testimonial } from '@/components/Testimonial'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Media } from '@/components/Media'
import { Offers } from '@/components/Offers'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Sisters } from '@/components/Sisters'
import { Timeline } from '@/components/Timeline'
import { VideoFeature } from '@/components/VideoFeature'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('common:title')}</title>
        <meta
          name="description"
          content="Add something about Susanne here!!!!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Testimonial
          testimonial={t('home:testimonial01')}
          author={t('home:author01')}
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        <Offers />
        {/* <PrimaryFeatures /> */}
        <Testimonial
          testimonial={t('home:testimonial02')}
          author="Trish McCaffrey / Voice Studio, New York"
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        {/* <SecondaryFeatures /> */}
        <Timeline />
        <Testimonial
          testimonial={t('home:testimonial03')}
          author={t('home:author03')}
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        {/* <Reviews /> */}
        {/* <Faqs /> */}
        <Media />
        <Sisters />
      </main>
      <Footer />
    </>
  )
}
