import { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Quiz from "./components/Quiz.tsx";
import StartQuiz from "./components/StartQuiz.tsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleStartButton() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <main className="w-full h-full flex justify-center">
        <StartQuiz open={isModalOpen} onStart={handleStartButton} />
        {!isModalOpen && <Quiz />}
      </main>
    </>
  );
}

export default App;
