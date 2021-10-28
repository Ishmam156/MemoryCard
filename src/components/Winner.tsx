import React from "react";

const Winner: React.FC = () => {
  return (
    <div className="winnerDiv">
      <h1>Congratulations, you've won!</h1>
      <button onClick={() => window.location.reload()}>Play Again?</button>
    </div>
  );
}

export default Winner;
