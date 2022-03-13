import React from "react";

interface Props {
  color: string,
  active?: boolean,
  onClick: () => void
}

const GameButton: React.FC<Props> = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={"game-btn" + (props.active ? " active" : "")}
      onClick={props.onClick}
    ></button>
  );
};

export default GameButton;
