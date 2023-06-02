"use client";

import {
  ContactForm,
  DynamicModal,
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
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const { listenToScrollEvent, scrollPosition } = useScrollPosition();

  useEffect(() => {
    listenToScrollEvent();
  }, []);

  return (
    <>
      <ProgressBar percent={scrollPosition} />
      <Wrapper>
        <DynamicModal />
        <Header />
        <main>
          <section>
            <Image
              src="/assets/me.jpg"
              width={400}
              height={400}
              alt="Luiz Henrique's picture"
              className="md:m-10 rounded-full shadow-md"
            />
          </section>
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
