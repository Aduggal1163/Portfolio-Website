import React from "react";
import ProjectCard from "../Components/ProjectCard";
function Projects() {
  const projects = [
    {
      image:"https://res.cloudinary.com/desmscq2h/image/upload/v1779084538/Screenshot_2026-05-18_at_11.38.25_AM_sdsuov.png",
      title:"Documentor AI",
      desc:"Built a RAG-based document Q&A system using LangChain, FastAPI, and Ollama (local LLM), enabling semantic search across PDF, DOCX, and TXT files with full priv…Built a RAG-based document Q&A system using LangChain, FastAPI, and Ollama (local LLM), enabling semantic search across PDF, DOCX, and TXT files with full privacy — no external API dependency. Features an AI-powered diagram generator for flowcharts, mind maps, and sequence diagrams from natural language, plus JWT-secured authentication for secure multi-user access. Tech stack: FastAPI, LangChain, Ollama, ChromaDB.",
      github:"https://github.com/Aduggal1163/Documentor-AI"
    },
    {
      image:"https://res.cloudinary.com/desmscq2h/image/upload/v1779084278/Screenshot_2026-05-18_at_11.33.34_AM_z1jc34.png",
      title:"NextStep",
      desc:"NextStep is a full-stack smart wedding planning platform built with React, Node.js/Express, and MongoDB, designed to eliminate the overwhelm of wedding planning by bringing everything into one structured system. It features a step-by-step planning workflow with checklist-based progress tracking, a vendor discovery and booking system with full lifecycle management, and a personalized recommendation engine that suggests vendors based on user preferences, budget, and event requirements. The platform also includes real-time chat between users and vendors, and an event-driven notification system for bookings, messages, and updates — all tied together through a structured multi-role architecture supporting Users, Vendors, and Admins. Tech stack: React, Node.js, Express.js, MongoDB, REST API.",
      github:"https://github.com/Aduggal1163/NextStep_WP-2210991163-2210991120-2210991574"
    },
    {
      image:"https://res.cloudinary.com/desmscq2h/image/upload/v1779083572/Screenshot_2026-05-18_at_11.22.23_AM_laxj7g.png",
      title:"TaskBridge",
      desc:`
          TaskBridge is a full-stack team collaboration and project management platform built with React.js on the frontend and Node.js/Express on the backend. It allows teams to create, assign, and track tasks seamlessly, keeping everyone aligned and projects on schedule. The app follows a clean monorepo architecture separating client and server concerns, with the frontend deployed on Vercel for fast global access. Tech stack: JavaScript, React.js, Node.js, Express.js, REST API.
      `,
      github: "https://github.com/Aduggal1163/TaskBridge",
      live: "https://task-bridge-indol.vercel.app/"
    },
    {
      image: "https://res.cloudinary.com/desmscq2h/image/upload/v1753011869/Averra_c4kkvc.png",
      title: "Aveera",
      desc: `
        • A full-stack role-based Society Management Web App with Node.js, Express, MongoDB, React, and JWT.
• Built core features: service booking, complaint reporting, visitor gate passes, SOS alerts, notice board, event management,
and polls.
• Enabled real-time workflows across roles: residents, admins, guards, service providers using dashboards, status updates.
• Achieved strong early adoption with 73 active users within the first week of launch
        `,
         github: "https://github.com/Aduggal1163/Averra",
    live: "https://averra-five.vercel.app/",
    },
     {
    image: "https://res.cloudinary.com/desmscq2h/image/upload/v1753011869/FC_wmckju.png",
    title: "FaceConnect",
    desc: `Built FaceConnect, a real-time video calling website using the MERN stack.
FaceConnect enables seamless peer-to-peer video and audio calls directly within the browser.
• Real-time Video & Audio:High-quality video and audio calls with minimal latency.
• Screen Sharing:Share your screen effortlessly during calls for collaboration or presentations.
• In-call Chat:Engage in real-time text conversations alongside your video calls.
• Video/Audio Controls:Easily toggle video and audio on/off during calls for privacy and flexibility.
• User-friendly Interface:Intuitive and easy-to-use interface for a seamless user experience.`,
 github: "https://github.com/Aduggal1163/FConnect",
    live: "https://fconnect-frontend.onrender.com/",
  },
  {
    image:"https://res.cloudinary.com/desmscq2h/image/upload/v1753011870/Rental_Booking_Website_qjhway.png",
    title:"Rental Booking Website",
    desc:`
      Developed and deployed Urban Heaven, an Airbnb-style platform using Express.js, MongoDB, and MVC architecture. The app features user authentication, responsive design, property browsing, listing management, and a review system—highlighting both backend and frontend skills. Hosted on Render for seamless accessibility.
    `,
     github: "https://github.com/Aduggal1163/AirBnb",
    live: "https://airbnb-1-r82l.onrender.com/",
  },
      {
      image: "https://res.cloudinary.com/desmscq2h/image/upload/v1753012054/Screenshot_2025-07-20_171617_ywn749.png",
      title: "Job Hunt Website",
      desc: `• Architected and developed a job portal with functionalities including an admin dashboard, job postings, user profile management, and secure JWT-based session handling.
• Leveraged MongoDB, Express.js, React, Node.js, Multer for file uploads, and Cloudinary for secure media storage.
• Streamlined development and issue resolution using Jira for task tracking and real-time collaboration.
• Enhanced user experience with real-time updates, intuitive UI, and efficient content management modules.`,
 github: "https://github.com/Aduggal1163/SeekAndWork",
},
  ];

  const navCodeSnippets = [
    'nav.render()',
    '{ active: true }',
    'route: "/"',
    'onClick()',
    'useState()',
  ];

  return (
    <>
      <div className="p-10 w-full relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '80px',
        border: 'none',
        borderRadius: "none"
      }}>
        {/* Background animated elements - matching home page */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Animated geometric shapes */}
          <div className="absolute opacity-15 animate-pulse" style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #00d4aa 0%, #00a8ff 100%)',
            borderRadius: '50%',
            top: '20%',
            left: '8%',
            animation: 'navFloat 20s infinite linear'
          }}></div>

          <div className="absolute opacity-10 animate-pulse" style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(45deg, #ff6b6b 0%, #ee5a52 100%)',
            borderRadius: '8px',
            top: '10%',
            right: '15%',
            transform: 'rotate(45deg)',
            animationDelay: '-5s',
            animation: 'navFloat 20s infinite linear'
          }}></div>

          <div className="absolute opacity-15 animate-pulse" style={{
            width: '35px',
            height: '35px',
            background: 'linear-gradient(45deg, #4ecdc4 0%, #44a08d 100%)',
            borderRadius: '12px',
            bottom: '15%',
            left: '25%',
            animationDelay: '-10s',
            animation: 'navFloat 20s infinite linear'
          }}></div>

          <div className="absolute opacity-10 animate-pulse" style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
            borderRadius: '50%',
            top: '30%',
            right: '25%',
            animationDelay: '-7s',
            animation: 'navFloat 20s infinite linear'
          }}></div>

          {/* Floating code snippets */}
          {navCodeSnippets.map((snippet, index) => (
            <div
              key={index}
              className="absolute text-green-400 font-mono text-xs opacity-20 animate-pulse whitespace-nowrap"
              style={{
                top: `${20 + Math.random() * 40}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${index * 0.8}s`,
                animation: 'code-float-nav 30s infinite linear'
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
                  animation: `binary-rain-nav ${2 + Math.random() * 2}s infinite linear`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>

          {/* Programming symbols */}
          <div className="absolute text-cyan-400 text-lg opacity-20 animate-pulse font-mono" style={{ top: '25%', left: '5%' }}>{'</'}</div>
          <div className="absolute text-yellow-400 text-sm opacity-20 animate-pulse font-mono" style={{ top: '60%', right: '8%', animationDelay: '1s' }}>{'&&'}</div>
          <div className="absolute text-purple-400 text-lg opacity-20 animate-pulse font-mono" style={{ top: '40%', left: '3%', animationDelay: '2s' }}>{'()'}</div>
          <div className="absolute text-pink-400 text-sm opacity-20 animate-pulse font-mono" style={{ top: '15%', right: '30%', animationDelay: '0.5s' }}>{'[]'}</div>

          {/* Grid overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'grid-move 30s linear infinite'
          }}></div>
        </div>

        {/* Navigation content */}


        {/* CSS animations */}
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
        
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 15px rgba(0, 212, 170, 0.8);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 212, 170, 1), 0 0 35px rgba(0, 212, 170, 0.8);
          }
          100% {
            box-shadow: 0 0 15px rgba(0, 212, 170, 0.8);
          }
        }
      `}</style>
        <div>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>

    </>
  );
}

export default Projects;
