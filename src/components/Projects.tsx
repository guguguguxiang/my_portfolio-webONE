import { useEffect, useMemo, useState } from "react";
import { projects as seedProjects, type Project } from "../data/projects";

type ProjectModalProps = {
  open: boolean;
  value: Project | null;
  onClose: () => void;
  onSave: (next: Project) => void;
};

function IconButton({
  label,
  onClick,
  variant,
  children,
}: {
  label: string;
  onClick: () => void;
  variant: "edit" | "delete";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex h-9 items-center gap-1.5 rounded-full bg-black/40 px-3 text-xs font-semibold text-white/90 ring-1 backdrop-blur-sm transition";
  const variantClass =
    variant === "edit"
      ? "ring-sky-400/40 hover:bg-sky-500/80 hover:ring-sky-300/70"
      : "ring-rose-400/40 hover:bg-rose-500/80 hover:ring-rose-300/70";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`${base} ${variantClass}`}
    >
      {children}
      <span className="leading-none">{label}</span>
    </button>
  );
}

function ProjectModal({ open, value, onClose, onSave }: ProjectModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [techStack, setTechStack] = useState("");

  useEffect(() => {
    if (!open) return;
    if (!value) return;
    setTitle(value.title);
    setDescription(value.description);
    setImageUrl(value.imageUrl);
    setProjectUrl(value.projectUrl);
    setTechStack(value.techStack.join(", "));
  }, [open, value]);

  if (!open || !value) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Project = {
      ...value,
      title: title.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim() || value.imageUrl,
      projectUrl: projectUrl.trim() || value.projectUrl,
      techStack: techStack
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    onSave(next);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-[0_20px_80px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
          <h3 className="text-base font-semibold text-white">编辑项目</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-2 py-1 text-sm text-neutral-300 hover:bg-white/10"
            aria-label="关闭"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-200">
              项目名称
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40"
              required
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-200">
              项目简介
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[92px] w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40"
              placeholder="写一句清晰的项目介绍：做了什么、解决了什么、亮点是什么"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-200">
                图片链接
              </label>
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-200">
                项目链接
              </label>
              <input
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-200">
              技术栈（逗号分隔）
            </label>
            <input
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40"
              placeholder="React, TypeScript, Tailwind CSS"
            />
          </div>

          {imageUrl ? (
            <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
              <img
                src={imageUrl}
                alt="预览"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : null}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-gray-800 px-5 py-2 text-sm font-semibold text-neutral-200 ring-1 ring-gray-700 hover:bg-gray-700"
            >
              取消
            </button>
            <button
              type="submit"
              className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.6)] hover:bg-sky-400"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Projects：四方格展示 + 美化编辑/删除按钮（可用）
export function Projects() {
  const [items, setItems] = useState<Project[]>(seedProjects);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const editingProject = useMemo(
    () => items.find((p) => p.id === editingId) ?? null,
    [editingId, items]
  );

  const handleEdit = (id: string) => {
    setEditingId(id);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    const target = items.find((p) => p.id === id);
    const ok = window.confirm(`确定删除项目「${target?.title ?? ""}」吗？`);
    if (!ok) return;
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSave = (next: Project) => {
    setItems((prev) => prev.map((p) => (p.id === next.id ? next : p)));
  };

  return (
    <section className="mt-16 space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="bg-accent-gradient bg-clip-text text-transparent">
            项目展示
          </span>
        </h2>
        <p className="text-sm text-neutral-400 sm:text-base">
          四方格展示（约 4 个项目）：每个卡片都支持编辑与删除。
        </p>
      </header>

      {/* 强制 Grid：手机 1 列，平板/电脑 2 列，gap-8 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
          >
            {/* 右上角操作：默认半透明，hover 显示 */}
            <div className="absolute right-4 top-4 z-10 opacity-60 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-full bg-black/50 p-2 backdrop-blur-sm">
                <IconButton
                  label="编辑"
                  variant="edit"
                  onClick={() => handleEdit(project.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                  </svg>
                </IconButton>
                <IconButton
                  label="删除"
                  variant="delete"
                  onClick={() => handleDelete(project.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </IconButton>
              </div>
            </div>

            {/* 图片 */}
            <div className="h-48 w-full overflow-hidden bg-gray-900">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* 内容 */}
            <div className="flex flex-1 flex-col gap-3 px-5 py-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                {project.projectUrl && project.projectUrl !== "#" ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    查看
                  </a>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal
        open={open}
        value={editingProject}
        onClose={() => setOpen(false)}
        onSave={handleSave}
      />
    </section>
  );
}

