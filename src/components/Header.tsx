import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center mb-[2rem]">
      <img
        className="w-[3rem] h-[3rem] drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]"
        src={logoImg}
        alt="Notepad as quiz logo"
      />
      <h1 className="uppercase font-[Roboto] text-title-md tracking-[0.6rem] font-bold bg-clip-text">
        Reactquiz
      </h1>
    </header>
  );
}
