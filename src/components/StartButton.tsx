import React from "react";

interface Props {
  onClick: () => void
}

const StartButton: React.FC<Props> = (props) => {
  return (
    <button className="start-btn" onClick={props.onClick}>
      Play
    </button>
  );
};

export default StartButton;
