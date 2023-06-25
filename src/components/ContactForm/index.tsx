"use client"

import sendContactForm from "@/server/sendContactForm";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDarkModeContext } from "@/contexts/DarkModeContext";
import { useState } from "react";

type FormValues = {
  name: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode } = useDarkModeContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await sendContactForm(data);
      reset();
      setIsLoading(false);

      toast.success("Mensagem enviada com sucesso!  😁", {
        position: "top-center",
        theme: `${darkMode ? "dark" : "light"}`,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(`${error}`);
    }
  });

  return (
    <section className="mb-32 animate-on-scroll" id="contact">
      <SectionTitle>
        Mande-me uma <span className="text-yellow-400">mensagem</span>
      </SectionTitle>

      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">
            Seu nome <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            disabled={isLoading}
            className={`h-12 p-2 rounded outline-none shadow-md lg:w-2/4 dark:text-black dark:bg-slate-200 ${errors.name?.message ? "border border-red-600" : ""
              }`}
            placeholder="seu nome..."
            {...register("name", {
              required: { value: true, message: "Informe seu nome *" },
            })}
          />
          <p className="text-sm text-red-600">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject">
            Assunto <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subject"
            disabled={isLoading}
            className={`h-12 p-2 rounded outline-none shadow-md lg:w-2/4 dark:text-black dark:bg-slate-200 ${errors.subject?.message ? "border border-red-600" : ""
              }`}
            placeholder="Assunto..."
            {...register("subject", {
              required: { value: true, message: "Informe o assunto *" },
            })}
          />
          <p className="text-sm text-red-600">{errors.subject?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Escreva sua mensagem <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            cols={30}
            rows={10}
            placeholder="Sua mensagem..."
            disabled={isLoading}
            className={`outline-none shadow-md p-2 rounded lg:w-3/4 dark:text-black dark:bg-slate-200 ${errors.message?.message ? "border border-red-600" : ""
              }`}
            {...register("message", {
              required: { value: true, message: "Escreva uma mensagem *" },
            })}
          />
          <p className="text-sm text-red-600">{errors.message?.message}</p>
        </div>

        {!isLoading && <Button content="Enviar" />}
        {isLoading && <Button content="Enviando..." isLoading />}
      </form>
    </section>
  );
}
