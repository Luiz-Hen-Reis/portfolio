import "./globals.css";
import { Source_Code_Pro } from "next/font/google";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { ModalProvider } from "@/contexts/ModalContext";

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
      <body className={`${sourceCodePro.className} bg-slate-200`}>
        <DarkModeProvider>
          <ModalProvider>{children}</ModalProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
