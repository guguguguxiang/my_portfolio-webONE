type HeroProps = {
  name: string;
  title: string;
  description: string;
  avatarUrl?: string;
};

const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix";

// Hero 区域：大标题 + 简介 + 头像
export function Hero({
  name,
  title,
  description,
  avatarUrl = DEFAULT_AVATAR_URL,
}: HeroProps) {
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

      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border border-sky-400/40 bg-gradient-to-tr from-sky-500/40 via-fuchsia-500/30 to-emerald-400/40 shadow-[0_0_45px_rgba(56,189,248,0.5)] sm:h-40 sm:w-40">
        <img
          src={avatarUrl}
          alt={name}
          className="h-full w-full rounded-full object-cover ring-2 ring-white/10"
          loading="lazy"
        />
      </div>
    </section>
  );
}

