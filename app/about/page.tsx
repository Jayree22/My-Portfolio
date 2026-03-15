"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section
      className="relative min-h-screen w-full bg-black py-28"
      aria-label="About Me"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-cover z-0"
        style={{
          backgroundImage: "url('/about-image.png')",
          backgroundSize: "75%",
          backgroundPosition: "100% center",
        }}
      />
      
      {/* Background overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center pointer-events-auto">
        <div className="w-full max-w-7xl mx-6 md:mx-28 px-6 space-y-8">

          {/* Email */}
          <a
            href="mailto:udochujerry@gmail.com"
            onClick={(e) => {
              // Try to open Gmail in a new tab
              const gmailUrl = `https://mail.google.com/mail/?view=cm&to=udochujerry@gmail.com`;
              const newWindow = window.open(gmailUrl, "_blank");
              if (!newWindow) {
                // Fallback: use default mail client
                window.location.href = "mailto:udochujerry@gmail.com";
              }
              e.preventDefault(); // prevent default to control the behavior
            }}
            className="relative z-20 flex items-center gap-3 text-[#E55B3F] mb-6 cursor-pointer group"
          >
            <Mail
              className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            <span className="text-base md:text-xl font-extrabold transition-colors duration-300 group-hover:text-white">
              udochujerry@gmail.com
            </span>
          </a>

          {/* Text Block with fade-in animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-gray-200 leading-relaxed text-sm md:text-base space-y-4"
          >
            <p>
              Hi, I’m <strong>Jerry Udochu</strong>, a Frontend Developer with over two years of experience in Web Development. I specialize in building responsive and scalable web applications and am passionate about helping startups and creating interactive websites.
            </p>
            <p>
              I am skilled in <strong>HTML, CSS, and JavaScript</strong>, with expertise in frontend frameworks such as <strong>React, Next.js, TypeScript, and Tailwind CSS</strong>.
            </p>
            <p>
              Let’s connect if you’re looking for a dedicated Frontend Developer. Let’s work together!
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}