"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <div className="flex gap-10">
        <ul className=" list-disc pl-2">
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js</li>
        </ul>
        <ul className=" list-disc pl-2">
          <li>SQL Server</li>
          <li>Java</li>
          <li>C#</li>
        </ul>
        <ul className=" list-disc pl-2">
          <li>C++</li>
          <li>Servicenow</li>
          <li>.NET</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="  pl-2">
        <li className=" list-disc">Bachelors in Computer Science at </li>
        <li>Instituto Tecnologico de Saltillo</li>
        <li>2017-2022</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className=" list-disc pl-2">
        <li>Lennox International</li>
        <li>Hexaware Technologies</li>
        <li>Eviden</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className=" text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        <Image
          src="/images/desk.png"
          alt="code"
          width={500}
          height={500}
          className=" rounded-2xl "
        ></Image>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-10 lg:mt-0">
            About me
          </h2>
          <p className="text-base lg:text-lg">
            I´m a a seasoned developer with three years of experience across
            various companies. Beyond the world of coding, you&apos;ll often
            find me immersed in my passions – from capturing moments through the
            lens of my camera to grooving to the beats of my favorite tunes.
            I&apos;m a love going to the gym everyday, and love the adrenaline
            rush of playing sports like padel. When I&apos;m not coding or
            breaking a sweat, you can catch me cheering for my favorite teams or
            unwinding at Top Golf with friends. Let&apos;s connect and share our
            passions!
          </p>
          <div className="flex mt-8 gap-3">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
