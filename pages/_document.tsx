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
      <body className="font-inter h-full min-h-screen  bg-gradient-to-br from-zinc-50 to-stone-200 text-light-text-primary dark:text-dark-text-primary dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
