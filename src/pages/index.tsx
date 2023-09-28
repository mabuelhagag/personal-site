import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";

export default function Home() {
  const message =
    "Check how I over-complicated this message by checking the dev tools 😝";
  const hello = message; //api.useQueries((t) => [])); //api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Hagag{"'"}s Mind</title>
        <meta
          name="description"
          content="A personal website for Mohamad Abuelhagag(Hagag)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Mohamad Abuel<span className="text-[hsl(280,100%,70%)]">hagag</span>
            {"'"}s Mind!
          </h1>

          <p className="text-2xl text-white">
            {/* {hello.data ? hello.data.greeting : "Loading welcome..."} */}
            {hello}
          </p>
        </div>
      </main>
    </>
  );
}
