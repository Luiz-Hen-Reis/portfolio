import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  download?: string;
  content: string;
  anchorTag?: boolean;
  isLoading?: boolean;
};

export default function Button({
  href,
  download,
  content,
  onClick,
  anchorTag,
  isLoading,
}: Props) {
  return (
    <>
      {!anchorTag && (
        <>
          {!isLoading && (
            <input
              type="submit"
              value={content}
              className="cursor-pointer w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md lg:w-52 hover:bg-yellow-400/40"
            />
          )}
          {isLoading && (
            <input
              type="submit"
              value={content}
              disabled
              className="cursor-pointer w-full text-center bg-yellow-300 p-3 rounded dark:text-white text-sm shadow-md lg:w-52 hover:bg-yellow-400/40 disabled:bg-yellow-700/40"
            />
          )}
        </>
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
