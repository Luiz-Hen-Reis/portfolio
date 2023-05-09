"use client";

import Header from "@/components/Header";
import { useDarkModeContext } from "@/contexts/DarkModeContext";
import Image from "next/image";

export default function Home() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <div className="mx-6 py-2 xl:m-auto lg:max-w-7xl">
          <Header />

          <section id="about">
            <h2 className="text-3xl font-bold mt-16 mb-8 dark:text-white lg:text-6xl lg:mt-40">
              Sobre <span className="text-yellow-400">Mim</span>
            </h2>

            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              perspiciatis eligendi quia ut odio sint tempora iure, quis
              voluptates, architecto consectetur, quaerat nemo. Soluta numquam
              harum alias, quam in laborum.
            </p>

            <article className="flex items-center gap-4 my-4">
              <Image
                src="/assets/b7web.png"
                width={50}
                height={50}
                alt="B7Web logo"
                className="bg-slate-800 p-1 rounded"
              />

              <div className="flex flex-col gap-2">
                <strong>B7Web - Formação Fullstack</strong>
                <sub>Fevereiro de 2022/Fevereiro de 2023</sub>
              </div>
            </article>

            <article className="flex items-center gap-4 my-4">
              <Image
                src="/assets/logo-udemy.svg"
                width={50}
                height={50}
                alt="Udemy logo"
              />

              <div className="flex flex-col gap-2">
                <strong>Udemy Academy</strong>
                <sub>Em andamento</sub>
              </div>
            </article>


          </section>

          <section id="projects">
            <h2></h2>
          </section>
        </div>
      </div>
    </div>
  );
}
