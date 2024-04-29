import { Button } from "flowbite-react";
import RockPaperScissor from "../assets/RockPaperScissor.png";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Rock Paper Scissors</h2>
        <p className="text-gray-500 my-2">
          Immerse Yourself in the Classic Battle: Rock Paper Scissors Game
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://ankit-dhattarwal.github.io/Rock-Paper-Scissors-master/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={RockPaperScissor} />
      </div>
    </div>
  );
}
