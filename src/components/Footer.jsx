import Image from "next/image";
import Container from "./Container";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterComponent() {
  const footerLinks = [
    { icon: FaFacebookF, path: "https://www.facebook.com/" },
    { icon: FaXTwitter, path: "https://www.x.com/" },
    { icon: FaInstagram, path: "https://www.instagram.com/" },
  ];

  return (
    <footer className="bg-base-300 py-20 mt-24">
      <Container>
        <aside className="flex items-center justify-center flex-col text-center mb-6 gap-3">
          <figure className="relative w-16 h-16">
            <Image src={"/logo.png"} alt="" fill />
          </figure>
          <p className="font-bold">
            <span className="text-primary text-xl">Task Fuse Inc.</span>
            <br />
            Reliable tasks. Transparent payments.
          </p>
          <p className="text-neutral">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav className="flex items-center justify-center gap-4">
          {footerLinks.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="size-9 rounded-full border border-neutral/10 flex items-center justify-center transition-all hover:bg-secondary group"
            >
              <link.icon className="size-4.5 text-neutral transition-all group-hover:text-base-100" />
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
