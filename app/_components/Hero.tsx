"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ArrowRIcon from "@/assets/icons/arrow-r.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:pt-24 sm:pb-40 relative overflow-clip">
      <div className="container relative z-50">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here{" "}
            </span>{" "}
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowRIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task
              <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline cursor-move"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt=""
                height={200}
                width={200}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute top-[56px] left-[498px] hidden sm:inline cursor-move"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt=""
                height={200}
                width={200}
                draggable={false}
                className="max-w-none"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-[#ba83f7] hover:text-black/90 transition">
            Get for free
          </button>
        </div>
      </div>

      <div className="absolute h-[500px] w-[1000px] sm:w-[1536px] sm:h-[768px] lg:w-[2750px] lg:h-[1000px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-184px)] z-10"></div>
    </div>
  );
};

export default Hero;
