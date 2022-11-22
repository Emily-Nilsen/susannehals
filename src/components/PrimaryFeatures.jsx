import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import { LottieInteract } from '@/components/LottieInteract'
import { AppScreen } from '@/components/AppScreen'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Copenhagen, Denmark',
    description:
      'Susanne studied a Master of Voice, specialising in opera, at The Royal Danish Academy of Music, from 2016 to 2018.',
    icon: DeviceUserIcon,
    screen: Copenhagen,
  },
  {
    name: 'The Oseana Art and Cultural Centre, Os',
    description:
      'At the Bergen International Festival in 2013, together with the opera company Opera Omnia, Susanne performed in the opera «Havfest», role-playing «sea creature».',
    icon: DeviceTouchIcon,
    screen: Os,
  },
  {
    name: 'Málaga, Spain',
    description:
      'In 2019 Susanne performed as a Málaga Clásica Artist at the VII International Chamber Music Festival.',
    icon: DeviceTouchIcon,
    screen: Malaga,
  },
  {
    name: 'Montpellier Opera, France',
    description:
      'Together with the Norwegian Girls’ Choir, in 2005, Susanne Hals participated in the staging of the opera "Libertad" written by Gabriel Alegria.',
    icon: DeviceNotificationIcon,
    screen: Montpellier,
  },
  {
    name: 'Bergen, Norway',
    description:
      'Susanne studied a Bachelor of Music, Voice and Opera at the Grieg Academy from 2012 to 2016. During the 2015 and 2016 Bergen International Festivals, she performed solo concerts at the Grieg Hall.',
    icon: DeviceTouchIcon,
    screen: Bergen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function Copenhagen({ custom, animated = false }) {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Copenhagen_2_y9mvtl.jpg"
          alt="Copenhagen"
          sizes="100vw"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

function Os({ custom, animated = false }) {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/os_kulturhus_2_fjdm1p.jpg"
          alt="Os Kulturhus"
          sizes="100vw"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

function Malaga({ custom, animated = false }) {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Malaga_2_junypw.jpg"
          alt="Malaga, Spain"
          sizes="100vw"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

function Montpellier({ custom, animated = false }) {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/montpellier_opera_2_arnn2l.jpg"
          alt="Montpellier, France"
          sizes="100vw"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

function Bergen({ custom, animated = false }) {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668948414/Susanne%20Hals/Bergen_2_f9cmbp.jpg"
          alt="Bergen, Norway"
          sizes="100vw"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <h3 className="mt-0 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                /> */}
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                {/* <feature.icon className="w-8 h-8" /> */}
                <h3 className="mt-0 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="relative bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          {/* <p className="mb-6 text-lg text-gray-400 uppercase">about</p> */}
          <h1 className="mb-6 text-6xl font-medium tracking-tight text-white sm:text-8xl">
            About Susanne
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            The young Norwegian soprano, Susanne Hvinden Hals, hails from Oslo,
            Norway. She received her master of music from The Royal Danish
            Academy of Music in Copenhagen.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Susanne has sung roles as Susanna in Mozart's «Le nozze di Figaro»,
            Adele in «Die Fledermaus», J. Strauss, Pamina in «Die Zauberflöte»,
            and Lucia in Benjamin Brittens «The rape of Lucretia».
          </p>
          <p className="mt-2 text-lg text-gray-400">
            In 2003 Susanne Hals made her debut with The Norwegian Girls Choir
            at Opera Montpellier in France. Her accomplishments and professional
            singing skills have led to Susanne being a highly sought after
            soprano in Norway.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Moreover, she often sings with orchestras in oratorios and has
            performed at various festivals and concerts, both in Norway and
            abroad, including Málaga Clásica in Spain.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
