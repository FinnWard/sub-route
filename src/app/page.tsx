import { NamesDemo } from "@/app/names-demo";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Minimal demo
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
            Compare a REST endpoint with a Next.js server action.
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Both buttons load the same list of names. One uses{" "}
            <code className="rounded bg-zinc-200 px-1 py-0.5 text-sm dark:bg-zinc-800">
              /api/names
            </code>
            , and the other calls a server action directly.
          </p>
        </div>

        <div className="mt-10">
          <NamesDemo />
        </div>
      </main>
    </div>
  );
}
