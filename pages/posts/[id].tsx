import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { useRouter } from "next/router";

type params = {
  params: { id: string };
};

type postData = {
  title: string;
  date: string;
  id?: string;
  contentHtml: string;
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // Any path not returned by `getStaticPaths` will result in a 404 page
  };
}

export async function getStaticProps({ params }: params) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className="text-center md:text-left p-2 md:p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 drop-shadow-md">
          {postData.title}
        </h1>
        <div className="text-sm text-gray-500 font-light">
          <Date dateString={postData.date} />
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Layout>
  );
}
