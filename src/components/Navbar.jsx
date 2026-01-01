import Link from "next/link";
import { LuUser } from "react-icons/lu";

export default function NavbarComponent() {
  return (
    <>
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="size-9 btn p-1 rounded-full border-primary/15"
          >
            <LuUser className="size-5 text-primary" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-md z-30 w-52 p-2 shadow-sm border border-neutral/5"
          >
            <li>
              <Link href={"/auth/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/auth/register"}>Register</Link>
            </li>
            <li className="bg-primary rounded-md text-primary-content">
              <Link href={"https://github.com/3z4z"}>Join as Developer</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="md:flex hidden items-center gap-5">
        <Link
          href={"/auth/login"}
          className="link link-hover text-neutral hover:text-primary"
        >
          Login
        </Link>
        <Link
          href={"/auth/register"}
          className="link link-hover text-neutral hover:text-secondary"
        >
          Register
        </Link>
        <Link
          href={"https://github.com/3z4z"}
          className="btn btn-primary rounded-full"
        >
          Join as Developer
        </Link>
      </nav>
    </>
  );
}
