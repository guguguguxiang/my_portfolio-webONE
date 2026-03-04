import { projects } from "../data/projects";

// Projects 列表：展示项目截图、标题、描述和技术栈标签
export function Projects() {
  return (
    <section className="mt-16 space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="bg-accent-gradient bg-clip-text text-transparent">
            项目展示
          </span>
        </h2>
        <p className="text-sm text-neutral-400 sm:text-base">
          下面是我近期参与或独立完成的一些代表性项目，涵盖了前端工程化、界面设计和数据可视化等方向。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-[0_0_35px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/50"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
            </div>

            <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {project.title}
                </h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-sky-400 underline-offset-4 hover:underline"
                  >
                    查看项目
                  </a>
                ) : null}
              </div>

              <p className="text-sm text-neutral-300">
                {project.description}
              </p>

              <div className="mt-1 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-sky-400/50 bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

