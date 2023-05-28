"use client";

import { Footer, Modal, Navbar, Wrapper } from "@/components";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <Wrapper>
      <Navbar secondaryPage />
      <Modal />
      <SectionTitle>
        Minha <span className="text-yellow-400">Jornada</span>
      </SectionTitle>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        doloremque magni rem odit soluta eligendi sequi perspiciatis blanditiis
        nobis quos libero, nemo porro ea eaque molestiae nam quas, et fugiat.
      </p>
      <Footer />
    </Wrapper>
  );
}
