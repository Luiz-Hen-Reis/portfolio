import CourseInfo from "../CourseInfor";
import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <section id="about" className="flex flex-col">
      <SectionTitle>
        Sobre <span className="text-yellow-400">Mim</span>
      </SectionTitle>

      <p className="text-sm text-zinc-400 lg:text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia in
        nisi maxime quas, odio, aliquam, laudantium pariatur amet saepe ipsam
        ab! Qui deserunt libero illo consequatur sapiente quibusdam soluta eius
        porro? Vero dicta reprehenderit necessitatibus corporis exercitationem
        enim pariatur facilis, illo quos repellat ipsum explicabo blanditiis
        magni, maiores reiciendis, minima ut eligendi? Dolor eaque soluta quos
        blanditiis illo, laboriosam, sunt totam illum dicta aperiam officia in
        deserunt nobis quibusdam, inventore praesentium doloribus veniam
        reprehenderit ipsam minus eius sequi ab temporibus corporis. Maxime
        eligendi nam animi laboriosam, aliquid incidunt necessitatibus excepturi
        ab unde odit aut! Debitis ea magni excepturi quia officiis itaque quidem
        alias maiores vero est! Numquam repudiandae corrupti voluptatum?
        Cupiditate quos officia facilis ea rem! Repellendus nam ducimus porro
        perferendis repudiandae provident earum possimus iusto facere nobis
        sapiente ipsam, veniam vero illum ab nulla beatae tempora ea, maiores
        rerum illo nesciunt quasi? Explicabo ad voluptates minus assumenda nulla
        eveniet hic mollitia blanditiis, vel, quam ea quibusdam rerum eaque.
        Quam rerum iusto dolore accusantium, cumque sequi aliquid eaque tenetur
        ipsum saepe natus id temporibus recusandae quas! Non ipsa, delectus
        cumque debitis minima aut placeat distinctio beatae unde, commodi
        corrupti numquam perferendis! Aspernatur, aliquid nemo? Ad cumque magnam
        corrupti adipisci modi.
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
        <CourseInfo
          src="/assets/b7web.png"
          alt="B7Web logo"
          title="B7Web - Formação Fullstack"
          period="Fevereiro de 2022/Fevereiro de 2023"
          bgColor
        />
        <CourseInfo
          src="/assets/logo-udemy.svg"
          alt="Udemy logo"
          title="Udemy Academy"
          period="Em andamento"
        />
      </div>
    </section>
  );
}
