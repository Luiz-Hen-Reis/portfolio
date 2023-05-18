import { Github, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className=" my-8 flex justify-between items-center">
      <sub>Copyright &#169;</sub>
      <nav className="flex items-center gap-2">
        <a
          href="https://github.com/Luiz-Hen-Reis"
          target="_blank"
          className="hover:animate-pulse"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/luiz-henrique-reis-barbosa/"
          target="_blank"
          className="hover:animate-pulse"
        >
          <Linkedin />
        </a>
      </nav>
    </footer>
  );
}
