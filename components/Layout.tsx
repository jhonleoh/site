import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (domLoaded) {
    return (
      <>
        <div className="absolute w-full h-2 bg-gradient-to-r from-amber-500 to-pink-500" />
        <div className="flex h-screen flex-col flex-1 mx-auto w-full max-w-[1400px]">
          <Navigation />
          {children}
          <Footer />
        </div>
      </>
    )
  }
  return <></>
}

export default Layout
