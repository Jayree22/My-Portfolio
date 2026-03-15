"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-white text-sm font-medium">
            © {new Date().getFullYear()} Jerry Udochu. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="https://github.com/Jayree22" aria-label="GitHub">
              <Github className="h-5 w-5 text-white hover:text-[#E55B3F] transition" />
            </a>
            <a href="https://linkedin.com/in/jerryudochu" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white hover:text-[#E55B3F] transition" />
            </a>
            <a href="https://x.com/jerry_udoc69793" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-white hover:text-[#E55B3F] transition" />
            </a>
            <a href="https://instagram.com/udochujerry" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-white hover:text-[#E55B3F] transition" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
