import React from "react";

type Props = {
  highestScore: number;
  currentScore: number[];
}

const Header: React.FC<Props> = ({ currentScore, highestScore }) => {
  return (
    <div className="header">
      <h1>Dune Memory Game</h1>
      <div className="scores">
        <div>
          Current Score: <span>{currentScore.length}</span>
        </div>
        <div>
          Highest Score: <span>{highestScore}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
