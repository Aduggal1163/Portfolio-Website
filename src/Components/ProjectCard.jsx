import React from "react";
function ProjectCard({ image, title, desc, github, live }) {
  return (
    <div className="flex flex-col md:flex-row text-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:w-1/3 w-full">
        <img src={image} alt={title} className="object-cover h-48 md:h-full w-full" />
      </div>
      <div className="md:w-2/3 w-full p-6">
        <h2 className="text-4xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-white text-lg">{desc}</p>
         <div className="flex gap-4 p-4 ml-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black border border-gray-600 text-white text-sm rounded hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
          >
            Live Demo
          </a>
        )}
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;
