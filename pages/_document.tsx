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
      <body className="font-inter h-full min-h-screen  text-light-text-primary dark:text-dark-text-primary dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
