import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { VideoFeature } from '@/components/VideoFeature'

export default function Home() {
  return (
    <>
      <Head>
        <title>Susanne Hals - Soprano classical singer.</title>
        <meta
          name="description"
          content="Add something about Susanne her!!!!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <VideoFeature />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
