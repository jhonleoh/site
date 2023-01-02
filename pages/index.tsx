import fs from "fs";
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

export default function Home({ postMetadata }: { postMetadata: PostMetadata[] }) {
  return (
    <>
      <Layout>
        <div className="flex flex-col space-y-12 md:space-y-0 mt-12 md:grid md:grid-cols-12 md:gap-y-8 md:gap-x-12 md:w-2/3 pl-8">
          {postMetadata.map(metadata => {
            const { title, author, tag, date, publish_after, link } = metadata
            return (<Article title={title} date={date} tag={tag} link={link} />)
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
