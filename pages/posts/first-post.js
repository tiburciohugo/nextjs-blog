import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center h-64 mx-auto">
      <Head>
        <title>{"First Post | Next.js + Tailwind CSS"}</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <h1 className="text-6xl font-bold">First Post</h1>
      <h2 className="m-12 text-lg">
        <Link className="text-blue-500 hover:text-blue-700 no-underline font-bold text-4xl hover:underline" href="/">Back to home</Link>
      </h2>
    </div>
    </Layout>
  );
}
