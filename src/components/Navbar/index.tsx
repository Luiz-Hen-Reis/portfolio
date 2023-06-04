import { useDarkModeContext } from "@/contexts/DarkModeContext";
import { useModalContext } from "@/contexts/ModalContext";
import { Github, Sun, Moon, Menu, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const { openModal } = useModalContext();

  return (
    <nav className="flex items-center justify-between">
      <h1 className="font-bold text-xl">Luiz Henrique</h1>
      <nav className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-5 mx-4 text-lg">
          <Link href="#MyJourney" className="hover:underline">
            Minha Jornada
          </Link>
          <Link href="#projects" className="hover:underline">
            Projetos
          </Link>
          <Link href="#contact" className="hover:underline">
            Contato
          </Link>
        </div>

        <Link
          href="https://github.com/Luiz-Hen-Reis"
          target="_blank"
          className="hover:animate-pulse"
        >
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/luiz-henrique-reis-barbosa/"
          target="_blank"
          className="hover:animate-pulse"
        >
          <Linkedin />
        </Link>
        <button
          onClick={toggleDarkMode}
          className="hover:animate-spin active:animate-ping"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <Link
          href="/files/cv.pdf"
          download="Luiz Henrique's CV"
          className="hidden sm:inline-block bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md transition duration-300 animate-pulse hover:animate-none hover:bg-yellow-400 active:animate-ping"
        >
          Baixar meu CV &darr;
        </Link>
        <button onClick={openModal} className="sm:hidden">
          <Menu />
        </button>
      </nav>
    </nav>
  );
}
