import React, { useState } from "react";
import "./App.css";

import Baron from "./img/Baron.jpeg";
import Duncan from "./img/Duncan.jpeg";
import Jessica from "./img/Jessica.jpeg";
import Liet from "./img/Liet.jpeg";
import Thufir from "./img/Thufir.jpeg";
import Yueh from "./img/Yueh.jpeg";
import Paul from "./img/Paul.jpeg";
import Leto from "./img/Leto.jpeg";
import Gurney from "./img/Gurney.jpeg";
import Chani from "./img/Chani.jpeg";

function App() {
  const [currentScore, setCurrentScore] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  const initialData = [
    {
      id: 1,
      character: "Baron Vladimir",
      imgSrc: Baron,
    },
    {
      id: 2,
      character: "Duncan Idaho",
      imgSrc: Duncan,
    },
    {
      id: 3,
      character: "Lady Jessica",
      imgSrc: Jessica,
    },
    {
      id: 4,
      character: "Liet-Kynes",
      imgSrc: Liet,
    },
    {
      id: 5,
      character: "Thufir Hawat",
      imgSrc: Thufir,
    },
    {
      id: 6,
      character: "Dr. Wellington Yueh",
      imgSrc: Yueh,
    },
    {
      id: 7,
      character: "Paul Atreides",
      imgSrc: Paul,
    },
    {
      id: 8,
      character: "Gurney Halleck",
      imgSrc: Gurney,
    },
    {
      id: 9,
      character: "Duke Leto Atreides",
      imgSrc: Leto,
    },
    {
      id: 10,
      character: "Chani",
      imgSrc: Chani,
    },
  ];

  const shuffleArray = () => {
    const newArray = [];
    const indexTried = [];

    for (let index = 0; index < initialData.length; index++) {
      let randomIndex = Math.floor(Math.random() * initialData.length);
      while (indexTried.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * initialData.length);
      }

      newArray.push(initialData[randomIndex]);
      indexTried.push(randomIndex);
    }
    return newArray;
  };

  return (
    <>
      <div>
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
        <div className="mainGrid">
          {shuffleArray().map((item, idx) => {
            return (
              <div
                key={idx}
                className="singleItem"
                onClick={() => {
                  if (!currentScore.includes(item.id)) {
                    setCurrentScore([...currentScore, item.id]);
                  } else {
                    if (currentScore.length > highestScore) {
                      setHighestScore(currentScore.length);
                    }
                    setCurrentScore([]);
                  }
                }}
              >
                <img src={item.imgSrc} alt="character" />
                <p>{item.character}</p>
              </div>
            );
          })}
        </div>
        <footer>
          Made by{" "}
          <a
            href="https://www.ishmamchowdhury.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ishmam Chowdhury
          </a>{" "}
          for{" "}
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
