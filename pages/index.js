import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="p-4 text-center mx-auto max-w-2xl">
        <p className="font-semibold">
          Hello, I'm <span className="font-bold">Hugo</span>. I'm a web
          developer and a translator(English/Portuguese), former English
          Teacher. You can contact me on{" "}
          <a
            href="https://twitter.com"
            target={"_blank"}
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          .
        </p>
        <p className="font-semibold mt-2">
          (This is a sample website - you'll be building a site like this on{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://nextjs.org/learn"
            target={"_blank"}
          >
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>

      <section className="text-2xl text-center  font-semibold mx-auto max-w-2xl p-4">
        <h2 className="text-2xl font-bold text-center p-2 gap-4">Blog</h2>
        <ul className="list-none p-2 my-2">
          {allPostsData?.map(({ id, date, title }) => (
            <li
              className="my-4 shadow-lg p-4 rounded-lg border-2 border-gray-200"
              key={id}
            >
              <Link
                className="text-4xl max-w-2xl hover:text-blue-500 hover:underline"
                href={`/posts/${id}`}
              >
                {title}
              </Link>
              <div className="mt-2 font-light">{id}</div>
              <small className="text-gray-500 text-sm font-light mt-2">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
