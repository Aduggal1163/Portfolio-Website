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
  '> react.js node.js python.js',
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
    const originalStyles = {
      margin: document.body.style.margin,
      padding: document.body.style.padding,
      overflow: document.body.style.overflow,
    };

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";

    return () => {
      // Restore original styles on unmount
      document.body.style.margin = originalStyles.margin;
      document.body.style.padding = originalStyles.padding;
      document.body.style.overflow = originalStyles.overflow;
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
    <div className="w-screen h-screen flex p-30 relative  overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    }}>
  {/* Background shapes */ }
  < div className = "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" >
    {/* Animated geometric shapes */ }
    < div className = "absolute opacity-20 animate-pulse" style = {{
  width: '100px',
    height: '100px',
      background: 'linear-gradient(45deg, #00d4aa 0%, #00a8ff 100%)',
        borderRadius: '20px',
          top: '20%',
            left: '10%',
              transform: 'rotate(45deg)',
                animation: 'float 20s infinite linear'
}}></div >

        <div className="absolute opacity-15 animate-pulse" style={{
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, #ff6b6b 0%, #ee5a52 100%)',
          borderRadius: '50%',
          top: '60%',
          right: '15%',
          animationDelay: '-5s',
          animation: 'float 20s infinite linear'
        }}></div>

        <div className="absolute opacity-20 animate-pulse" style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #4ecdc4 0%, #44a08d 100%)',
          borderRadius: '15px',
          top: '10%',
          right: '25%',
          transform: 'rotate(30deg)',
          animationDelay: '-10s',
          animation: 'float 20s infinite linear'
        }}></div>

        <div className="absolute opacity-15 animate-pulse" style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
          borderRadius: '50%',
          bottom: '20%',
          left: '20%',
          animationDelay: '-15s',
          animation: 'float 20s infinite linear'
        }}></div>

{/* Floating code snippets */ }
{
  codeSnippets.map((snippet, index) => (
    <div
      key={index}
      className="absolute text-green-400 font-mono text-xs opacity-30 animate-pulse whitespace-nowrap"
      style={{
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        animationDelay: `${index * 0.5}s`,
        animation: 'code-float 25s infinite linear'
      }}
    >
      {snippet}
    </div>
  ))
}

{/* Binary rain effect */ }
<div className="absolute top-0 left-0 w-full h-full">
  {[...Array(20)].map((_, i) => (
    <div
      key={i}
      className="absolute text-blue-400 font-mono text-xs opacity-20"
      style={{
        left: `${i * 5}%`,
        animation: `binary-rain ${3 + Math.random() * 4}s infinite linear`,
        animationDelay: `${Math.random() * 2}s`
      }}
    >
      {Math.random() > 0.5 ? '1' : '0'}
    </div>
  ))}
</div>

{/* Floating brackets and symbols */ }
        <div className="absolute text-cyan-400 text-2xl opacity-30 animate-pulse" style={{ top: '15%', left: '5%' }}>{'{'}</div>
        <div className="absolute text-cyan-400 text-2xl opacity-30 animate-pulse" style={{ top: '25%', right: '10%', animationDelay: '1s' }}>{'}'}</div>
        <div className="absolute text-yellow-400 text-xl opacity-30 animate-pulse" style={{ top: '70%', left: '8%', animationDelay: '2s' }}>{'<>'}</div>
        <div className="absolute text-purple-400 text-lg opacity-30 animate-pulse" style={{ top: '80%', right: '20%', animationDelay: '0.5s' }}>{'()'}</div>
        <div className="absolute text-pink-400 text-xl opacity-30 animate-pulse" style={{ top: '45%', left: '3%', animationDelay: '1.5s' }}>{'[]'}</div>
        <div className="absolute text-green-400 text-lg opacity-30 animate-pulse" style={{ top: '35%', right: '5%', animationDelay: '2.5s' }}>{'&&'}</div>

{/* Grid overlay */ }
<div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
  backgroundImage: 'linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)',
  backgroundSize: '50px 50px',
  animation: 'grid-move 30s linear infinite'
}}></div>
      </div >

  {/* Terminal window in top right */ }
  < div className = "absolute top-8 right-8 w-80 bg-gray-900 rounded-lg border border-gray-600 shadow-2xl z-10 opacity-80" >
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
      </div >

  {/* Code editor snippet in bottom left */ }
  < div className = "absolute bottom-30 left-340 w-72 bg-gray-900 rounded-lg border border-gray-600 shadow-2xl z-10 opacity-80" >
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
          <span className="text-gray-400 text-xs font-mono">main.js</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="p-4 h-24 bg-gray-900 rounded-b-lg font-mono text-xs">
          <div className="text-purple-400">const <span className="text-yellow-400">portfolio</span> = {'{'}</div>
          <div className="text-blue-400 ml-4">name: <span className="text-green-400">"Abhishek Duggal"</span>,</div>
          <div className="text-blue-400 ml-4">passion: <span className="text-green-400">"Coding"</span></div>
          <div className="text-purple-400">{'};'}</div>

        </div>
      </div >

  {/* Main content */ }
  < div className = "flex flex-col ml-30 relative z-10 p-10" >
        <h2 className="text-lg md:text-2xl font-medium uppercase tracking-widest text-cyan-400 mb-2 font-mono">
          <span className="text-green-400 mr-1">&gt;</span>HI I AM
        </h2>
        <h1 className="text-7xl font-extrabold text-white mb-3 text-center drop-shadow-2xl">
          Abhishek Duggal
        </h1>

        <h1 className="ml-2 text-4xl text-cyan-300 whitespace-nowrap font-bold relative inline-flex h-14 align-middle items-center font-mono">
          I am <span className="text-yellow-400 mx-2">{"=>"}</span> {displayText}
          <span className="animate-pulse border-r-2 border-cyan-400 ml-1 h-8" />
        </h1>
        <div>
        </div>

{/* Additional dev info */ }
<div className="mt-8 text-gray-400 font-mono text-sm">
  <div className="flex items-center mb-2">
    <span className="text-green-400 mr-2">●</span>
    <span className="text-blue-400">status:</span>
    <span className="text-green-400 ml-1">ready_to_code</span>
  </div>

  <div className="flex items-center mb-2">
    <span className="text-yellow-400 mr-2">●</span>
    <span className="text-blue-400">location:</span>
    <span className="text-yellow-400 ml-1">~/developer/portfolio</span>
  </div>

  <div className="flex items-center mb-2">
    <span className="text-purple-400 mr-2">●</span>
    <span className="text-blue-400">mode:</span>
    <span className="text-purple-400 ml-1">innovation_mode</span>
  </div>

  <div className="relative mt-4">
  <span className="text-green-400 mr-2">●</span>
  <span className="text-green-400 ml-1">Resume: </span>
    <button
      onClick={async () => {
        const res = await fetch(
          "https://res.cloudinary.com/desmscq2h/image/upload/v1753008170/AbhishekDuggal_Resume_page-0001_wqxvby.jpg"
        );
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Abhishek_Duggal_CV.jpg";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }}
      className="inline-block px-4 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all duration-300 text-xs"
    >
      Download CV
    </button>
  </div>
</div>
   </div >

  {/* CSS animations */ }
  < style jsx > {`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }
        
        @keyframes code-float {
          0% {
            transform: translateX(-50px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(-20px);
            opacity: 0;
          }
        }
        
        @keyframes binary-rain {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style >
    </div >
  );
}

export default Home;