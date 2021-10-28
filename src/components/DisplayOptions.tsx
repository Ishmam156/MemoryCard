import React, { Dispatch, SetStateAction } from "react";
import { initialData, ImageData} from "../util/helper";

type Props = {
  highestScore: number;
  currentScore: number[];
  setWinner: Dispatch<SetStateAction<boolean>>;
  setCurrentScore: Dispatch<SetStateAction<number[] | []>>
  setHighestScore: Dispatch<SetStateAction<number>>
}

const DisplayOptions: React.FC<Props> = ({
  currentScore,
  highestScore,
  setWinner,
  setCurrentScore,
  setHighestScore,
}) => {
  const shuffleArray = () => {
    const newArray: ImageData[] = [];
    const indexTried: number[] = [];

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
    <div className="mainGrid">
      {shuffleArray().map((item, idx) => {
        return (
          <div
            key={idx}
            className="singleItem"
            onClick={() => {
              if (!currentScore.includes(item.id)) {
                setCurrentScore([...currentScore, item.id]);
                if (currentScore.length + 1 === initialData.length) {
                  setWinner(true);
                }
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
  );
}

export default DisplayOptions;
