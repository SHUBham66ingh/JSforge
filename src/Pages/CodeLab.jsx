import { useState } from "react";
import Editor from "@monaco-editor/react";
import Navbar from "../components/Navbar";

export default function CodeLab() {
  const [code, setCode] = useState(`// Welcome to JSForge Code Lab 🚀

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Shubham"));
`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const logs = [];

      const originalLog = console.log;

      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      eval(code);

      console.log = originalLog;

      setOutput(logs.join("\n"));
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Header */}
      <div className="py-6 text-center border-b border-slate-800 py-12">
        <h1 className="text-5xl md:text-6xl font-black">
          <span className="text-yellow-400">JSForge</span>
          <span className="text-white"> Code Lab</span>
        </h1>
      </div>

      {/* Split Screen */}
      <div className="flex h-[calc(100vh-120px)]">
        {/* LEFT SIDE - CODE EDITOR */}
        <div className="w-1/2 border-r border-slate-700 flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 bg-slate-900">
            <h2 className="text-xl font-bold text-yellow-400">
              JavaScript Editor
            </h2>

            <button
              onClick={runCode}
              className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:scale-105 transition"
            >
              Run Code
            </button>
          </div>

          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
            />
          </div>
        </div>

        {/* RIGHT SIDE - OUTPUT */}
        <div className="w-1/2 flex flex-col">
          <div className="px-6 py-4 bg-slate-900 border-b border-slate-700">
            <h2 className="text-xl font-bold text-green-400">
              Output
            </h2>
          </div>

          <div className="flex-1 p-6 bg-[#0B1120] overflow-auto">
            <pre className="text-green-300 whitespace-pre-wrap">
              {output || "Click 'Run Code' to execute JavaScript"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}