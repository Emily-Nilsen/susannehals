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

export default function Home() {
  return (
    <>
      <Head>
        <title>Susanne Hals - Soprano classical singer.</title>
        <meta
          name="description"
          content="Add something about Susanne here!!!!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Testimonial
          testimonial="Susanne has a beautiful voice and possesses a very great and
              dramatic talent; her timing is natural and on point."
          author="Idil Alpsøy / opera singer, copenhagen"
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        <Offers />
        {/* <PrimaryFeatures /> */}
        <Testimonial
          testimonial="Susanne is a charming soprano with a beautiful voice and the personality, musical instincts and commitment to succeed."
          author="Trish McCaffrey / Voice Studio, New York"
          lottie="https://res.cloudinary.com/dt3k2apqd/raw/upload/v1668967853/Susanne%20Hals/decorative-border-01_sl1qth.json"
        />
        {/* <SecondaryFeatures /> */}
        <Timeline />
        <Testimonial
          testimonial="Susanne owns a beautiful voice of high quality and exhibits both musical and artistic surplus."
          author="Marianne Rørholm / Opera Singer, Copenhagen"
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
