import InputField from "../InputField";
import SectionTitle from "../SectionTitle";

export default function ContactForm() {
  return (
    <section className="mb-32" id="contact">
      <SectionTitle>
        Mande-me uma <span className="text-yellow-400">mensagem</span>
      </SectionTitle>

      <form className="flex flex-col gap-4">
        <InputField
          id="name"
          label="Seu Nome"
          placeholder="Seu nome..."
          minLength={5}
        />

        <InputField
          id="subject"
          label="Assunto"
          placeholder="Assunto..."
          minLength={5}
        />

        <div className="flex flex-col">
          <label htmlFor="message">Escreva sua mensagem</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Sua mensagem..."
            className="outline-none shadow-md p-2 rounded lg:w-3/4 dark:text-black dark:bg-slate-200"
          />
        </div>

        <button className="w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md lg:w-52 hover:bg-yellow-400/40 active:animate-ping">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
