export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
};

// 项目数据：后续可以按需增删改
export const projects: Project[] = [
  {
    id: "portfolio",
    title: "个人作品集网站",
    description:
      "基于 React、TypeScript 和 Tailwind CSS 构建的个人作品集网站，支持深色主题与渐变视觉风格。",
    imageUrl: "https://via.placeholder.com/640x360.png?text=Portfolio",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "#",
  },
  {
    id: "dashboard",
    title: "数据可视化 Dashboard",
    description:
      "响应式数据大屏，包含多种图表组件与交互动效，适配桌面与移动端。",
    imageUrl: "https://via.placeholder.com/640x360.png?text=Dashboard",
    techStack: ["React", "ECharts", "Tailwind CSS"],
    link: "#",
  },
];

