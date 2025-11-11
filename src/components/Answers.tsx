import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onAnswerSelect,
}: {
  answers: string[];
  selectedAnswer: string;
  answerState: string;
  onAnswerSelect?: (answer: string) => void;
}) {
  const shuffledAnswers = useRef<string[] | null>(null);
  if (!shuffledAnswers.current) {
    /// if shuffledAnswers is undefined then we shuffle the answers
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="flex flex-col items-center gap-[0.5rem]">
      {shuffledAnswers.current.map((answer: string) => {
        const isSelected = selectedAnswer === answer;
        const btnClasses =
          "w-full inline-block py-[1rem] px-[2rem] rounded-[1.5rem] hover:bg-purple-500 focus:bg-purple-500 hover:text-white focus:text-white cursor-pointer transition-all duration-400 ease-in-out";
        let btnBackgroundColor = " bg-(--bg-dusty-blue)";
        const variantAnswerStateClasses = {
          answered: " bg-(--bg-orange)",
          correct: " bg-(--bg-electric-green)",
          wrong: " bg-(--bg-fuschia)",
        };

        if (
          (answerState === "answered" ||
            answerState === "correct" ||
            answerState === "wrong") &&
          isSelected
        ) {
          btnBackgroundColor = variantAnswerStateClasses[answerState];
        }
        return (
          <li
            className="w-full text-sm font-[Roboto-Condensed] bg-(--bg-dusty-blue) text-(--color-purple-800) rounded-[1.5rem]"
            key={answer}
          >
            <button
              onClick={() => onAnswerSelect?.(answer)}
              className={`${btnClasses} ${btnBackgroundColor}`}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
