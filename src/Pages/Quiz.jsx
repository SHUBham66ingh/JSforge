import { useState } from "react";
import { quizQuestions } from "../data/quizzes";
import Navbar from "../components/Navbar";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const calculateScore = () => {
    let total = 0;

    quizQuestions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        total++;
      }
    });

    setScore(total);
  };

  const restartQuiz = () => {
    setAnswers({});
    setScore(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6">
      <Navbar />

      {/* Header */}
      <div className="text-center mb-14 py-12">
        <h1 className="text-6xl md:text-7xl font-black leading-tight">
          <span className="text-yellow-400">JS</span>
          <span className="text-white">
            {" "}
            Knowledge Assessment
          </span>
        </h1>
      </div>

      {score === null ? (
        <>
          {/* Questions */}
          <div className="max-w-5xl mx-auto">
            {quizQuestions.map((q, index) => (
              <div
                key={index}
                className="bg-slate-800/80 border border-slate-700 p-8 rounded-3xl mb-8 shadow-lg hover:border-yellow-400/30 transition duration-300"
              >
                <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                  Question {index + 1}
                </h2>

                <p className="text-xl mb-6">
                  {q.question}
                </p>

                <div className="space-y-4">
                  {q.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer bg-slate-900/50 p-4 rounded-xl hover:bg-slate-700 transition"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={answers[index] === option}
                        onChange={() =>
                          handleChange(index, option)
                        }
                        className="w-5 h-5"
                      />

                      <span className="text-lg">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-12">
            <button
              onClick={calculateScore}
              className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] transition duration-300"
            >
              Evaluate My Skills
            </button>
          </div>
        </>
      ) : (
        /* Result Section */
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <h2 className="text-8xl font-black text-yellow-400">
            {score}/10
          </h2>

          <h3 className="text-4xl font-bold mt-6">
            Assessment Completed Successfully 🎉
          </h3>

          <p className="text-slate-300 text-xl mt-6 max-w-3xl">
            {score >= 8
              ? "Outstanding performance! You demonstrate a strong understanding of JavaScript fundamentals, modern concepts, and practical development techniques."
              : score >= 5
              ? "Good work! Your foundation is solid. Continue practicing advanced concepts and real-world applications to strengthen your expertise."
              : "You're on the right path. Focus on mastering the fundamentals, building projects, and practicing consistently to improve your JavaScript skills."}
          </p>

          {/* Performance Badge */}
          <div className="mt-8">
            <span className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full text-lg font-semibold">
              {score >= 8
                ? "🏆 Advanced Level"
                : score >= 5
                ? "🚀 Intermediate Level"
                : "📚 Beginner Level"}
            </span>
          </div>

          {/* Restart Button */}
          <button
            onClick={restartQuiz}
            className="mt-12 bg-white text-black px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition duration-300"
          >
            Retake Assessment
          </button>
        </div>
      )}
    </div>
  );
}