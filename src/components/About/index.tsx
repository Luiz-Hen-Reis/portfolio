import CourseInfo from "../CourseInfo";
import SectionTitle from "../SectionTitle";

export default function Formation() {
  return (
    <section id="formation" className="flex flex-col lg:my-32 xl:mt-0">
      <SectionTitle>Formação</SectionTitle>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-4 mt-4">
        <div className="flex-1">
          <CourseInfo
            src="/assets/b7web.png"
            alt="B7Web logo"
            title="B7Web - Formação Fullstack"
            period="Fevereiro de 2022/Fevereiro de 2023"
            bgColor
          />
          <strong className="text-zinc-500">
            &#187; Principais tecnologias do mercado, tais como React, Next,
            Tailwind
          </strong>
        </div>
        <div className="flex-1">
          <CourseInfo
            src="/assets/youtube.svg"
            alt="Youtube logo"
            title="Youtube"
            period="Sempre aprendendo algo novo"
          />
          <strong className="text-zinc-500">
            &#187; Sempre descobrindo novas bibliotecas, mantendo-me atualizado
            no mercado da tecnologia e descobrindo novos macetes e artimanhas
          </strong>
        </div>
        <div className="flex-1">
          <CourseInfo
            src="/assets/logo-udemy.svg"
            alt="Udemy logo"
            title="Udemy Academy"
            period="Sempre aprendendo algo novo"
          />
          <strong className="text-zinc-500">
            &#187; Buscando adquirir novos conhecimentos a partir de diversos
            cursos na plataforma
          </strong>
        </div>
      </div>
    </section>
  );
}
