import Image from "next/image";

type Props = {
  img: string;
  title: string;
  alt: string;
}

export default function TechItem({ img, title, alt }: Props) {
  return (
    <li className="flex items-center gap-2 p-2 bg-yellow-400 rounded-md text-center">
        <Image src={img} width={20} height={20} alt={alt} className="mix-blend-multiply z-10" />
        <strong className="font-normal text-sm dark:text-white">{title}</strong>
      </li>
  )
}
