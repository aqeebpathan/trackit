"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LogoTickerImages } from "../_constant";

const LogoTicker = () => {
  return (
    <div className="bg-black text-white pt-8 pb-[72px] sm:pb-24">
      <div className="container max-w-6xl">
        <h2 className="text-lg sm:text-xl text-center text-white/70">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 relative">
          <motion.div
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            className="flex flex-nowrap gap-16 "
          >
            {[...LogoTickerImages, ...LogoTickerImages].map((logo, index) => (
              <div key={index} className="flex-none">
                <Image src={logo.src} alt={logo.alt} className="h-8 w-auto" />
              </div>
            ))}
          </motion.div>
          <div className="before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
