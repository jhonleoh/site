import fs from "fs";
import { useRouter } from "next/router";
import path from "path";

import Article from "../components/Article"
import Layout from "../components/Layout"

type PostMetadata = {
  title?: string;
  author?: string;
  tag?: string;
  date?: string;
  publish_after?: string;
  link?: string;
}

export default function Search({ postMetadata }: { postMetadata: PostMetadata[] }) {
  const router = useRouter()

  const tag = router.query['query']
  const matchedResults = postMetadata.filter((item) => item.tag == tag)

  return (
    <>
      <Layout>
        <div className="px-8 mt-5 text-slate-400 font-fira">
        results for: <span className="underline underline-offset-8">{tag}</span>
        </div>
        <div className="flex flex-col space-y-8 mt-12 md:w-2/3 px-8">
          {matchedResults.map((metadata, i)=> {
            const { title, author, tag, date, publish_after, link } = metadata
            return (<Article key={i} title={title} date={date} tag={tag} link={link} />)
          })}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "pages/article");
  let postFilenames = fs.readdirSync(postDirectory);
  const postModules = await Promise.all(
    postFilenames.map(async (p) => {
      if (!p.includes("index")) {
        return { component: await import(`./article/${p}`), filename: p }
      }
    })
  )

  const postMetadata = postModules.map(({ component, filename }: any) =>
    (component.meta ? { ...component.meta, link: filename.split(".mdx")[0] } : null));

  return {
    props: {
      postMetadata: postMetadata,
    },
  };
}
