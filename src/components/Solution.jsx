import React from "react";
import WordContainer from "./WordContainer";
import "./Solution.css";
import InformationComponent from "./InformationComponent";

const Solution = ({
  words,
  comparisonWord,
  runtime,
  nodeTraversed,
  pathLength,
}) => {
  return (
    <div className="solution-container">
      {words.map((word, index) => (
        <WordContainer key={index} word={word} matchWord={comparisonWord} />
      ))}
      <InformationComponent
        runtime={runtime}
        nodeTraversed={nodeTraversed}
        pathLength={pathLength}
        isSol={true}
      />
    </div>
  );
};

export default Solution;
