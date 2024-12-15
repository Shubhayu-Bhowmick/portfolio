import { Inter } from "next/font/google";
//import Navbar from "@/components/Navbar";
//import { HeroParallax } from "@/components/ui/Hero_parallax";
import Hero from "@/components/Hero";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Hero />
    </div>
  );
}
