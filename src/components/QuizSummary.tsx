import quizCompleteImg from "../assets/quiz-complete.png";
import quizQuestions from "../questions.ts";

export default function Summary({
  userAnswers,
}: {
  userAnswers: (string | null)[];
}) {
  const answerSummary = {
    skipped: userAnswers.filter((answer) => answer === null),
    correct: userAnswers.filter(
      (answer, index) => answer === quizQuestions[index].answers[0]
    ),
    wrong: userAnswers.filter(
      (answer, index) =>
        answer !== null && answer !== quizQuestions[index].answers[0]
    ),
  };

  const skippedPercent = Math.round(
    (answerSummary.skipped.length / userAnswers.length) * 100
  );
  const correctAnswersPercent = Math.round(
    (answerSummary.correct.length / userAnswers.length) * 100
  );

  const wrongAnswersPercent = Math.round(
    (answerSummary.wrong.length / userAnswers.length) * 100
  );

  return (
    <article className="w-full max-w-[40rem] my-[2rem] mx-auto py-[2rem] px-[1.5rem] bg-linear-180 from-0% from-[#a17eda] to-100% to-[#895fc4] text-(--text-black) rounded-[0.5rem] shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)]">
      <section className="pb-[2rem]">
        <img
          className="w-[8rem] h-[8rem] bg-(--color-lilac-400) object-contain mx-auto mb-[1rem] p-[1rem] drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] border-2 border-(--color-purple-400) rounded-[50%]"
          src={quizCompleteImg}
          alt="Trophy icon"
        />
        <h2 className="uppercase font-(--font-Roboto) text-title-lg text-(--color-purple-400)">
          Quiz Completed
        </h2>
        <div className="flex w-full max-w-[70%] justify-around mx-auto gap-[0.75rem] font-(--font-Roboto-Condensed) border-b-2 border-b-(--text-purple-300) pb-[3rem]">
          <p className="flex flex-col flex-1">
            <span className="text-title-lg text-(--text-purple-300)">
              {`${skippedPercent}%`}
            </span>
            <span className="uppercase text-(--text-purple-600) mt-[-0.7rem] ml-[0.2rem] tracking-[0.1rem]">
              Skipped
            </span>
          </p>
          <p className="flex flex-col flex-1">
            <span className="text-title-lg text-(--text-purple-300)">
              {" "}
              {`${correctAnswersPercent}%`}
            </span>
            <span className="uppercase text-(--text-purple-600) mt-[-0.7rem] ml-[0.2rem] tracking-[0.1rem]">
              Answered Correctly
            </span>
          </p>
          <p className="flex flex-col flex-1">
            <span className="text-title-lg text-(--text-purple-300)">
              {" "}
              {`${wrongAnswersPercent}%`}
            </span>
            <span className="uppercase text-(--text-purple-600) mt-[-0.7rem] ml-[0.2rem] tracking-[0.1rem]">
              Answered Incorrectly
            </span>
          </p>
        </div>
      </section>
      <section>
        <ol className="flex flex-col gap-[3rem]">
          {userAnswers.map((answer, index) => {
            const isCorrect = answer === quizQuestions[index].answers[0];
            const isSkipped = answer === null;

            return (
              <li key={index}>
                <h3 className="flex items-center justify-center bg-(--color-purple-800) text-base text-white font-(--font-Roboto-Condensed) w-[2rem] h-[2rem] rounded-full mx-auto text-center">
                  {index + 1}
                </h3>
                <p className="text-(--text-purple-600) mt-[0.2rem]">
                  {quizQuestions[index].text}
                </p>
                <p
                  className={`font-(--font-Roboto-Condensed) font-bold my-[0.25rem] text-balance ${
                    isSkipped
                      ? " text-(--text-lilac-300)"
                      : isCorrect
                      ? " text-(--text-green)"
                      : " text-(--text-magenta)"
                  }`}
                >
                  {answer ?? "Skipped"}
                </p>
              </li>
            );
          })}
        </ol>
      </section>
    </article>
  );
}
