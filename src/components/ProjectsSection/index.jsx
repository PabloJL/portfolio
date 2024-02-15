"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 2,
    title: "Photography Website",
    description: "Project 2 Description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Project 3 Description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 4,
    title: "Food Ordering Website",
    description: "Project 4 Description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    git: "/",
    preview: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Project 5 Description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 6,
    title: "Full-Stack Roadmap",
    description: "Project 6 Description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
];

function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleFilterChange = (newTag) => {
    setFilter(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(filter)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleFilterChange}
          name="All"
          isSelected={filter === "All"}
        />
        <ProjectTag
          onClick={handleFilterChange}
          name="Web"
          isSelected={filter === "Web"}
        />
        <ProjectTag
          onClick={handleFilterChange}
          name="Mobile"
          isSelected={filter === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitURL={project.git}
              previewUrl={project.preview}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsSection;
