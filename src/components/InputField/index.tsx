type Props = {
    label: string;
    placeholder: string;
    minLength?: number;
    id: string;
}

export default function InputField({ label, placeholder, minLength, id }: Props) {
  return (
    <div className="flex flex-col">
          <label htmlFor={id}>{label}</label>
          <input
            type="text"
            id={id}
            className="h-12 p-2 rounded outline-none shadow-md lg:w-2/4 dark:text-black dark:bg-slate-200"
            placeholder={placeholder}
            minLength={minLength}
          />
        </div>
  )
}
