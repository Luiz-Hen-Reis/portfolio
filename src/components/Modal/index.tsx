import { useModalContext } from "@/contexts/ModalContext";
import { X } from "lucide-react";
import Footer from "../Footer";

export default function Modal() {
  const { modalIsOpen, closeModal } = useModalContext();

  return (
    <>
      {modalIsOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 dark:bg-slate-800 z-50 p-6 sm:hidden">
          <header className="flex justify-between items-center">
            <h1>Luiz Henrique</h1>
            <button onClick={closeModal}>
              <X size={30} />
            </button>
          </header>
          <nav className="flex flex-col gap-6 justify-center items-center mt-12">
            <a
              href="/files/cv.pdf"
              download="Luiz Henrique's CV"
              className="w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md" onClick={closeModal}
            >
              Baixar meu CV &darr;
            </a>
            <a
              href="#formation"
              className="w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md" onClick={closeModal}
            >
              Formação
            </a>
            <a
              href="#projects"
              className="w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md" onClick={closeModal}
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md" onClick={closeModal}
            >
              Contato
            </a>
          </nav>
          <Footer />
        </div>
      )}
    </>
  );
}
