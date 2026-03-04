type HeroProps = {
  name: string;
  title: string;
  description: string;
};

// Hero 区域：大标题 + 简介 + 头像
export function Hero({ name, title, description }: HeroProps) {
  return (
    <section className="flex flex-col items-center gap-10 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <div className="space-y-4 max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-400/80">
          个人作品集
        </p>
        <h1 className="bg-accent-gradient bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          你好，我是{name}
          <span className="block text-base font-normal text-neutral-300 sm:text-lg">
            {title}
          </span>
        </h1>
        <p className="text-sm text-neutral-300 sm:text-base">{description}</p>
      </div>

      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border border-white/10 bg-neutral-900/80 shadow-[0_0_40px_rgba(56,189,248,0.35)] sm:h-40 sm:w-40">
        <div className="absolute inset-0 bg-accent-gradient opacity-70" />
        <div className="relative flex h-full w-full items-center justify-center text-4xl font-semibold text-white/90">
          {name.slice(0, 1)}
        </div>
      </div>
    </section>
  );
}

