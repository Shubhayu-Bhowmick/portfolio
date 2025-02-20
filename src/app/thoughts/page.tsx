"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { posts } from "@/content/blogs/blogs";

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isFiltered = searchQuery.length > 0;

  const resetFilter = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-4xl font-bold"
        >
          Posts
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex items-center gap-3"
        >
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 rounded-lg border-gray-200 bg-white px-4 text-base"
          />
          {isFiltered && (
            <Button
              size="sm"
              variant="secondary"
              onClick={resetFilter}
              className="h-10 px-4"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </motion.div>

        <div className="space-y-12">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Link href={`/thoughts/${post.slug}`} className="block space-y-3">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </div>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-500">
              No posts found matching your search criteria.
            </p>
          )}
        </div>
      </main>

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
