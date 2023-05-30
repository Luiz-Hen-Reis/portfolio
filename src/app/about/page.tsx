"use client";

import { DynamicModal, Footer, Navbar, ProgressBar, Wrapper } from "@/components";
import SectionTitle from "@/components/SectionTitle";
import useScrollPosition from "@/hooks/useScrollPosition";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  const { listenToScrollEvent, scrollPosition } = useScrollPosition();

  useEffect(() => {
    listenToScrollEvent();
  }, []);

  return (
    <>
      <ProgressBar percent={scrollPosition} />

      <Wrapper>
        <Navbar secondaryPage />
        <DynamicModal />
        <div className="text-center">
          <SectionTitle>
            Minha <span className="text-yellow-400">Jornada</span>
          </SectionTitle>
        </div>
        <main>
          <section>
            <Image
              src="/assets/me.jpg"
              width={400}
              height={400}
              alt="Luiz Henrique's picture"
              className=" md:float-left md:m-10 rounded-full shadow-md"
            />
            <p className="mt-10">
              Minha jornada começou ainda na faculdade de ciências contábeis,
              durante um curso feito na udemy de Excel. Eu estava aprendendo
              sobre fórmulas, e aquilo instigava minha curiosidade de uma
              maneira que eu sempre queria aprender mais e mais.
            </p>

            <p className="mt-10">
              Sempre gostei e gosto de utilizar planilhas do excel para me
              organizar, em meu atual emprego como contador utilizei essa
              ferramenta para criar uma interface onde é possível acessar outros
              documentos.
            </p>

            <p className="mt-10">
              Mais tarde, navegando pela internet, me deparei com um vídeo
              falando sobre programação e como essa área está evoluindo. Bom,
              decidi pesquisar mais a fundo sobre o assunto e vendo alguns
              vídeos, lendo blogs achei naquilo algo tão parecido com o que eu
              fazia no excel, só que de uma maneira mais elaborada
            </p>

            <p className="mt-10">
              Rapidamente comecei a estudar sobre o assunto, adquiri alguns
              cursos na Udemy e desenvolvi minhas primeiras páginas estáticas,
              somente com HTML e CSS, confesso que não eram páginas tão bonitas,
              mas foram feitas por mim e tenho muito orgulho delas.
            </p>

            <p className="mt-10">
              Após um período estudando somente HTML e CSS, eu queria algo a
              mais, queria descobrir como implementar inteligência àquelas
              páginas. Então, novamente, fui até a Udemy e adquiri mais um
              curso, dessa vez de Javascript e lógica de programação. Com este
              curso dei meus primeiros passos no javascript, resolvia vários
              problemas de lógicas e foi assim durante quase 2 meses
            </p>

            <p className="mt-10">
              Depois destes dois meses, eu já sábia qual era minha paixão e no
              que eu queria me dedicar, então fui atrás de algum curso que
              poderia me fornecer mais conhecimentos específicos e foi assim que
              conheci a B7web. Dentro da plataforma foi onde eu realmente me
              desenvolvi, aprendi sobre as tecnologias com maior tendência no
              mercado, como ReactJS, NextJS, TailwindCSS etc. e desenvolvi
              projetos tanto próprios, quanto tutoriais dentro do curso.
            </p>

            <p className="mt-10">
              Enfim chegou 2023, terminei minha faculdade de ciências contábeis
              e fui contratado como CLT no escritório onde eu já trabalhava como
              estagiário. Ainda até os dias de hoje, dedico minhas horas
              noturnas aos estudos de programação, atualmente estou focando
              minhas energias mais na parte prática, utilizando do que eu já
              aprendi para criar alguns projetos pessoais.
            </p>

            <p className="mt-10">
              Mas, para este ano, ainda almejo algo maior, quero atuar como
              desenvolvedor em alguma empresa, quero dedicar totalmente meu dia
              à programação, creio que assim irei evoluir muito mais rápido.
            </p>
          </section>

          <section>
            <SectionTitle>
              <span className="text-yellow-400">Soft</span> Skills
            </SectionTitle>
          </section>
        </main>

        <Footer />
      </Wrapper>
    </>
  );
}
