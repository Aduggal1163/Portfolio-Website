import StatSection from "./StatSection";
import React from "react";

function AboutSection() {
  return (
    <div>
      {/* Top half: Image and About */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Your Name"
            className="rounded-full w-40 h-40 object-cover border-4 border-blue-400"
          />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">Your Name</h2>
          <p className="text-gray-700">
            Enthusiastic developer passionate about building elegant interfaces and solving complex challenges.
            {/* Add more about yourself */}
          </p>
        </div>
      </div>
      {/* Bottom: Stats, Education, Skills */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
          <StatSection />
        </div>
        <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Education</h3>
          <p className="text-gray-700">
            Bachelor of Technology in Computer Science<br/>
            Example Institute, Graduation 2025
          </p>
        </div>
        <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
