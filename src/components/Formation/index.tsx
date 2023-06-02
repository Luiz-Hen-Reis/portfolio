import CourseInfo from "../CourseInfo";
import SectionTitle from "../SectionTitle";

export default function Formation() {
  return (
    <section id="formation" className="flex flex-col lg:my-32 xl:mt-0">
      <SectionTitle>Formação</SectionTitle>

      <div className="flex flex-col md:flex-row lg:justify-between lg:items-start lg:gap-4 mt-4 border-l-4 border-yellow-400 md:border-l-0 md:border-t-4">
        <CourseInfo
          src="/assets/unip.svg"
          alt="UNIP logo"
          title="Bacharel em Ciências Contabeis"
          period="2019-2022"
          description="Experiência prática em deparmento fiscal: Simples Nacional, Lucro
            Presumido e Lucro Real"
        />

        <CourseInfo
          src="/assets/b7web.png"
          alt="B7Web logo"
          title="B7Web - Formação Fullstack"
          period="Fevereiro de 2022/Fevereiro de 2023"
          bgColor
          description="Principais tecnologias do mercado, tais como React, Next,
            Tailwind"
        />

        <CourseInfo
          src="/assets/youtube.svg"
          alt="Youtube logo"
          title="Youtube"
          period="Sempre aprendendo algo novo"
          description="Sempre descobrindo novas bibliotecas, mantendo-me atualizado
            no mercado da tecnologia e descobrindo novos macetes e artimanhas"
        />

        <CourseInfo
          src="/assets/logo-udemy.svg"
          alt="Udemy logo"
          title="Udemy Academy"
          period="Sempre aprendendo algo novo"
          description="Buscando adquirir novos conhecimentos a partir de diversos
            cursos na plataforma"
        />
      </div>
    </section>
  );
}
