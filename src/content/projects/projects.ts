export interface Project {
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Alera Ai",
      description: "Alera AI is an AI course maker application built with Next.js, Gemini AI, PostgreSQL, Upstash Redis and Drizzle ORM, designed to create, manage, and deliver interactive AI-driven courses.",
      date: "Dec 1, 2024",
      image: "/aleraai2.png",
      link: "/projects/alera",
    },
    {
      title: "AI Interior Decor",
      description: "An AI-powered interior design tool built with Next.js, Tailwind CSS, and the Realistic Vision V3.0 API, which uses inpainting, segmentation, and MLSD ControlNets to generate realistic room transformations from user-uploaded images and text prompts.",
      date: "Sep 4, 2024",
      image: "/aidecor.png",
      link: "/projects/ai-decor",
    },
    {
      title: "Evently",
      description:
        "Evently is a MERN-based platform that lets users explore, host, and participate in events, focusing on mentorship and workshops led by industry experts.",
      date: "January 22, 2024",
      image: "/eventlist.png",
      link: "/projects/evently",
    },
    {
      title: "Trimlink",
      description:
        "Trimlink is a sleek and efficient URL shortener built with Next.js, Drizzle ORM, and Neon, offering quick link management and tracking.",
      date: "June 22, 2024",
      image: "/trimlink.png",
      link: "/projects/trimlink",
    },
    {
      title: "WebWhiz",
      description:
        "WebWiz is an AI-powered app built with Next.js, Upstash, and Vercel AI SDK, designed to seamlessly chat with any website.",
      date: "Nov 10, 2024",
      image: "/aiwebchat.png",
      link: "/projects/webwhiz",
    },
    {
      title: "NextJs 15 Blog Template",
      description:
        "A Next.js 15 blog powered by Sanity.io, offering a dynamic and customizable platform for creating, managing, and publishing content with ease.",
      date: "September 27, 2024",
      image: "/nextjsblog.png",
      link: "/projects/blog-app",
    },
  ];

  
  