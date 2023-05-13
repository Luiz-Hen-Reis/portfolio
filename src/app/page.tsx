"use client";

import { About, Header } from "@/components";
import SectionTitle from "@/components/SectionTitle";
import { useDarkModeContext } from "@/contexts/DarkModeContext";
import projects from "@/utils/projects";
import Image from "next/image";

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
              <SectionTitle>
                <span className="text-yellow-400">Meus</span> projetos
              </SectionTitle>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <article className="flex flex-col justify-center w-full bg-slate-500 mb-4 p-2 rounded" key={project.title}>
                    <header>
                      <h3>{project.title}</h3>
                    </header>
                    <a href={project.projectLink} target="_blank">
                      <Image
                        src={project.img}
                        alt={project.alt}
                        width={500}
                        height={200}
                      />
                    </a>
                    <footer>
                      <a href={project.projectLink}></a>
                      <a href={project.githubLink}></a>
                    </footer>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
