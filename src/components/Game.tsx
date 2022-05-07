import React, { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
import GameButton from "./GameButton";
import StartButton from "./StartButton";

const btnsColors = ["#FF0000", "#0000FF", "#00FF00", "#FFCC00"];

function randint(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

const Game: React.FC = () => {
  const [btnsSequence, setBtnsSequence] = useState<number[]>([]);
  const [currBtnIndex, setCurrBtnIndex] = useState<number | null>(null);
  const [doGap, setDoGap] = useState<boolean>(false);
  let playerIndex = 0;

  useEffect(() => {
    if (currBtnIndex === null || currBtnIndex >= btnsSequence.length) {
      return;
    }
    if (doGap && currBtnIndex === btnsSequence.length - 1) {
      setCurrBtnIndex(null);
      setDoGap(false);
      return;
    }
    setTimeout(() => {
      if (doGap) {
        unstable_batchedUpdates(() => {
          setCurrBtnIndex(currBtnIndex + 1);
          setDoGap(false);
        });
      } else {
        setDoGap(true);
      }
    }, 200);
  }, [btnsSequence, currBtnIndex, doGap]);

  const extractRndBtn = (): void => {
    setBtnsSequence([...btnsSequence, randint(0, 3)]);
    setCurrBtnIndex(0);
    setDoGap(false);
  };

  const handleBtnClick = (btnNum: number): void => {
    if (btnsSequence.length === 0) {
      return;
    }
    if (btnNum !== btnsSequence[playerIndex]) {
      setBtnsSequence([]);
      return;
    }
    playerIndex++;
    if (playerIndex >= btnsSequence.length) {
      setTimeout(() => {
        extractRndBtn();
      }, 300);
    }
  };

  return (
    <div className="game">
      {btnsSequence.length === 0 &&
        <StartButton onClick={extractRndBtn} />
      }
      <div className="btns-wrapper">
        {btnsColors.map((color, i) => (
          <GameButton
            key={color}
            color={color}
            active={currBtnIndex !== null && i === btnsSequence[currBtnIndex] && !doGap}
            disabled={currBtnIndex !== null}
            onClick={() => handleBtnClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
