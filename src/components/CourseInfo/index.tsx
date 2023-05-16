import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  period: string;
  bgColor?: boolean;
};

export default function CourseInfo({
  src,
  alt,
  title,
  period,
  bgColor = false,
}: Props) {
  return (
    <article className="flex items-center gap-4 my-4 flex-1">
      <Image
        src={src}
        width={50}
        height={50}
        alt={alt}
        className={`${bgColor ? "bg-slate-800" : ''} p-1 rounded`}
      />

      <div className="flex flex-col gap-2">
        <strong>{title}</strong>
        <sub className="text-xs">{period}</sub>
      </div>
    </article>
  );
}
