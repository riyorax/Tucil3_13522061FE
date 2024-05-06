import React from "react";
import WordContainer from "./WordContainer";
import InformationComponent from "./InformationComponent";
import "./NoSolution.css";

const NoSolution = ({ startWord, endWord, runtime, nodeTraversed }) => {
  const questionMarks = "?".repeat(startWord.length);
  return (
    <div className="nosolution-container">
      <WordContainer word={startWord} matchWord={endWord} />
      <WordContainer word={questionMarks} matchWord={startWord} />
      <WordContainer word={endWord} matchWord={startWord} />
      <InformationComponent runtime={runtime} nodeTraversed={nodeTraversed} />
    </div>
  );
};

export default NoSolution;
