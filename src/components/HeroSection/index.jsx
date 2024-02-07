import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I&apos;m Pablo
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure
            ipsam quod molestiae neque voluptatum.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-content-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[390px] relative">
            <Image
              src="/images/dev.png"
              alt="developer image"
              className="absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={330}
              height={330}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
