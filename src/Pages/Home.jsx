import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <AnimatedBackground />

      <Navbar />

      <div className="flex-1">
        <Hero />
      </div>
    </div>
  );
}