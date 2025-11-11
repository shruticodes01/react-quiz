import { useRef, useEffect } from "react";

export default function StartQuiz({
  open,
  onStart,
}: {
  open: boolean;
  onStart: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className="w-full h-fit max-w-[50rem] mx-auto my-[16rem] px-[2rem] py-[8rem] bg-(--bg-lilac-200)/90 shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] rounded-[0.5rem] font-bold"
      ref={dialogRef}
    >
      <button
        className="max-w-[50%] w-full inline-block py-[1rem] px-[2rem] text-sm font-[Roboto-Condensed] bg-(--color-purple-400)/90 text-(--text-light-lilac-100) drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] hover:bg-(--bg-dusty-yellow) focus:bg-(--bg-dusty-yellow) hover:text-(--text-purple-800) focus:text-(--text-purple-800)  uppercase rounded-[1.5rem] cursor-pointer transition-all duration-400 ease-in-out"
        onClick={onStart}
      >
        Start Quiz
      </button>
    </dialog>
  );
}
