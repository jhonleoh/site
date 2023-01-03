import { useRouter } from 'next/router'
import Link from 'next/link'
import ToggleTheme from '../util/theme'

// Navigation: Main nav header & link wrapper present on every page
const Navigation: React.FC = () => {
  const router = useRouter()

  const generateDynamicLink = (
    linkName?: string,
    external: boolean = false,
  ) => {
    const target = linkName
    return (
      <Link href={`/${target === undefined ? '' : target}`}>
        <span
          className={`hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent 
                hover:cursor-pointer ${
                  router.pathname == target
                    && 'bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'
                }`}
        >
          {target == undefined ? 'home' : `${target}`}
        </span>
      </Link>
    )
  }

  return (
    <div className="flex flex-col w-full mt-12 sm:px-5 justify-center text-center sm:text-left sm:justify-start">
      {/* Logo Stuff */}
      <Link href="/">
        <div className="flex items-center justify-center sm:justify-start space-x-2 hover:cursor-pointer group">
          <img src="/icons/logo.svg" className="w-12 -mt-2" />
          <div className="group-hover:opacity-50 duration-200 transition-all ease-in-out">
            <span className="font-semibold text-4xl drop-shadow-xl group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
              {'./ryan-'}
            </span>
            <span className="font-thin text-4xl drop-shadow-xl group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
              schachte
            </span>
          </div>
        </div>
      </Link>
      <span className="font-fira sm:pl-3 mt-5 text-xs text-light-text-primary dark:text-dark-inactive">
        {'$ sh echo “blah blah blah” > /dev/null'}
      </span>

      {/* Links and Nav */}
      <div className="flex uppercase space-x-7 sm:pl-3 font-semibold border-y border-slate-600 py-6 mt-6">
        <div className="flex justify-center sm:justify-between w-full">
          <div className="text-lg sm:text-base flex space-x-7 sm:space-x-8 justify-center sm:justify-start items-center">
            <Link href={`/`}>
              <span
                className={`hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent 
                            hover:cursor-pointer ${
                              router.pathname == '/'
                                && 'bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'
                            }`}
              >
                Home
              </span>
            </Link>
            <Link
              href={`https://www.youtube.com/c/thesimpleengineer`}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className={`hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent`}
              >
                youtube
              </span>
            </Link>
            <Link href={`/contact`}>
              <span
                className={`hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent 
                            hover:cursor-pointer ${
                              router.pathname == '/contact'
                                && 'bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'
                            }`}
              >
                contact
              </span>
            </Link>
            <span
              onClick={() => ToggleTheme()}
              className={`opacity-80 block sm:hidden hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent 
                            hover:cursor-pointer ${'text-light-text-primary dark:text-dark-inactive'}`}
            >
              <img
                src="/icons/sun.svg"
                className="w-6 hover:opacity-50 hover:cursor-pointer block dark:hidden"
              />
              <img
                src="/icons/sun_dark.svg"
                className="w-6 hover:opacity-50 hover:cursor-pointer hidden dark:block"
              />
            </span>
          </div>
          <span
            className="sm:pr-5 hidden sm:block"
            onClick={() => ToggleTheme()}
          >
            <img
              src="/icons/sun.svg"
              className="w-6 hover:opacity-50 hover:cursor-pointer block dark:hidden"
            />
            <img
              src="/icons/sun_dark.svg"
              className="w-6 hover:opacity-50 hover:cursor-pointer hidden dark:block"
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navigation
