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
  title = title.toLowerCase()
  author = author.toLowerCase()
  tag = tag.toLowerCase()

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>{toTitleCase(title)}</title>
      </Head>
      <Layout>
        {/* Article Heading */}
        <div className="flex flex-col w-full justify-center text-center mt-5 space-y-3 px-5 ">
          <span className="text-2xl font-semibold text-light-text-primary dark:text-slate-300 drop-shadow-2xl hover:cursor-default">
            {title}
          </span>
          <span className="text-xs font-fira text-light-text-primary dark:text-slate-500 hover:cursor-default">
            written by: {author}
          </span>
          <Link href={{ pathname: '/search', query: { query: tag } }}>
            <div className="flex justify-center opacity-80 space-x-2 font-fira pt-1 group hover:cursor-pointer">
              <img
                src="/icons/tag_dark.svg"
                className="w-3 inline dark:hidden"
              />
              <img
                src="/icons/tag.svg"
                className="w-3 opacity-50 group-hover:opacity-100 hidden dark:inline"
              />
              <span className="text-[.7rem] text-slate-500 group-hover:text-slate-300">
                {tag}
              </span>
            </div>
          </Link>
          <div className="mt-5 pl-8 border border-slate-800 w-full mx-auto" />
        </div>

        {/* Content */}
        <div className="px-4 sm:px-8">{children}</div>
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
