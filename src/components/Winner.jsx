import React from "react";

function Winner() {
  return (
    <div className="winnerDiv">
      <h1>Congratulations, you've won!</h1>
      <button onClick={() => window.location.reload(false)}>Play Again?</button>
    </div>
  );
}

export default Winner;
