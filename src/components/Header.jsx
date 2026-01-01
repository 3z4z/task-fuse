import Image from "next/image";
import NavbarComponent from "./Navbar";

export default function HeaderComponent() {
  return (
    <nav className="px-4 py-3 shadow bg-base-100 flex justify-between">
      <div className="flex gap-2 items-center">
        <figure className="relative w-9 h-9">
          <Image src={"/logo.png"} alt="" fill />
        </figure>
        <p className="font-bold text-xl">
          <span className="me-px text-primary">Task</span>
          <span className="text-neutral">Fuse</span>
        </p>
      </div>

      <NavbarComponent />
    </nav>
  );
}
