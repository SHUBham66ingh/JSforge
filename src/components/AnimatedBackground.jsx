import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B1120]">

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-3xl backdrop-blur-xl
                     border border-white/10
                     bg-white/5"
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: `${80 + Math.random() * 120}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}