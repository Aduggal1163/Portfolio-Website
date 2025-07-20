import React,{useState} from "react";
import { FaLinkedin, FaGithub, FaCode, FaUserGraduate, FaLaptopCode, FaChartBar } from "react-icons/fa";
import StatSection from './StatSection.jsx'
function AboutSection() {
  const [activeTab, setActiveTab] = useState("education");
  const navCodeSnippets = [
    "nav.render()",
    "{ active: true }",
    'route: "/"',
    "onClick()",
    "useState()",
  ];

  return (
    <>
      <div
        className="p-10 w-full relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
          minHeight: "80px",
          border: "none",
          borderRadius: "none",
        }}
      >
        {/* Background animated elements - matching home page */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Animated geometric shapes */}
          <div
            className="absolute opacity-15 animate-pulse"
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(45deg, #00d4aa 0%, #00a8ff 100%)",
              borderRadius: "50%",
              top: "20%",
              left: "8%",
              animation: "navFloat 20s infinite linear",
            }}
          ></div>

          <div
            className="absolute opacity-10 animate-pulse"
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(45deg, #ff6b6b 0%, #ee5a52 100%)",
              borderRadius: "8px",
              top: "10%",
              right: "15%",
              transform: "rotate(45deg)",
              animationDelay: "-5s",
              animation: "navFloat 20s infinite linear",
            }}
          ></div>

          <div
            className="absolute opacity-15 animate-pulse"
            style={{
              width: "35px",
              height: "35px",
              background: "linear-gradient(45deg, #4ecdc4 0%, #44a08d 100%)",
              borderRadius: "12px",
              bottom: "15%",
              left: "25%",
              animationDelay: "-10s",
              animation: "navFloat 20s infinite linear",
            }}
          ></div>

          <div
            className="absolute opacity-10 animate-pulse"
            style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)",
              borderRadius: "50%",
              top: "30%",
              right: "25%",
              animationDelay: "-7s",
              animation: "navFloat 20s infinite linear",
            }}
          ></div>

          {/* Floating code snippets */}
          {navCodeSnippets.map((snippet, index) => (
            <div
              key={index}
              className="absolute text-green-400 font-mono text-xs opacity-20 animate-pulse whitespace-nowrap"
              style={{
                top: `${20 + Math.random() * 40}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${index * 0.8}s`,
                animation: "code-float-nav 30s infinite linear",
              }}
            >
              {snippet}
            </div>
          ))}

          {/* Binary rain effect */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blue-400 font-mono text-xs opacity-10"
                style={{
                  left: `${i * 12}%`,
                  animation: `binary-rain-nav ${2 + Math.random() * 2
                    }s infinite linear`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>

          {/* Programming symbols */}
          <div
            className="absolute text-cyan-400 text-lg opacity-20 animate-pulse font-mono"
            style={{ top: "25%", left: "5%" }}
          >
            {"</"}
          </div>
          <div
            className="absolute text-yellow-400 text-sm opacity-20 animate-pulse font-mono"
            style={{ top: "60%", right: "8%", animationDelay: "1s" }}
          >
            {"&&"}
          </div>
          <div
            className="absolute text-purple-400 text-lg opacity-20 animate-pulse font-mono"
            style={{ top: "40%", left: "3%", animationDelay: "2s" }}
          >
            {"()"}
          </div>
          <div
            className="absolute text-pink-400 text-sm opacity-20 animate-pulse font-mono"
            style={{ top: "15%", right: "30%", animationDelay: "0.5s" }}
          >
            {"[]"}
          </div>

          {/* Grid overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              animation: "grid-move 30s linear infinite",
            }}
          ></div>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-8 mb-8 bg-[#23233b]">
          <div className="md:w-1/2 w-full flex flex-col items-center mb-6 md:mb-0">
            <img
              src="https://res.cloudinary.com/desmscq2h/image/upload/v1751702869/WhatsApp_Image_2024-11-06_at_23.35.05_ea9b4e01_jgw5g6.jpg"
              alt="Abhishek Duggal"
              className="rounded-full w-80 h-80 object-cover border-4 border-white"
            />
            <div className="mt-4 text-center">
              <h2 className="text-3xl font-bold text-white">Abhishek Duggal</h2>
              <h3 className="text-lg font-bold text-gray-400">&nbsp; Full Stack Developer | Java Programmer</h3>
            </div>
            <div className="mt-4 text-center">
              <div className="flex justify-center space-x-6 mt-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abhishek-duggal-109648298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 border border-blue-600 rounded-full p-2 hover:text-blue-400 text-2xl transition duration-300"
                >
                  <FaLinkedin />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Aduggal1163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 border border-purple-300 rounded-full p-2 hover:text-purple-400 hover:border-purple-400 text-2xl transition duration-300"                >
                  <FaGithub />
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/abhishekd1163/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 border border-orange-300 rounded-full p-2  hover:text-orange-400 text-2xl transition duration-300"
                >
                  <FaCode />
                </a>
              </div>
            </div>
          </div>


          {/* Right - Text */}
          <div className="bg-[#1a1a2e] text-white py-16 px-4 md:px-20" id="about">
            <h2 className="text-4xl font-bold text-center mb-10 text-purple-300">About Me</h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <p className="mb-6">
                Hey! I'm <span className="text-purple-400 font-semibold">Abhishek Duggal</span>, a passionate and innovative Full-Stack Developer focused on building impactful, user-centric digital solutions.
                I specialize in the <span className="text-purple-400">MERN stack</span> (MongoDB, Express, React, Node.js), and love creating sleek frontends and efficient backends.
              </p>

              <p className="mb-6">
                My recent projects include a Complete Role Based Society Management System (<span className="italic text-purple-400">Averra</span>) which gains overs 80+ real time users within the first week of launch.
              </p>

              <p className="mb-6">
                I've also contributed to developer communities like the ACM student chapter as part of the Web and Organizing teams. I enjoy leading from the front — one of my projects was selected in the top 10% under the CSE 3rd year.
              </p>

              <p className="mb-6">
                Beyond coding, I have a strong grasp of data structures, algorithms, cloud computing, operating systems, and agile methodology. I believe in continuous learning, clean code, and building tech that solves real problems.
              </p>

            </div>
          </div>
        </div>
         <div className="bg-[#23233b] min-h-screen text-white px-4 py-10">
      {/* Tabs */}
      <div className="text-2xl text-center py-6 flex flex-wrap justify-center gap-8">
        <button
          onClick={() => setActiveTab("stats")}
          className={`px-6 py-2 border rounded-full transition duration-300 ${
            activeTab === "stats"
              ? "bg-purple-500 text-white border-purple-500"
              : "border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white"
          }`}
        >
          Stats
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-6 py-2 border rounded-full transition duration-300 ${
            activeTab === "education"
              ? "bg-purple-500 text-white border-purple-500"
              : "border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-6 py-2 border rounded-full transition duration-300 ${
            activeTab === "skills"
              ? "bg-purple-500 text-white border-purple-500"
              : "border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white"
          }`}
        >
          Skills
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 max-w-6xl mx-auto ">
        {activeTab === "stats" && (
          <div className="text-center">
            <FaChartBar className="text-4xl text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Stats</h2>
            <p className="text-gray-300">Problem solving, projects completed, and coding hours.</p>
            <StatSection/>
          </div>
        )}

        {activeTab === "education" && (
          <div className="max-w-6xl mx-auto space-y-10">
         <div className="bg-[#121232] border border-purple-900 rounded-xl p-6 shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <div className="">
        <h3 className="text-2xl font-bold">Chitkara University, Rajpura</h3>
        <h4 className="text-lg text-purple-400 font-semibold">B.Tech in Computer Science Engineering</h4>
        <p className="text-gray-400 text-sm mt-1">2022 - 2026 | Rajpura, Punjab, India</p>
      </div>
      <div className="bg-purple-800 px-4 py-1 text-sm rounded-full flex items-center gap-2">
        <FaUserGraduate />
        CGPA: 8.46/10
      </div>
    </div>
    <p className="text-gray-300">
      Pursuing a Bachelor's degree in Computer Science Engineering with a focus on software development, algorithms, and modern web technologies.
    </p>
    <div className="flex flex-wrap gap-3 mt-4">
      {["Data Structures & Algorithms", "Web Development", "Database Systems", "AWS"].map((tag, i) => (
        <span key={i} className="bg-[#1f1f2e] text-gray-300 text-xs px-3 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* 12th Grade Card */}
  <div className="bg-[#121232] border border-purple-900 rounded-xl p-6 shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-2xl font-bold">Dayanand Public School</h3>
        <h4 className="text-lg text-purple-400 font-semibold">CBSE - 12th Grade (Science Stream)</h4>
        <p className="text-gray-400 text-sm mt-1">2020 - 2022 | Nabha, Punjab, India</p>
      </div>
      <div className="bg-purple-800 px-4 py-1 text-sm rounded-full flex items-center gap-2">
        <FaUserGraduate />
        Percentage: 84%
      </div>
    </div>
    <p className="text-gray-300">
      Completed higher secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.
    </p>
    <div className="flex flex-wrap gap-3 mt-4">
      {["Physics", "Chemistry", "Mathematics", "Computer Science"].map((tag, i) => (
        <span key={i} className="bg-[#1f1f2e] text-gray-300 text-xs px-3 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* 10th Grade Card */}
  <div className="bg-[#121232] border border-purple-900 rounded-xl p-6 shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-2xl font-bold">DAV Cent Public School</h3>
        <h4 className="text-lg text-purple-400 font-semibold">CBSE - 10th Grade</h4>
        <p className="text-gray-400 text-sm mt-1">2018 - 2020 | Nabha, Punjab, India</p>
      </div>
      <div className="bg-purple-800 px-4 py-1 text-sm rounded-full flex items-center gap-2">
        <FaUserGraduate />
        Percentage: 80%
      </div>
    </div>
    <p className="text-gray-300">
      Completed foundational education with excellence across Science, Math, English, and Computer Applications.
    </p>
    <div className="flex flex-wrap gap-3 mt-4">
      {["Science", "Mathematics", "English", "Computer Applications"].map((tag, i) => (
        <span key={i} className="bg-[#1f1f2e] text-gray-300 text-xs px-3 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </div>
  </div>
        )}
        {activeTab === "skills" && (
  <div className="max-w-6xl mx-auto px-4">
    {/* Frontend Development */}
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">💻</span>
        <h3 className="text-xl font-semibold">Frontend Development</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Tailwind CSS", icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"}
        ].map((tech, i) => (
          <div key={i} className="bg-[#111827] p-4 rounded-lg shadow-md">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 mx-auto mb-2" />
            <p className="text-gray-300 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Backend & Database */}
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🗄️</span>
        <h3 className="text-xl font-semibold">Backend & Database</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ].map((tech, i) => (
          <div key={i} className="bg-[#111827] p-4 rounded-lg shadow-md">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 mx-auto mb-2" />
            <p className="text-gray-300 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Tools & Platforms */}
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🛠️</span>
        <h3 className="text-xl font-semibold">Tools & Platforms</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
          { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "AWS", icon: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
 }
        ].map((tool, i) => (
          <div key={i} className="bg-[#111827] p-4 rounded-lg shadow-md">
            <img src={tool.icon} alt={tool.name} className="w-10 h-10 mx-auto mb-2" />
            <p className="text-gray-300 text-sm">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      </div>
    </div>


        {/* Keyframes */}
        <style jsx>{`
          @keyframes navFloat {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-8px) translateX(8px) rotate(120deg);
            }
            66% {
              transform: translateY(8px) translateX(-4px) rotate(240deg);
            }
            100% {
              transform: translateY(0px) translateX(0px) rotate(360deg);
            }
          }

          @keyframes code-float-nav {
            0% {
              transform: translateX(-30px) translateY(0px);
              opacity: 0;
            }
            10% {
              opacity: 0.2;
            }
            90% {
              opacity: 0.2;
            }
            100% {
              transform: translateX(calc(100vw + 30px)) translateY(-10px);
              opacity: 0;
            }
          }

          @keyframes binary-rain-nav {
            0% {
              transform: translateY(-20px);
              opacity: 0;
            }
            10% {
              opacity: 0.1;
            }
            90% {
              opacity: 0.1;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }

          @keyframes grid-move {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(40px, 40px);
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default AboutSection;
