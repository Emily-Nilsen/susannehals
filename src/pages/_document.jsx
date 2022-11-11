import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased bg-gray-50" lang="en">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1668168980/Susanne%20Hals/Susanne_favicon_htjila.svg"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ccv8xuk.css"
        ></link>
      </Head>
      <body className="flex flex-col h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
