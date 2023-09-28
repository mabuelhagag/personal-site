import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";

export default function Home() {
  const message =
    "Check how I over-complicated this message by poking around 😝".split(" ");
  const hello = api.useQueries((t) =>
    message.map((word) =>
      t.example.hello({
        text: word,
        link:
          word === "poking"
            ? "https://github.com/mabuelhagag/personal-site"
            : null,
      }),
    ),
  );

  return (
    <>
      <Head>
        <title>Hagag{"'"}s Mind</title>
        <meta
          name="description"
          content="A personal website for Mohamad Abuelhagag(Hagag)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Mohamad Abuel<span className="text-[hsl(280,100%,70%)]">hagag</span>
            {"'"}s Mind!
          </h1>

          <p className="font-mono text-2xl font-normal text-white">
            <>
              {hello.map((word, i) =>
                !word.isFetching ? (
                  <span key={i}>
                    {word.data?.link ? (
                      <Link
                        className="text-[hsl(280,100%,70%)]"
                        href={word.data.link}
                        target="_blank"
                      >
                        {word.data.word}
                      </Link>
                    ) : (
                      word.data?.word
                    )}
                  </span>
                ) : (
                  <span key={i} className="text-[hsl(280,100%,70%)]">
                    {new Array(message[i]?.length).fill("_")}
                  </span>
                ),
              )}
            </>
          </p>
        </div>
      </main>
    </>
  );
}
