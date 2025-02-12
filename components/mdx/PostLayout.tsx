import fs from 'fs'
import path from 'path'

import { MDXProvider } from '@mdx-js/react'
import Layout from '../Layout'
import MDXComponents from './MDXComponents'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: JSX.Element | JSX.Element[]
  meta?: any
}

const PostLayout: React.FC<Props> = ({ meta, children }) => {
  let { title, author, tag } = meta

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>{toTitleCase(title)}</title>
      </Head>
      <Layout>
        {/* Article Heading */}
        <div className="relative flex flex-col w-full justify-start text-left mt-10 space-y-2 px-5 pb-8">
          <span className="text-3xl tracking-tight font-semibold text-light-text-primary dark:text-slate-400 drop-shadow-2xl hover:cursor-default">
            {title}
          </span>
          <span className="text-xs font-fira text-light-text-primary dark:text-slate-500 hover:cursor-default pt-1">
            written by: {author}
          </span>
          <Link href={{ pathname: '/search', query: { query: tag } }}>
            <div className="flex justify-start opacity-80 font-fira pt-1 group hover:cursor-pointer ">
              <img
                src="/icons/tag_dark.svg"
                className="w-3 inline dark:hidden"
              />
              <img
                src="/icons/tag.svg"
                className="w-3 opacity-50 group-hover:opacity-100 hidden dark:inline"
              />
              <span className="text-[.7rem] text-slate-500 group-hover:text-slate-300 pl-2">
                {tag}
              </span>
            </div>
          </Link>
          {/* <hr className="w-full bg-slate-800 border-slate-600 border-.5 self-end"/> */}
        </div>

        {/* Content */}
        <div className="px-5 sm:px-5">{children}</div>
      </Layout>
    </MDXProvider>
  )
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

export default PostLayout
