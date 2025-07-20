import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
function AboutSection() {
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
      I’ve also contributed to developer communities like the ACM student chapter as part of the Web and Organizing teams. I enjoy leading from the front — one of my projects was selected in the top 10% under the CSE 3rd year.
    </p>

    <p className="mb-6">
      Beyond coding, I have a strong grasp of data structures, algorithms, cloud computing, operating systems, and agile methodology. I believe in continuous learning, clean code, and building tech that solves real problems.
    </p>

  </div>
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
