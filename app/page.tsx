import { siteData } from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-5xl font-bold">
          Halo, saya {siteData.name}
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          {siteData.role}
        </p>

        <p className="mt-8 max-w-2xl text-slate-400">
          {siteData.about}
        </p>

        <div className="mt-16">
          <h2 className="text-3xl font-bold">
            Project
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {siteData.projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-slate-700 p-6"
              >
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}