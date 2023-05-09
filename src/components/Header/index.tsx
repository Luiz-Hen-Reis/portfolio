import Image from "next/image";
import Navbar from "../Navbar";
import TechList from "../TechList";

export default function Header() {
  return (
    <header id="home" className="flex flex-col py-6 lg:h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mt-16 dark:text-white lg:text-6xl lg:mt-40">
          Olá, sou Luiz Henrique
        </h1>
        <p className="text-justify text-gray-600 dark:text-gray-400 mt-6 font-serif text-2xl lg:mx-44">
          I am a UI Engineer at Google, where I design and develop user-centered
          interfaces for cutting-edge technology products. I work with a
          talented team to create visually appealing and intuitive designs that
          enhance user experience. I am passionate about using technology to
          create beautiful and functional designs that solve real-world
          problems.
        </p>
        <TechList />
      </div>
    </header>
  );
}
