"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur">
      <nav className="mx-6 md:mx-28 max-w-7xl px-6 py-4 flex justify-between items-center md:justify-start">
        
        {/* Mobile Logo */}
        <div className="md:hidden text-white font-semibold text-lg mr-4">
          Jerry Udochu
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`
                  relative px-3 py-1
                  transition-colors duration-300
                  hover:text-[#E55B3F]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:bg-[#E55B3F]
                  after:transition-all after:duration-300
                  ${pathname === item.path ? "text-[#E55B3F] after:w-full" : "after:w-0 hover:after:w-full"}
`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-6 py-4 flex flex-col gap-4 uppercase text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-[#E55B3F]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
