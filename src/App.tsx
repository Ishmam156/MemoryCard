import React, { useState } from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Footer from "./components/Footer";
import DisplayOptions from "./components/DisplayOptions";
import "./styles/App.css";

const App: React.FC = () => {
  const [currentScore, setCurrentScore] = useState<number[] | []>([]);
  const [highestScore, setHighestScore] = useState<number>(0);
  const [winner, setWinner] = useState<boolean>(false);

  return (
    <>
      <div>
        <Header currentScore={currentScore} highestScore={highestScore} />
        {winner && <Winner />}
        {!winner && (
          <DisplayOptions
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
