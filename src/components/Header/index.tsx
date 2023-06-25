import Image from "next/image";
import Navbar from "../Navbar";
import TechList from "../TechList";

export default function Header() {
  return (
    <header id="home" className="flex flex-col lg:h-[80vh]">
      <Navbar />
      <div className="flex flex-col mt-10 animate-on-scroll">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex items-center justify-center gap-4">
            <Image
              src="/assets/me.jpg"
              width={400}
              height={400}
              alt="Luiz Henrique's picture"
              className="md:m-10 rounded-full shadow-2xl float-left shadow-yellow-400"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mt-16 mb-8 dark:text-white lg:text-6xl">Luiz Henrique</h1>
            <p className="text-md mb-4">💻 Desenvolvendo interfaces e APIs com Javascript/Typescript desde 2021.</p>
            <p className="text-md mb-4">👨‍🎓 Bacharel em Ciências Contábeis.</p>
            <p className="text-md mb-4">💡 Interesse em sistemas que facilitam o dia-a-dia dos profissionais do ramo da contabilidade.</p>
            <p className="text-md mb-4">🚀 Buscando uma oportunidade para atuar como desenvolvedor.</p>
          </div>
        </div>
        <TechList />
      </div>
    </header>
  );
}
