"use client";

import { About, Header } from "@/components";
import { useDarkModeContext } from "@/contexts/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <div className="mx-6 py-2 xl:m-auto lg:max-w-7xl">
          <Header />
          <main>
            <About />

            <section id="projects">
            <h2></h2>
          </section>
          </main>
        </div>
      </div>
    </div>
  );
}
