import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        toast.success("Thank you for your feedback!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Failed to send feedback"));
  };

  return (
    <div className="relative">
      <Toaster />
      {/* Existing content remains unchanged */}
      {/* Main Content and other elements */}

      {/* Feedback Form */}
      <div className="absolute bottom-4 right-4 z-50 bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-xl w-72">
        <h3 className="text-white text-sm font-mono mb-2">Send Feedback</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-1 text-xs rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-1 text-xs rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="p-1 text-xs rounded bg-gray-700 text-white border border-gray-600"
            rows="3"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition text-white text-xs py-1 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
