import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0B1120]/90 via-[#111827]/90 to-[#0B1120]/90 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-5xl font-black tracking-tight"
        >
          <span className="text-yellow-400">JS</span>
          <span className="text-white">Forge</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-xl font-bold text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/tutorials"
            className="text-xl font-bold text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Tutorials
          </Link>

          <Link
            to="/quiz"
            className="text-xl font-bold text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Quiz
          </Link>

          <Link
            to="/mock-interview"
            className="text-xl font-bold text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Mock Interview
          </Link>

          <Link
            to="/codelab"
            className="text-xl font-bold text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Code Lab
          </Link>
        </div>

        {/* CTA Button */}
       <Link
  to="/codelab"
  className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition duration-300"
       >
  Get Started
   </Link>

      </div>
    </nav>
  );
}