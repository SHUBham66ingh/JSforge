import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full" />

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text-7xl font-extrabold text-yellow-400 z-10"
      >
        JSForge
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 mt-4 text-lg z-10"
      >
        Learn • Build • Master JavaScript
      </motion.p>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 text-green-400 font-mono text-sm z-10"
      >
        &gt; Initializing platform...
      </motion.div>

      {/* Progress Bar */}
      <div className="w-72 h-2 bg-gray-800 rounded-full mt-6 overflow-hidden z-10">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Percentage */}
      <motion.p
        className="text-gray-500 mt-3 text-sm z-10"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        Loading resources...
      </motion.p>
    </div>
  );
}