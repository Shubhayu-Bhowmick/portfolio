"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
//import { Moon } from "lucide-react";

import { projects } from "@/content/projects/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12 inline-block text-4xl font-bold"
        >
          Projects
          <div
            className="absolute -bottom-2 left-0 h-3 w-full bg-yellow-100/80"
            style={{ zIndex: -1 }}
          />
        </motion.h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white"
            >
              <Link href={project.link} className="relative block aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-gray-200">{project.description}</p>
                  <time className="mt-2 text-sm text-gray-300">
                    {project.date}
                  </time>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-24 max-w-5xl px-4 pb-8">
        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">© 2024</p>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/shubhayu-bhowmick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/kinda_shub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/Shubhayu-Bhowmick/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
