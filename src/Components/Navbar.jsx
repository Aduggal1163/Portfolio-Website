import React, { useState } from "react";

// Mock icons since we can't import react-icons
const HomeIcon = () => (
  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
  </svg>
);

const AboutIcon = () => (
  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  </svg>
);

const icons = {
  home: <HomeIcon />,
  projects: <ProjectsIcon />,
  about: <AboutIcon />,
};

function ModernNavbar() {
  const [activeItem, setActiveItem] = useState("/");

  const navItems = [
    { to: "/", label: "Home", icon: icons.home },
    { to: "/projects", label: "Projects", icon: icons.projects },
    { to: "/about", label: "About", icon: icons.about },
  ];

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  // Floating code snippets for navbar
  const navCodeSnippets = [
    'nav.render()',
    '{ active: true }',
    'route: "/"',
    'onClick()',
    'useState()',
  ];

  return (
    <nav className="w-full relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      minHeight: '80px',
      border:'none',
      borderRadius:"none"
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
        <div className="absolute text-cyan-400 text-lg opacity-20 animate-pulse font-mono" style={{top: '25%', left: '5%'}}>{'</'}</div>
        <div className="absolute text-yellow-400 text-sm opacity-20 animate-pulse font-mono" style={{top: '60%', right: '8%', animationDelay: '1s'}}>{'&&'}</div>
        <div className="absolute text-purple-400 text-lg opacity-20 animate-pulse font-mono" style={{top: '40%', left: '3%', animationDelay: '2s'}}>{'()'}</div>
        <div className="absolute text-pink-400 text-sm opacity-20 animate-pulse font-mono" style={{top: '15%', right: '30%', animationDelay: '0.5s'}}>{'[]'}</div>

        {/* Grid overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'grid-move 30s linear infinite'
        }}></div>
      </div>

      {/* Navigation content */}
      <div className="relative z-10 flex justify-center py-6">
        <div className="flex gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.to}
              onClick={() => handleItemClick(item.to)}
              className={`group relative flex items-center px-6 py-3 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-mono ${
                activeItem === item.to
                  ? "text-white shadow-2xl"
                  : "text-cyan-300 hover:text-white"
              }`}
              style={{
                background: activeItem === item.to 
                  ? 'linear-gradient(135deg, #00d4aa 0%, #00a8ff 100%)' 
                  : 'rgba(15, 15, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                border: activeItem === item.to 
                  ? '1px solid rgba(0, 212, 170, 0.3)' 
                  : '1px solid rgba(100, 255, 218, 0.2)',
                boxShadow: activeItem === item.to 
                  ? '0 20px 40px rgba(0, 212, 170, 0.3)' 
                  : '0 8px 25px rgba(0, 0, 0, 0.3)',
                animationDelay: `${index * 0.1}s`,
                animation: 'slideIn 0.6s ease-out forwards'
              }}
            >
              {/* Hover background effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: activeItem !== item.to 
                    ? 'linear-gradient(135deg, #00d4aa 0%, #00a8ff 100%)' 
                    : 'none'
                }}
              ></div>
              
              {/* Content */}
              <span className="relative z-10 flex items-center">
                <span className="transform group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-green-400 mr-1 font-mono">&gt;</span>
                {item.label}
              </span>
              
              {/* Active indicator */}
              {activeItem === item.to && (
                <div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, #00d4aa 0%, #00f2fe 100%)',
                    boxShadow: '0 0 15px rgba(0, 212, 170, 0.8)',
                    animation: 'pulse-glow 2s infinite'
                  }}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>

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
    </nav>
  );
}

export default ModernNavbar;