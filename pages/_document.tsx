import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
            rel="stylesheet"
            href="/syntax/earth.css"
          ></link>
        </Head>
      <body className="font-inter h-full min-h-screen bg-dark-background text-dark-text-primary bg-gradient-to-br from-gray-800 to-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
