"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext({} as DarkModeContextType);

export function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}
