"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import helixImage from "@/assets/images/helix2.png";
import emojistarIamge from "@/assets/images/emojistar.png";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 text-center overflow-clip"
      ref={containerRef}
    >
      <div className="container max-w-xl relative ">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=""
            className="absolute top-28 left-[calc(100%+36px)] w-56"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojistarIamge}
            alt=""
            className="absolute -top-[25px] right-[calc(100%+24px)] z-50 w-52"
          />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="h-12 bg-white/20 rounded-lg px-5 font-medium outline-none placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button
            type="button"
            className="bg-white text-black h-12 rounded-lg px-5"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
