import React from "react";
import WordContainer from "./WordContainer";
import "./Solution.css";

const Solution = ({ words, comparisonWord }) => {
  return (
    <div className="solution-container">
      {words.map((word, index) => (
        <WordContainer key={index} word={word} matchWord={comparisonWord} />
      ))}
    </div>
  );
};

export default Solution;
