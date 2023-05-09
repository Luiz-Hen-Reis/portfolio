"use client";

import Header from "@/components/Header";
import { useDarkModeContext } from "@/contexts/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <div className="mx-6 xl:m-auto lg:max-w-7xl">
          <Header />

          <section id="projects">
            <h2>Meus projetos</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
