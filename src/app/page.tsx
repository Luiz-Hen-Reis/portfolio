"use client";

import {
  ContactForm,
  Footer,
  Formation,
  Header,
  Modal,
  ProgressBar,
  Projects,
} from "@/components";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { useDarkModeContext } from "@/contexts/DarkModeContext";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Home() {
  const { darkMode } = useDarkModeContext();
  const { listenToScrollEvent, scrollPosition } = useScrollPosition();

  listenToScrollEvent();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <ProgressBar percent={scrollPosition} />
        <Modal />
        <div className="mx-6 py-2 xl:m-auto lg:max-w-7xl">
          <Header />
          <main>
            <Formation />
            <Projects />
            <ContactForm />
            <Footer />
          </main>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
