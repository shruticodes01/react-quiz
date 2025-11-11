import { useState } from "react";
import ProgressBar from "./ProgressBar.tsx";
import Answers from "./Answers.tsx";
import quizQuestions from "../questions.ts";

interface AnswerState {
  selectedAnswer: string;
  isCorrect: boolean | null;
}

export default function Question({
  questionIndex,
  onAnswerSelect,
  onSkipAnswer,
}: {
  questionIndex: number;
  onAnswerSelect?: (answer: string) => void;
  onSkipAnswer?: () => void;
}) {
  const [answer, setAnswer] = useState<AnswerState>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let TIMER = 10000;
  if (answer.selectedAnswer) {
    TIMER = 1000;
  }

  if (answer.isCorrect !== null) {
    TIMER = 2000;
  }

  function handleAnswerSelect(answer: string) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: quizQuestions[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onAnswerSelect?.(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div>
      <ProgressBar
        key={TIMER}
        timeout={TIMER}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2 className="font-[Roboto] text-title-sm text-(--text-light-lilac-200) font-normal mt-[0.5rem] mb-[2.5rem]">
        {quizQuestions[questionIndex].text}
      </h2>

      <Answers
        answers={quizQuestions[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
}
