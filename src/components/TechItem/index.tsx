import Image from "next/image";

type Props = {
  img: string;
  title: string;
  alt: string;
}

export default function TechItem({ img, title, alt }: Props) {
  return (
    <li className="flex items-center gap-2 p-2 bg-yellow-400 rounded-md text-center shadow-md group hover:scale-105">
        <Image src={img} width={20} height={20} alt={alt} className="mix-blend-multiply z-10 group-hover:animate-spin" />
        <strong className="font-normal text-sm dark:text-white group-hover:underline">{title}</strong>
      </li>
  )
}
