"use client";

import { useModalContext } from "@/contexts/ModalContext";
import { X } from "lucide-react";
import Footer from "../Footer";
import Button from "../Button";
import { usePathname } from "next/navigation";

export default function Modal() {
  const { modalIsOpen, closeModal } = useModalContext();
  const pathname = usePathname();

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
            <Button
              content="Baixar meu CV &darr;"
              href="/files/cv.pdf"
              onClick={closeModal}
              anchorTag
              download="Luiz Henrique's CV"
            />
            {pathname === "/" && (
              <Button
                content="Sobre mim"
                href="/about"
                onClick={closeModal}
                anchorTag
              />
            )}
            {pathname === "/about" && (
              <Button content="Home" href="/" onClick={closeModal} anchorTag />
            )}
            <Button
              content="Formação"
              href="#formation"
              onClick={closeModal}
              anchorTag
            />
            <Button
              content="Projetos"
              href="#projects"
              onClick={closeModal}
              anchorTag
            />
            <Button
              content="Contato"
              href="#contact"
              onClick={closeModal}
              anchorTag
            />
          </nav>
          <Footer />
        </div>
      )}
    </>
  );
}
