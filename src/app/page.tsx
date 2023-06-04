"use client";

import {
  ContactForm,
  DynamicModal,
  Footer,
  MyJourney,
  Header,
  ProgressBar,
  Projects,
  Wrapper,
} from "@/components";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useEffect } from "react";

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
          <MyJourney />
          <Projects />
          <ContactForm />
          <Footer />
        </main>
      </Wrapper>
      <ToastContainer />
    </>
  );
}
