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
      <body className="font-inter min-h-screen dark:bg-dark-background dark:text-dark-text-primary bg-gradient-to-br from-gray-800 to-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
