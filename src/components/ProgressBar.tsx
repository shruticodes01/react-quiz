import { useEffect, useState } from "react";
export default function ProgressBar({
  timeout,
  onTimeout,
  mode,
}: {
  timeout: number;
  onTimeout?: (() => void) | null;
  mode: string;
}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // const quizTimer = setTimeout(onTimeout, timeout);
    const quizTimer = setTimeout(() => {
      if (onTimeout) onTimeout();
    }, timeout);

    return () => {
      clearTimeout(quizTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return <progress className={mode} max={timeout} value={remainingTime} />;
}
