import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Hero />
    </div>
  );
}
