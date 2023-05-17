import Navbar from "../Navbar";
import TechList from "../TechList";

export default function Header() {
  return (
    <header id="home" className="flex flex-col py-6 lg:h-[80vh]">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mt-14 dark:text-white lg:text-6xl lg:mt-40 animate-bounce transition duration-300 hover:underline">
          Olá, sou Luiz Henrique
        </h1>
        <p className="text-justify text-gray-600 dark:text-gray-400 mt-6 font-serif text-2xl lg:mx-44">
          Sou um desenvolvedor em formação Fullstack que busca sempre se
          manter atualizado com as novas tecnologias e demandas do mercado.
          Focado em criar aplicações onde o produto final seja pensado
          exclusivamente no cliente/usuário final.
        </p>
        <TechList />
      </div>
    </header>
  );
}
