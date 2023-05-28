"use client";

import {
  ContactForm,
  Footer,
  Formation,
  Header,
  Modal,
  ProgressBar,
  Projects,
  Wrapper,
} from "@/components";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Home() {
  const { listenToScrollEvent, scrollPosition } = useScrollPosition();

  listenToScrollEvent();

  return (
    <>
      <ProgressBar percent={scrollPosition} />
      <Wrapper>
        <Modal />
        <Header />
        <main>
          <Formation />
          <Projects />
          <ContactForm />
          <Footer />
        </main>
      </Wrapper>
      <ToastContainer />
    </>
  );
}
