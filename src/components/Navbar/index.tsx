import { useDarkModeContext } from "@/contexts/DarkModeContext";
import { Github, Sun, Moon, Menu, Linkedin } from "lucide-react";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-xl">Luiz Henrique</h1>
      <nav className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-5 mx-4 text-lg">
          <a href="#formation" className="hover:underline">Formação</a>
          <a href="#projects" className="hover:underline">Projetos</a>
        </div>
        <a href="https://github.com/Luiz-Hen-Reis" target="_blank" className="hover:animate-pulse">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/luiz-henrique-reis-barbosa/" target="_blank" className="hover:animate-bounce">
          <Linkedin />
        </a>
        <button onClick={toggleDarkMode} className="hover:animate-spin active:animate-ping">
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <a
          href="/files/cv.pdf"
          download="Luiz Henrique's CV"
          className="hidden sm:inline-block bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md transition duration-300 animate-pulse hover:animate-none hover:bg-yellow-400 active:animate-ping"
        >
          Baixar meu CV &darr;
        </a>
        <button className="sm:hidden">
          <Menu />
        </button>
      </nav>
    </div>
  );
}
