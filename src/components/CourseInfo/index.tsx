import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  period: string;
  bgColor?: boolean;
  description: string;
};

export default function CourseInfo({
  src,
  alt,
  title,
  period,
  bgColor = false,
  description,
}: Props) {
  return (
    <article className="flex items-center gap-4 md:flex-col flex-1 ml-[-.8rem] md:mt-[-.8rem]">
        <div className="border-8 border-yellow-400 rounded-full w-6 h-6">
          <div className="w-2 h-2 rounded-full bg-black"></div>
        </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 my-4 flex-1">
          <Image
            src={src}
            width={50}
            height={50}
            alt={alt}
            className={`${bgColor ? "bg-slate-800" : ""} p-1 rounded`}
          />

          <div className="flex flex-col gap-2">
            <strong>{title}</strong>
            <sub className="text-xs">{period}</sub>
          </div>
        </div>
        <p className="text-sm lg:text-base">
          <span className="text-black">&#187;</span> {description}
        </p>
      </div>
    </article>
  );
}
