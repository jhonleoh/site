import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { setThemeOnLoad } from '../util/theme'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setThemeOnLoad()
  }, [])
  return <Component {...pageProps} />
}
