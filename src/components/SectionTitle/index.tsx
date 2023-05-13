import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-3xl font-bold mt-16 mb-8 dark:text-white lg:text-6xl">
      {children}
    </h2>
  );
}
