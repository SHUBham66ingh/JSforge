import { useState } from "react";
import Navbar from "../components/Navbar";

const questions = [
  {
    question: "What is the difference between let, const and var?",
    answer:
      "var is function scoped, while let and const are block scoped. const cannot be reassigned.",
  },
  {
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM used by React to efficiently update the UI.",
  },
  {
    question: "Explain closures in JavaScript.",
    answer:
      "A closure allows a function to access variables from its outer scope even after the outer function has finished executing.",
  },
  {
    question: "What is time complexity?",
    answer:
      "Time complexity measures how the runtime of an algorithm grows with input size.",
  },
  {
    question: "What are React Hooks?",
    answer:
      "Hooks are functions that let you use state and lifecycle features in functional components.",
  },
];

export default function MockInterview() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % questions.length);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-black text-center mb-4">
          <span className="text-yellow-400">Mock</span> Interview
        </h1>


        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">
          <div className="mb-6">
            <span className="text-yellow-400 font-bold">
              Question {index + 1}
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-8">
            {questions[index].question}
          </h2>

          {showAnswer && (
            <div className="bg-slate-800 p-6 rounded-2xl mb-8">
              <h3 className="text-green-400 font-bold mb-3">
                Sample Answer
              </h3>

              <p className="text-slate-300">
                {questions[index].answer}
              </p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => setShowAnswer(true)}
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Show Answer
            </button>

            <button
              onClick={nextQuestion}
              className="border border-slate-600 px-6 py-3 rounded-xl font-bold hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Next Question
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-10">
          <div className="bg-slate-900 p-5 rounded-xl text-center">
            JavaScript
          </div>

          <div className="bg-slate-900 p-5 rounded-xl text-center">
            React
          </div>

          <div className="bg-slate-900 p-5 rounded-xl text-center">
            DSA
          </div>

          <div className="bg-slate-900 p-5 rounded-xl text-center">
            System Design
          </div>
        </div>
      </div>
    </div>
  );
}