"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "NCVSI",
    description:
      "A secure, cloud-based app with authentication and Paystack payments that allows African trained nurses to transmit their verified nursing credentials to international healthcare providers and credentialing bodies.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.Js", "Paystack"],
    github: "https://github.com/Nurseverify/ncvsi-frontend",
    demo: "https://ncvsi.com",
  },
  {
    title: "Yarna App",
    description:
      "A full-featured e-commerce web app and marketing platform with authentication, product upload & search, and Stripe payments.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.Js", "Stripe"],
    github: "https://github.com/mySubApp/frontend",
    demo: "https://yarnaclient.onrender.com/auth/login",
  },
  {
    title: "Natours",
    description:
      "A demo tour app for nature lovers. It features a clean design, responsive layout, and smooth animations to showcase various tour packages and destinations.",
    tech: ["HTML", "SASS", "SCSS",],
    github: "#",
    demo: "https://natours.netlify.app",
  },
  {
    title: "Quiz Maker App",
    description:
      "A quiz maker app built with React that allows users to create and take quizzes on various topics. It features a user-friendly interface, real-time feedback, and a variety of question types.",
    tech: ["React", "HTML", "CSS"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/React_Quiz-Maker/",
  },
  {
    title: "To-Do App",
    description:
      "A simple and efficient to-do app built with React that allows users to manage their tasks and stay organized.",
    tech: ["React", "HTML", "CSS"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/React_To-Do_App/",
  },
  {
    title: "Snake Island",
    description:
      "A classic snake game built with JavaScript, HTML, and CSS. Players control a snake to eat food and grow longer while avoiding collisions with the walls and itself. Have fun playing!",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/Snake_Game/",
  },
  {
    title: "Quiz Maker App",
    description:
      " A simple quiz maker app built with JavaScript that allows users to create and take quizzes on various topics. It features a user-friendly interface, real-time feedback, and a variety of question types.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/Quiz_Maker_App/",
  },
  {
    title: "Quiz App",
    description:
      " A simple quiz app built with JavaScript that allows users to take quizzes on various topics. It features a user-friendly interface, real-time feedback, and a variety of question types. Test your knowledge and have fun playing!",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/Quiz_App/",
  },
  {
    title: "To-Do App",
    description:
      "A simple and efficient to-do app built with JavaScript that allows users to manage their tasks and stay organized.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/To-Do_App/",
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator app built with JavaScript that allows users to perform basic arithmetic operations. It features a clean design and a user-friendly interface for easy calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jayree22",
    demo: "https://jayree22.github.io/Calculator_app/",
  },
];
  
export default function PortfolioPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const truncateLength = 100; // number of characters to show initially

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-16">
        My <span className="text-[#E55B3F]">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const displayText = isExpanded
            ? project.description
            : project.description.length > truncateLength
            ? project.description.slice(0, truncateLength) + "..."
            : project.description;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-[#E55B3F] flex flex-col justify-between"
              style={{ height: "300px" }}
            >
              <div>
                <h3 className="text-xl font-semibold text-[#E55B3F]">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed ">
                  {displayText}
                </p>

                {project.description.length > truncateLength && (
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="text-[#E55B3F] text-sm mt-1 hover:underline cursor-pointer"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#E55B3F] transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#E55B3F] transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}