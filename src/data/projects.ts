export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  projectUrl: string;
};

// 项目数据：后续可以按需增删改
// 占位图使用高质量 Unsplash 图片
const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "个人作品集网站",
    description:
      "基于 React、TypeScript 和 Tailwind CSS 构建的个人作品集网站，支持深色主题与渐变视觉风格。",
    imageUrl: PLACEHOLDER_IMAGE,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    projectUrl: "#",
  },
  {
    id: "dashboard",
    title: "数据可视化 Dashboard",
    description:
      "响应式数据可视化 Dashboard，集成多种图表组件，支持深色模式与多终端自适应。",
    imageUrl: PLACEHOLDER_IMAGE,
    techStack: ["React", "ECharts", "Tailwind CSS"],
    projectUrl: "#",
  },
  {
    id: "design-system",
    title: "前端组件设计系统",
    description:
      "抽象常用 UI 模式并沉淀为可复用组件库，统一设计语言与交互体验，提升前端开发效率。",
    imageUrl: PLACEHOLDER_IMAGE,
    techStack: ["TypeScript", "Storybook", "Tailwind CSS"],
    projectUrl: "#",
  },
  {
    id: "blog-platform",
    title: "技术博客平台",
    description:
      "支持 Markdown 编写、代码高亮与标签分类的技术博客平台，用于记录开发笔记与分享实践经验。",
    imageUrl: PLACEHOLDER_IMAGE,
    techStack: ["React", "Next.js", "MDX"],
    projectUrl: "#",
  },
];

