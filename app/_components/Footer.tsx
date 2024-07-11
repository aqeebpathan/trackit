import Link from "next/link";

import XIcon from "@/assets/icons/Vector.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/10">
      <div className="container max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            @24, Developed By{" "}
            <Link
              href="https://aqeeb.dev"
              className="hover:text-white transition"
            >
              aqeeb.dev
            </Link>
          </div>
          <ul className="flex justify-center items-center gap-6 ">
            <li>
              <Link href="#">
                <XIcon />
              </Link>
            </li>
            <li>
              <Link href="#">
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link href="#">
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link href="#">
                <YoutubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
