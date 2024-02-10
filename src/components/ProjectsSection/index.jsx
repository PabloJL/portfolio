import React from "react";
import ProjectCard from "../ProjectCard";

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
    tag: ["All", "Web"],
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
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitURL={project.git}
            previewUrl={project.preview}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
