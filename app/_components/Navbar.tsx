import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";
import { navLinks } from "../_constant";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-7xl">
        <div className="flex items-center justify-between py-4 ">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute w-full top-0 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md z-40"></div>

              <Image
                src={logoImage}
                alt="logo"
                className="h-11 w-11 relative z-50"
              />
            </div>
            <span className="hidden md:inline text-2xl text-white/95 font-bold">
              Trak<span>It.</span>
            </span>
          </Link>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon />
          </div>

          <nav className="hidden sm:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-opacity-50 hover:text-opacity-100 transition"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-white py-2 px-4 rounded-lg font-medium hover:bg-[#ba83f7] hover:text-black/90 transition">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
