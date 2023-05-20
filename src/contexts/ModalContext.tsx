"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ModalContextType = {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type Props = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
