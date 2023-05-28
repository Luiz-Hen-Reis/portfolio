import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  download?: string;
  content: string;
  anchorTag?: boolean;
};

export default function Button({
  href,
  download,
  content,
  onClick,
  anchorTag,
}: Props) {
  return (
    <>
      {!anchorTag && (
        <input type="submit" value={content} className="cursor-pointer w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md lg:w-52 hover:bg-yellow-400/40 active:animate-ping" />
      )}
      {anchorTag && href && (
        <Link
          href={href}
          download={download ?? download}
          className="w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md"
          onClick={onClick}
        >
          {content}
        </Link>
      )}
    </>
  );
}
