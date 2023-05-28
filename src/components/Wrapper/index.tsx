import { useDarkModeContext } from "@/contexts/DarkModeContext";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Wrapper({ children }: Props) {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-white">
        <div className="mx-6 py-6 xl:m-auto lg:max-w-7xl">{children}</div>
      </div>
    </div>
  );
}
