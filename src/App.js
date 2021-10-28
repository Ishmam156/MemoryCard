import React, { useState } from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Footer from "./components/Footer";
import DisplayOptions from "./components/DisplayOptions";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [winner, setWinner] = useState(false);

  return (
    <>
      <div>
        <Header currentScore={currentScore} highestScore={highestScore} />
        {winner && <Winner />}
        {!winner && (
          <DisplayOptions
            // initialData={initialData}
            currentScore={currentScore}
            highestScore={highestScore}
            setWinner={setWinner}
            setCurrentScore={setCurrentScore}
            setHighestScore={setHighestScore}
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
