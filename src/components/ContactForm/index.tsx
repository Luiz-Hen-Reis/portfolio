import sendContactForm from "@/server/sendContactForm";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDarkModeContext } from "@/contexts/DarkModeContext";

type FormValues = {
  name: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { darkMode } = useDarkModeContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const handleSubmitForm = handleSubmit(async (data) => {
    await sendContactForm(data);

    setValue("name", "");
    setValue("subject", "");
    setValue("message", "");
    toast.success("Mensagem enviada com sucesso!  😁", {
      position: "top-center",
      theme: `${darkMode ? "dark" : "light"}`,
    });
  });

  return (
    <section className="mb-32" id="contact">
      <SectionTitle>
        Mande-me uma <span className="text-yellow-400">mensagem</span>
      </SectionTitle>

      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Seu nome</label>
          <input
            type="text"
            id="name"
            className={`h-12 p-2 rounded outline-none shadow-md lg:w-2/4 dark:text-black dark:bg-slate-200 ${
              errors.name?.message ? "border border-red-600" : ""
            }`}
            placeholder="seu nome..."
            {...register("name", {
              required: { value: true, message: "Informe seu nome *" },
            })}
          />
          <p className="text-sm text-red-600">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            id="subject"
            className={`h-12 p-2 rounded outline-none shadow-md lg:w-2/4 dark:text-black dark:bg-slate-200 ${
              errors.subject?.message ? "border border-red-600" : ""
            }`}
            placeholder="Assunto..."
            {...register("subject", {
              required: { value: true, message: "Informe o assunto *" },
            })}
          />
          <p className="text-sm text-red-600">{errors.subject?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Escreva sua mensagem</label>
          <textarea
            id="message"
            cols={30}
            rows={10}
            placeholder="Sua mensagem..."
            className={`outline-none shadow-md p-2 rounded lg:w-3/4 dark:text-black dark:bg-slate-200 ${
              errors.message?.message ? "border border-red-600" : ""
            }`}
            {...register("message", {
              required: { value: true, message: "Escreva uma mensagem *" },
            })}
          />
          <p className="text-sm text-red-600">{errors.message?.message}</p>
        </div>

        <Button content="Enviar" />
      </form>
    </section>
  );
}
