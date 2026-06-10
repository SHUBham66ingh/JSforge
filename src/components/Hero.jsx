import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
  <section className="h-screen overflow-hidden flex flex-col justify-center items-center text-center px-6">

      {/* Website Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-8xl md:text-[10rem] font-black"
      >
        <span className="text-yellow-400">JS</span>
        <span className="text-white">Forge</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-3xl text-slate-300 mt-6 font-semibold"
      >
        Forge Your JavaScript Skills.
      </motion.p>

      {/* Animated Quote */}
      <div className="mt-10 h-20">
        <TypeAnimation
          sequence={[
            "Learn JavaScript. Build Real Projects.",
            2000,
            "Master Concepts Through Practice.",
            2000,
            "Crack Interviews With Confidence.",
            2000,
            "Code. Learn. Grow.",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-yellow-300 text-xl md:text-2xl font-medium"
        />
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-6 mt-8"
      >
        <Link to="/codelab">
  <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition">
    Start Learning
  </button>
     </Link>

      <Link to="/tutorials">
  <button className="border border-slate-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:border-yellow-400 hover:text-yellow-400 transition">
    Explore Tutorials
  </button>
     </Link>
      </motion.div>

      <div className="w-full border-t border-slate-800 pt-6 mt-20">
<p className="text-white font-black tracking-wide">
   © 2026 JSForge. All Rights Reserved.
</p>
</div>
    </section>
  );
}