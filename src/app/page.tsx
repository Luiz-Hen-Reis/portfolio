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
import { useEffect } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Home() {
  const { listenToScrollEvent, scrollPosition } = useScrollPosition();

  useEffect(() => {
    listenToScrollEvent();

    const intersectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.target.classList.toggle('show', entry.isIntersecting))
    })

    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(el => intersectObserver.observe(el))
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
