import "./globals.css";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: "variable",
});


export const metadata = {
  title: "Luiz Henrique's Portfólio",
  description: "My portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${sourceCodePro.className} bg-slate-200 selection:bg-yellow-400 overflow-x-hidden`}>
        <DarkModeProvider>
          <ModalProvider>{children}</ModalProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
