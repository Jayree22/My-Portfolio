"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Home-Image.png')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-7xl mx-4 sm:mx-6 md:mx-36 px-4 sm:px-6 md:px-0 text-white">
          {/* Name */}
          <motion.p
            className="text-3xl md:text-4xl tracking-widest mb-2"
            variants={itemVariants}
          >
            JERRY
          </motion.p>

          {/* Surname */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-2"
            variants={itemVariants}
          >
            UDOCHU
          </motion.h1>

          {/* Profession */}
          <motion.h2
            className="text-xl md:text-2xl text-orange-500 tracking-widest font-light uppercase"
            variants={itemVariants}
          >
            Web Developer
          </motion.h2>
        </div>
      </motion.div>
    </section>
  );
}