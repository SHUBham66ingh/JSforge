import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import CodeLab from "./pages/CodeLab";
import Tutorials from "./pages/Tutorials";
import MockInterview from "./pages/MockInterview";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/codelab" element={<CodeLab />} />
      <Route path="/tutorials" element={<Tutorials/>} />
      <Route path="/mock-interview" element={<MockInterview />} />
    </Routes>
  );
}

export default App;