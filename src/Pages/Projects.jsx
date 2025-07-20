import React from "react";
import ProjectCard from "../Components/ProjectCard";
function Projects() {
  const projects = [
    {
      image: "https://source.unsplash.com/featured/400x300?website",
      title: "Personal Blog Website",
      desc: "A fast, modern blog platform built with React and Node.js, featuring Markdown support and authentication."
    },
    {
      image: "https://source.unsplash.com/featured/400x300?app",
      title: "Mobile To-Do App",
      desc: "A cross-platform, offline-capable to-do list app using React Native with syncing and push notifications."
    },
    {
      image: "https://source.unsplash.com/featured/400x300?dashboard",
      title: "Analytics Dashboard",
      desc: "Interactive dashboard for visualizing business metrics, created with D3.js and REST API integration."
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        My Projects
      </h1>
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
}

export default Projects;
