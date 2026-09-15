export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-8 px-6 py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Community Events
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Közösségi eseménykezelő webalkalmazás
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Next.js, React, TypeScript és PostgreSQL alapú példaalkalmazás
            európai felhasználókhoz, fejlesztőbarát local/staging/production
            környezetekkel.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Public GitHub repo public-safe szabályokkal",
            "VS Code taskok lokális ellenőrzésekhez",
            "GCP Cloud Runra később migrálható alapok",
          ].map((item) => (
            <div
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
