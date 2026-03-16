"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Braces,
  FileCode,
  Zap,
  Layers,
  Boxes,
  Github,
  Monitor,
  PenTool,
  Bug,
  Paintbrush,
  Send,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    role: "Fullstack Developer(Freelancer)",
    company: "NCVSI(United Kingdom)",
    period: "2025",
    location: "Remote",
    description:
      "Contributed to the development and maintenance of various web applications, focusing on both front-end and back-end features. Participated in daily stand-ups and sprint planning sessions, adhering to Agile methodologies.",
    responsibilities: [
      "Developed RESTful APIs with Express.js and integrated third-party services.",
      "Built responsive web pages and components using React, Redux, and SASS.",
      "Assisted in database design and management using MySQL and Redis.",
      "Implemented unit and integration tests, increasing code coverage by 20%.",
      "Optimized application performance and implemented security best practices.",
      "Conducted code reviews and collaborated with cross-functional teams to ensure project success.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Yarna (Spain)",
    period: "Feb2025 – Aug2025",
    location: "Remote",
    description:
      "Led the development of a high-traffic e-commerce platform, integrating advanced search functionalities and secure payment gateways.",
    responsibilities: [
      "Architected scalable microservices using Node.js and TypeScript.",
      "Developed responsive user interfaces with React and Next.js.",
      "Managed PostgreSQL and MongoDB databases.",
      "Implemented CI/CD pipelines using Docker and Kubernetes.",
      "Collaborated with product managers and UX designers.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "MySubApp Ltd (Spain)",
    period: "Mar2024 – Jan2025",
    location: "Remote",
    description:
      "Assisted senior developers in building web applications and learning modern frontend technologies.",
    responsibilities: [
      "Translated design mockups into functional frontend code.",
      "Participated in code reviews.",
      "Integrated REST APIs.",
      "Maintained documentation.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "MySubApp Ltd (Spain)",
    period: "Sep2023 – Feb2024",
    location: "Remote",
    description:
      "Supported development and design teams by maintaining websites and testing functionality.",
    responsibilities: [
      "Assisted with HTML, CSS, JavaScript development.",
      "Collaborated with design team.",
      "Tested cross-browser functionality.",
      "Maintained documentation.",
    ],
  },
];

export default function ResumePage() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => [
      (prev + newDirection + experiences.length) % experiences.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        paginate(1);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused]);

  // ---------------------- Animations Variants ----------------------
  const skillVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white">
      <div className="relative z-10 max-w-7xl mx-6 md:mx-30 px-6 py-28">

        {/* ================= SKILLS ================= */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-white">Skill Set</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 mb-24 sm:mb-32 items-start">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-10"
          >
            {/* Programming Languages */}
            <div>
              <h2 className="text-[#E55B3F] uppercase tracking-wide text-sm mb-4">
                Programming Languages
              </h2>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  { icon: FileCode, label: "HTML" },
                  { icon: Braces, label: "CSS" },
                  { icon: Code2, label: "JavaScript" },
                  { icon: Zap, label: "TypeScript" },
                ].map(({ icon: Icon, label }) => (
                  <motion.li
                    key={label}
                    variants={skillVariant}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <Icon className="w-4 h-4 text-[#E55B3F] group-hover:text-white transition-colors duration-300" />
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tools & Software */}
            <div>
              <h2 className="text-[#E55B3F] uppercase tracking-wide text-sm mb-4">
                Tools & Software
              </h2>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  { icon: Github, label: "Git/GitHub" },
                  { icon: Monitor, label: "VS Code" },
                  { icon: PenTool, label: "Figma" },
                  { icon: Bug, label: "Chrome DevTools" },
                  { icon: Paintbrush, label: "Prettier" },
                  { icon: Send, label: "Postman" },
                ].map(({ icon: Icon, label }) => (
                  <motion.li
                    key={label}
                    variants={skillVariant}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <Icon className="w-4 h-4 text-[#E55B3F] group-hover:text-white transition-colors duration-300" />
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="md:-ml-24 ml-0"
          >
            <h2 className="text-[#E55B3F] uppercase tracking-wide text-sm mb-4">
              Frontend Frameworks & Libraries
            </h2>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { icon: Layers, label: "React" },
                { icon: Boxes, label: "Next.js" },
                { icon: Boxes, label: "Tailwind CSS" },
              ].map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={skillVariant}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-[#E55B3F] group-hover:text-white transition-colors duration-300" />
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div
          className="mt-32 max-w-3xl relative cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Timeline Track */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700">
            <motion.div
              className="absolute left-0 w-0.5 bg-[#E55B3F]"
              initial={{ height: 0 }}
              animate={{
                height: `${((current + 1) / experiences.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="absolute -left-1.25 top-0 h-full flex flex-col justify-between">
            {experiences.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full border-2 ${
                  index === current
                    ? "bg-[#E55B3F] border-[#E55B3F]"
                    : "bg-black border-gray-500"
                }`}
                animate={{ scale: index === current ? 1.4 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 200 : -200 }}
              transition={{ duration: 0.5 }}
              className="pl-10 relative min-h-105"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x * velocity.x;
                if (swipe < -10000) paginate(1);
                else if (swipe > 10000) paginate(-1);
                setIsPaused(false);
              }}
            >
              <h2 className="text-[#E55B3F] text-lg font-semibold">
                {experiences[current].role}
              </h2>
              <p className="text-sm text-[#E55B3F] mt-1">
                {experiences[current].company}
              </p>
              <p className="text-xs text-[#E55B3F] mt-3">
                {experiences[current].period}
              </p>
              <p className="text-xs text-[#E55B3F] mt-4 mb-2">
                {experiences[current].location}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {experiences[current].description}
              </p>
              <h3 className="text-sm font-semibold mb-3">
                Key Responsibilities:
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {experiences[current].responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#E55B3F] mt-1.5 text-xs">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <ChevronLeft
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 text-[#E55B3F] cursor-pointer hover:scale-110"
            onClick={() => paginate(-1)}
          />
          <ChevronRight
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 text-[#E55B3F] cursor-pointer hover:scale-110"
            onClick={() => paginate(1)}
          />

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-[#E55B3F] scale-125" : "bg-gray-600"
                }`}
                onClick={() => setCurrent([idx, idx > current ? 1 : -1])}
              />
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            {current + 1} / {experiences.length}
          </p>
        </div>

        {/* Download Resume */}
        <div className="flex justify-center mt-12">
          <a
            href="/JERRY'S_RESUME.pdf"
            download
            className="px-6 py-3 bg-[#E55B3F] text-black font-semibold rounded-md hover:bg-orange-600 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}