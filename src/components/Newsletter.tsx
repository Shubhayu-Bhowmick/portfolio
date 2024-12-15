"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>(""); // Ensure error is a string
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (success) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email, name }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Subscription failed.");

      setSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-md text-center relative"
    >
      <h3 className="mb-2 text-2xl font-bold text-gray-900">
        Subscribe to my newsletter
      </h3>
      <p className="mb-6 text-gray-600">Get updates on my work and projects.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Your Name" required className="h-12" />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12"
        />
        <Button
          type="submit"
          className="h-12 w-full bg-gray-900 text-white hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <p className="text-sm text-gray-500">
          We care about your data. Read our{" "}
          <a
            href="/privacy"
            className="text-gray-900 underline hover:text-gray-700"
          >
            privacy policy
          </a>
          .
        </p>
      </form>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50"
          >
            Thank you for subscribing to my newsletter!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
