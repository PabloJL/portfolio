"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { animate, motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-slate-200 ">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Pablo",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Software Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8">
            Welcome to my portfolio! Explore my journey through code and
            creativity.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/documents/CV.pdf"
              download="CV"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-4 place-content-center mt-10 lg:mt-0 mx-auto lg:place-content-start text-center relative inline-block"
        >
          <div className="mx-auto bg-gradient-to-b from-indigo-600 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[390px]  relative overflow-hidden  ">
            <Image
              src="/images/me.png"
              alt="me"
              className=" object-cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
