import React from "react";
import "./LetterBox.css";

function LetterBox({ letter, isValid }) {
  const className = isValid ? "box box-green" : "box box-white";
  return <div className={className}>{letter}</div>;
}

export default LetterBox;
