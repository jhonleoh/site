import { H1, H2, H3 } from './components/Header'
import Code from './components/Code'
import Tick from './components/Tick'

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
  a: (props: any) => {
    return (
    <a href={props.href} target="_blank" className="text-blue-200 hover:cursor-pointer underline underline-offset-8 hover:text-slate-500 transition-all duration-300">
      {props.children}
    </a>
  )},
}

export default MDXComponents
