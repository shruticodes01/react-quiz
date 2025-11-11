import { useRef, useEffect } from "react";

export default function StartQuiz({
  open,
  onStart,
}: {
  open: boolean;
  onStart: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      buttonRef.current?.blur();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className="w-full h-fit max-w-200 mx-auto my-64 px-8 py-32 bg-(--bg-lilac-200)/90 shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] rounded-lg font-bold"
      ref={dialogRef}
      aria-modal="true"
      role="dialog"
    >
      <button
        ref={buttonRef}
        className="max-w-[50%] w-full inline-block py-4 px-8 text-sm font-[Roboto-Condensed] bg-purple-400/90 text-(--text-light-lilac-100) drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] hover:bg-(--bg-dusty-yellow) focus:bg-(--bg-dusty-yellow) hover:text-(--text-purple-800) focus:text-(--text-purple-800)  uppercase rounded-3xl cursor-pointer transition-all duration-400 ease-in-out"
        onClick={onStart}
        type="button"
      >
        Start Quiz
      </button>
    </dialog>
  );
}
