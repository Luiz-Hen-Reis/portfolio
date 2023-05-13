import TechItem from "../TechItem";
import techs from "@/utils/techList";

export default function TechList() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 mt-12 lg:mx-24">
      {techs.map((tech) => (
        <TechItem
          img={tech.img}
          title={tech.title}
          alt={tech.alt}
          key={tech.title}
        />
      ))}
    </ul>
  );
}
