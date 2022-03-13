import GameButton from "./GameButton";

export default function Game() {
  return (
    <div className="game">
      <GameButton color="#FF0000" onClick={() => {}} />
      <GameButton color="#0000FF" onClick={() => {}} />
      <GameButton color="#00FF00" onClick={() => {}} />
      <GameButton color="#FFCC00" onClick={() => {}} />
    </div>
  );
}
