import { useState, useCallback } from "react";
import quizQuestions from "../questions.ts";
import Summary from "./QuizSummary.tsx";
import Question from "./Question.tsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === quizQuestions.length;

  const handleAnswerSelect = useCallback(function handleAnswerSelect(
    selectedAnswer: string | null
  ) {
    setUserAnswers((prevSelectedAnswers) => {
      return [...prevSelectedAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerSelect(null),
    [handleAnswerSelect]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <article className="w-full h-full max-w-[50rem] mx-auto p-[2rem] bg-transparent bg-linear-180 from-0% from-[#3e2a60] to-100% to-[#321061] shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] rounded-[0.5rem]">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onAnswerSelect={handleAnswerSelect}
        onSkipAnswer={handleSkipAnswer}
      />
    </article>
  );
}
