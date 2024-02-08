import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className=" text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        <Image
          src="/images/desk.png"
          alt="code"
          width={500}
          height={500}
          className=" rounded-2xl"
        ></Image>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 mt-10 lg:mt-0">
            About me
          </h2>
          <p className="text-base lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, voluptate qui. Expedita natus ea sunt eligendi, quae
            non corrupti animi ullam dicta aperiam cumque, consequatur incidunt
            nihil minima similique at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod, iste voluptas quam aspernatur illum
            molestiae sunt dolor obcaecati et temporibus perferendis pariatur,
            illo minima quos, placeat repellendus sed numquam optio.
          </p>
          <div className="flex mt-8 gap-3">
            <span className="font-semibold hover:text-white text-[#ADB7BE] border-b border-indigo-600">
              Skills
            </span>
            <span className="font-semibold hover:text-white text-[#ADB7BE] border-b border-indigo-600">
              Education
            </span>
            <span className="font-semibold hover:text-white text-[#ADB7BE] border-b border-indigo-600">
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
