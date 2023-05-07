import { useDarkModeContext } from "@/contexts/DarkModeContext";
import { Github, Sun, Moon, Menu } from "lucide-react";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <div className="flex items-center justify-between">
    <h1 className="font-bold text-xl">Luiz Henrique</h1>
    <nav className="flex items-center gap-2">
      <a href="https://github.com/Luiz-Hen-Reis" target="_blank">
        <Github />
      </a>
      <button onClick={toggleDarkMode} className="transition-all">
        {darkMode ? <Sun /> : <Moon />}
      </button>
      <a href="/files/cv.pdf" download="Luiz Henrique's CV" className="hidden sm:inline-block bg-yellow-400 p-3 rounded dark:text-white text-sm">
          Baixar meu CV &darr;
      </a>
      <button className="sm:hidden">
        <Menu />
      </button>
    </nav>
  </div>
  )
}