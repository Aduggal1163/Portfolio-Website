import React, { useEffect, useRef, useState } from "react";

const floatingTexts = [
  "Full-Stack dev",
  "Coder",
  "Ui/UX practitioner",
  "Java Programmer",
  "Problem Solver",
  "DevOps Explorer"
];

const codeSnippets = [
  'const developer = "Abhishek";',
  'function solve(problem) {',
  '  return solution;',
  '}',
  'git commit -m "awesome"',
  'npm install creativity',
  'docker run innovation',
  'SELECT * FROM skills;',
  'while(learning) { grow(); }',
  'console.log("Hello World");',
  'import passion from "coding";',
  'export default excellence;'
];

const terminalCommands = [
  '$ whoami',
  '> abhishek_duggal',
  '$ ls skills/',
  '> react.js node.js Java',
  '$ cat passion.txt',
  '> Building amazing things...',
  '$ git status',
  '> Ready to collaborate!'
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Allow vertical scroll, prevent horizontal scroll
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
    };
  }, []);

  useEffect(() => {
    const currentText = floatingTexts[current];
    if (!deleting && displayText.length < currentText.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
    } else if (deleting && displayText.length > 0) {
      intervalRef.current = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, 30);
    } else if (!deleting && displayText.length === currentText.length) {
      intervalRef.current = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && displayText.length === 0) {
      intervalRef.current = setTimeout(() => {
        setDeleting(false);
        setCurrent((prev) => (prev + 1) % floatingTexts.length);
      }, 400);
    }
    return () => clearTimeout(intervalRef.current);
  }, [displayText, deleting, current]);

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    }}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Geometric shapes - responsive positioning */}
        <div className="absolute opacity-20 animate-pulse" style={{
          width: 'min(100px, 15vw)',
          height: 'min(100px, 15vw)',
          background: 'linear-gradient(45deg, #00d4aa 0%, #00a8ff 100%)',
          borderRadius: '20px',
          top: '20%',
          left: '5%',
          transform: 'rotate(45deg)',
          animation: 'float 20s infinite linear'
        }}></div>

        <div className="absolute opacity-15 animate-pulse" style={{
          width: 'min(150px, 20vw)',
          height: 'min(150px, 20vw)',
          background: 'linear-gradient(45deg, #ff6b6b 0%, #ee5a52 100%)',
          borderRadius: '50%',
          top: '60%',
          right: '5%',
          animationDelay: '-5s',
          animation: 'float 20s infinite linear'
        }}></div>

        <div className="absolute opacity-20 animate-pulse" style={{
          width: 'min(80px, 12vw)',
          height: 'min(80px, 12vw)',
          background: 'linear-gradient(45deg, #4ecdc4 0%, #44a08d 100%)',
          borderRadius: '15px',
          top: '10%',
          right: '20%',
          transform: 'rotate(30deg)',
          animationDelay: '-10s',
          animation: 'float 20s infinite linear'
        }}></div>

        <div className="absolute opacity-15 animate-pulse" style={{
          width: 'min(120px, 18vw)',
          height: 'min(120px, 18vw)',
          background: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
          borderRadius: '50%',
          bottom: '20%',
          left: '15%',
          animationDelay: '-15s',
          animation: 'float 20s infinite linear'
        }}></div>

        {/* Floating code snippets - fewer on mobile */}
        {codeSnippets.slice(0, window.innerWidth < 768 ? 6 : 12).map((snippet, index) => (
          <div
            key={index}
            className="absolute text-green-400 font-mono text-xs sm:text-sm opacity-30 animate-pulse whitespace-nowrap hidden sm:block"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${index * 0.5}s`,
              animation: 'code-float 25s infinite linear'
            }}
          >
            {snippet}
          </div>
        ))}

        {/* Binary rain - reduced on mobile */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400 font-mono text-xs opacity-20 hidden sm:block"
              style={{
                left: `${i * (100 / (window.innerWidth < 768 ? 10 : 20))}%`,
                animation: `binary-rain ${3 + Math.random() * 4}s infinite linear`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Symbols - responsive positioning */}
        <div className="absolute text-cyan-400 text-lg opacity-30 animate-pulse" style={{ top: '15%', left: '2%' }}>{'{'}</div>
        <div className="absolute text-cyan-400 text-base opacity-30 animate-pulse" style={{ top: '25%', right: '8%' }}>{'}'}</div>
        <div className="absolute text-yellow-400 text-base opacity-30 animate-pulse" style={{ top: '70%', left: '5%' }}>{'<>'}</div>
        <div className="absolute text-purple-400 text-sm opacity-30 animate-pulse" style={{ top: '80%', right: '15%' }}>{'()'}</div>
        <div className="absolute text-pink-400 text-base opacity-30 animate-pulse" style={{ top: '45%', left: '1%' }}>{'[]'}</div>
        <div className="absolute text-green-400 text-sm opacity-30 animate-pulse" style={{ top: '35%', right: '3%' }}>{'&&'}</div>

        {/* Grid overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 30s linear infinite'
        }}></div>
      </div>

      {/* Terminal - responsive positioning and sizing */}
      <div className="absolute top-4 right-2 sm:top-8 sm:right-6 w-64 sm:w-80 bg-gray-900 rounded-lg border border-gray-600 shadow-2xl z-10 opacity-80 hidden md:block">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-xs font-mono">terminal</span>
        </div>
        <div className="p-4 h-32 overflow-hidden">
          {terminalCommands.map((cmd, index) => (
            <div key={index} className="text-green-400 font-mono text-xs mb-1 animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}>
              {cmd}
            </div>
          ))}
        </div>
      </div>

      {/* Code snippet bottom-left - responsive positioning and sizing */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-6 w-64 sm:w-72 bg-gray-900 rounded-lg border border-gray-600 shadow-2xl z-10 opacity-80 hidden lg:block">
  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
    <span className="text-gray-400 text-xs font-mono">main.js</span>
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    </div>
  </div>
  <div className="p-4 h-24 bg-gray-900 rounded-b-lg font-mono text-xs">
    <div className="text-purple-400">
      const <span className="text-yellow-400">portfolio</span> = {'{'}
    </div>
    <div className="text-blue-400 ml-4">
      name: <span className="text-green-400">"Abhishek Duggal"</span>,
    </div>
    <div className="text-blue-400 ml-4">
      passion: <span className="text-green-400">"Coding"</span>
    </div>
    <div className="text-purple-400">{'};'}</div>
  </div>
</div>


      {/* Main Content - responsive layout */}
      <div className="flex-1 flex flex-col justify-center items-center text-center sm:items-start sm:text-left relative z-10 py-8 sm:py-16 max-w-7xl mx-auto w-full">
        <h2 className="text-sm sm:text-base md:text-xl font-medium uppercase tracking-widest text-cyan-400 mb-2 sm:mb-4 font-mono">
          <span className="text-green-400 mr-1">&gt;</span>HI I AM
        </h2>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-6 drop-shadow-2xl leading-tight">
          Abhishek Duggal
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-bold font-mono flex items-center flex-wrap justify-center sm:justify-start">
            <span className="mr-2">I am</span>
            <span className="text-yellow-400 mx-2">{"=>"}</span>
            <span className="min-w-0 break-words">{displayText}</span>
            <span className="animate-pulse border-r-2 border-cyan-400 ml-1 h-6 sm:h-8" />
          </h1>
        </div>

        {/* Status info - responsive layout */}
        <div className="text-gray-400 font-mono text-xs sm:text-sm space-y-2 sm:space-y-3 w-full max-w-md sm:max-w-none">
          <div className="flex items-center justify-center sm:justify-start">
            <span className="text-green-400 mr-2">●</span>
            <span className="text-blue-400">status:</span>
            <span className="text-green-400 ml-1">ready_to_code</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <span className="text-yellow-400 mr-2">●</span>
            <span className="text-blue-400">location:</span>
            <span className="text-yellow-400 ml-1 break-all">~/developer/portfolio</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <span className="text-purple-400 mr-2">●</span>
            <span className="text-blue-400">mode:</span>
            <span className="text-purple-400 ml-1">innovation_mode</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start pt-4">
            <span className="text-green-400 mr-2">●</span>
            <span className="text-green-400 mr-2">Resume:</span>
            <button
              onClick={async () => {
                try {
                  const res = await fetch("https://res.cloudinary.com/desmscq2h/image/upload/v1753008170/AbhishekDuggal_Resume_page-0001_wqxvby.jpg");
                  const blob = await res.blob();
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "Abhishek_Duggal_CV.jpg";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('Download failed:', error);
                }
              }}
              className="px-3 py-2 sm:px-4 sm:py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all duration-300 text-xs sm:text-sm active:bg-green-700"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Mobile-only terminal and code snippets */}
        <div className="mt-8 w-full space-y-4 md:hidden">
          {/* Mobile Terminal */}
          <div className="w-full bg-gray-900 rounded-lg border border-gray-600 shadow-2xl opacity-80">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs font-mono">terminal</span>
            </div>
            <div className="p-4 h-24 overflow-hidden">
              {terminalCommands.slice(0, 4).map((cmd, index) => (
                <div key={index} className="text-green-400 font-mono text-xs mb-1">
                  {cmd}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(20px) rotate(240deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        @keyframes code-float {
          0% { transform: translateX(-50px) translateY(0px); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateX(calc(100vw + 50px)) translateY(-20px); opacity: 0; }
        }
        @keyframes binary-rain {
          0% { transform: translateY(-50px); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}

export default Home;