import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  // const params = {
  //   cloudName: 'dt3k2apqd',
  //   publicId: 'Susanne Hals/Pamina2021.Malaga_bjnlmi',
  // }

  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        <link rel="icon" href="/images/Susanne_favicon.svg" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ccv8xuk.css"
        ></link>
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
