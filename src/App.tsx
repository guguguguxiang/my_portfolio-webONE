import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

// 顶层应用组件：后续会拆分成 Hero / About / Projects / Contact 等模块
function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans antialiased">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="bg-accent-gradient bg-clip-text text-lg font-semibold text-transparent">
            Portfolio
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <Hero
          name="你的名字"
          title="前端开发 / 全栈工程师"
          description="专注于构建简洁、现代、响应式的 Web 体验，喜欢用 React、TypeScript 和 Tailwind CSS 打造高质量的前端界面。"
        />
        <Projects />
      </main>
    </div>
  );
}

export default App;

