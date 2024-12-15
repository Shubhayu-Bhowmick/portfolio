"use client";
import { motion } from "framer-motion";
import { X, Linkedin, Github, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";

export default function Hero() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Introduction Card */}
          <Card className="col-span-full rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="flex-1 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-xl font-normal text-gray-600">
                    Hi there,
                  </h1>
                  <h2 className="text-3xl font-medium text-gray-900">
                    I&apos;m Shubhayu Bhowmick
                  </h2>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-600"
                >
                  Sharing my journey of engineering effortless user experiences
                  with the help of modern web technologies
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="shrink-0"
              >
                <Image
                  src="/mypic.jpg"
                  alt="Profile"
                  width={180}
                  height={180}
                  className="rounded-xl grayscale"
                />
              </motion.div>
            </div>
          </Card>

          {/* Social Links Card */}
          <Card className="col-span-full rounded-xl bg-white p-6 shadow-sm lg:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "X",
                  icon: X,
                  color: "black",
                  link: "https://x.com/kinda_shub",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  color: "#0077B5",
                  link: "https://www.linkedin.com/in/shubhayu-bhowmick/",
                },
                {
                  name: "GitHub",
                  icon: Github,
                  color: "#333",
                  link: "https://github.com/Shubhayu-Bhowmick/",
                },
                {
                  name: "Dev",
                  icon: Code,
                  color: "#0A0A0A",
                  link: "https://dev.to/kinda_shub",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center justify-center rounded-lg p-4 transition-colors hover:bg-gray-100"
                >
                  <social.icon className="h-6 w-6 transition-colors duration-300 ease-in-out" />
                  <span className="mt-2 text-sm text-gray-600">
                    {social.name}
                  </span>
                  <style jsx>{`
                    a:hover svg {
                      color: ${social.color};
                    }
                  `}</style>
                </motion.a>
              ))}
            </div>
          </Card>

          {/* Projects Section */}
          <Card className="col-span-full rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-900">Projects</h3>
              <Link
                href="/projects"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                View All
              </Link>
            </div>
            <div className="mt-6">
              <div className="space-y-4">
                <div className="flex justify-between max-w-44 items-end">
                  <Image
                    src="/alera.webp"
                    alt="Project Logo"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <h4 className="text-3xl font-medium text-gray-900">
                    Alera Ai
                  </h4>
                </div>
                <p className="text-gray-600">
                  Alera AI is an intelligent platform for creating and
                  personalizing online courses effortlessly.
                </p>
              </div>
            </div>
          </Card>

          {/* Thoughts Section */}
          <Card className="col-span-full rounded-xl bg-white p-6 shadow-sm lg:col-span-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-900">Thoughts</h3>
              <Link
                href="/thoughts"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                View All
              </Link>
            </div>
            <div className="mt-6 space-y-6">
              <article className="space-y-2">
                <time className="text-sm text-gray-500">October 1st, 2024</time>
                <h4 className="text-lg font-medium text-gray-900">
                  Build a Blog App with Next.js 15 and Sanity.io
                </h4>
              </article>
            </div>
          </Card>

          {/* Outside Work Section */}
          <Card className="col-span-full rounded-xl bg-white p-6 shadow-sm">
            <Newsletter />
          </Card>
        </div>
      </div>
    </div>
  );
}
