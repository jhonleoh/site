import { H1, H2, H3 } from './components/Header'
import Image from 'next/image'
import Tick from './components/Tick'
import Link from 'next/link'

// TODO: Add explicit types here for clarity
const MDXComponents = {
  h1: ({ children }: any) => <H1>{children}</H1>,
  h2: ({ children }: any) => <H2>{children}</H2>,
  h3: ({ children }: any) => <H3>{children}</H3>,
  code: (props: any) => {
    if (props.className) {
      return <code className="text-sm">{props.children}</code>
    }
    return <Tick>{props.children}</Tick>
  },
  p: ({ children }: any) => (
    <p className="leading-8 mt-5 text-slate-200">{children}</p>
  ),
  li: ({ children }: any) => <li className="leading-8">{children}</li>,
  ul: ({ children }: any) => <ul className="pl-5 list-disc">{children}</ul>,
  ol: ({ children }: any) => <ol className="pl-5 list-decimal">{children}</ol>,
  img: (props: any) => {
    return (
      <div className="relative max-w-1/3 w-fit group">
        <div className="relative group-hover:opacity-50 duration-300 transition-all ">
          <Link href={props.src} target="_blank" rel="noreferrer">
            <Image src={props.src} alt={props.alt} width={800} height={800} />
          </Link>
        </div>
        <div className="flex bg-slate-700 items-center justify-between opacity-1 group-hover:opacity-1 text-white w-full h-full text-xs p-1">
          <span>{props.alt !== 'Untitled' && props.alt}</span>
          <span className="text-slate-400">Click to see full size</span>
        </div>
      </div>
    )
  },
  a: (props: any) => {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="text-blue-200 hover:cursor-pointer underline underline-offset-8 hover:text-slate-500 transition-all duration-300"
      >
        {props.children}
      </a>
    )
  },
}

export default MDXComponents
