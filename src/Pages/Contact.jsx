import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

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

const FeedbackForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        const next = floatingTexts[index];
        index = (index + 1) % floatingTexts.length;
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_meh530d",
        "template_t2lfcfs",
        formRef.current,
        "4xa1rTNwAz_4VBoef"
      )
      .then(
        () => {
          toast.success("Thank you for your feedback!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    >

      {/* Add all background animation code and floating elements here as needed */}
      {/* Skipping repetitive animation content to keep it concise */}

      {/* Main Form Section */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="z-10 max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg text-white mx-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-mono">
          <span className="text-green-400 mr-1">&gt;</span> Feedback Form
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold py-2 rounded"
        >
          Submit Feedback
        </button>
      </form>

    </div>
  );
};

export default FeedbackForm;
