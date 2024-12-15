export interface Project {
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Vyrall",
      description: "Revolutionizing Feedback Collection",
      date: "August 4, 2024",
      image: "/vyrall.png",
      link: "/projects/vyrall",
    },
    {
      title: "Alera Ai",
      description: "A minimal portfolio website built with React and Tailwind",
      date: "July 15, 2024",
      image: "/alera.png",
      link: "/projects/alera",
    },
    {
      title: "Blog App",
      description:
        "A beautiful task management application with real-time updates",
      date: "June 22, 2024",
      image: "/blog-app.png",
      link: "/projects/blog-app",
    },
  ];
  