import { FolderSymlink, Github, Globe } from 'lucide-react'
import SectionTitle from "@/components/SectionTitle";
import TechItem from "@/components/TechItem";
import projects from '@/utils/projects';

export default function Projects() {
  return (
    <section id="projects">
              <SectionTitle>
                <span className="text-yellow-400">Meus</span> projetos
              </SectionTitle>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-white">
                {projects.map((project) => (
                  <article
                    className="flex flex-col justify-center gap-2 bg-zinc-400 dark:bg-zinc-700 px-2 py-4 rounded shadow-lg group"
                    key={project.title}
                  >
                    <header>
                      <h3>{project.title}</h3>
                    </header>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      className="relative"
                    >
                      <img
                        src={project.img}
                        alt={project.alt} 
                        className="rounded"
                      />
                      <div className="absolute hidden group-hover:flex items-center justify-center group-hover:bg-slate-700/60 top-0 left-0 right-0 bottom-0 active:animate-pulse">
                        <FolderSymlink size={30} />
                      </div>
                    </a>
                    <footer className="flex items-center justify-between mt-2">
                      <div>
                        <ul className="flex items-center gap-1 flex-wrap">
                          {project.techs.map((tech, index) => (
                            <TechItem title={tech.title} alt={tech.alt} small key={index} />
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href={project.projectLink} className="hover:animate-pulse">
                          <Github />
                        </a>
                        <a href={project.githubLink} className="hover:animate-pulse">
                          <Globe />
                        </a>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </section>
  )
}
