import React from "react";
import LetterBox from "./LetterBox";
import "./WordContainer.css";

const WordContainer = ({ word, matchWord }) => {
  return (
    <div className="word-container">
      {word.split("").map((letter, index) => (
        <LetterBox
          key={index}
          letter={letter}
          isValid={matchWord && letter === matchWord[index]}
        />
      ))}
    </div>
  );
};

export default WordContainer;
