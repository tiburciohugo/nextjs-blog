import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "Hugo Tiburcio";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="flex flex-col items-center mt-8">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile3.jpg"
              className="rounded-full drop-shadow-lg"
              height={150}
              width={150}
              alt=""
            />
            <h1 className="text-5xl font-bold mt-2 drop-shadow-lg">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile3.jpg"
                className="rounded-full drop-shadow-lg"
                height={150}
                width={150}
                alt="profile"
              />
            </Link>
            <h2 className="mt-2">
              <Link
                href="/"
                className="no-underline font-bold text-5xl drop-shadow-lg"
              >
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main className="mx-auto mt-12 px-4">{children}</main>

      {!home ? (
        <div className="mt-12 mx-auto md:w-1/12">
          <Link
            className="ml-4 hover:text-blue-500 hover:underline cursor-pointer"
            href="/"
          >
            ← Back to home
          </Link>
        </div>
      ) : null}
    </>
  );
}
