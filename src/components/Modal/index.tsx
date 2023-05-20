import { useModalContext } from "@/contexts/ModalContext";

export default function Modal() {
  const { modalIsOpen, closeModal } = useModalContext();

  return (
    <>
      {modalIsOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 dark:bg-slate-800 z-50">
          Modal
          <button onClick={closeModal}>close</button>
        </div>
      )}
    </>
  );
}
