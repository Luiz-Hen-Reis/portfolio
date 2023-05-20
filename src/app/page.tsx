"use client";

import { Formation, Header, Modal, Projects } from "@/components";
import Footer from "@/components/Footer";
import { useDarkModeContext } from "@/contexts/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <Modal />
        <div className="mx-6 py-2 xl:m-auto lg:max-w-7xl">
          <Header />
          <main>
            <Formation />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
