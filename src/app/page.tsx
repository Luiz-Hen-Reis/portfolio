"use client";

import Header from "@/components/Header";
import { useDarkModeContext } from "@/contexts/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <Header />
      </div>
    </div>
  );
}
