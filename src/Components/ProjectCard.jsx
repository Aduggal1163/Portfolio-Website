import React from "react";
function ProjectCard({ image, title, desc }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:w-1/3 w-full">
        <img src={image} alt={title} className="object-cover h-48 md:h-full w-full" />
      </div>
      <div className="md:w-2/3 w-full p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
