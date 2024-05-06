import React from "react";
import "./NotInDictionary.css";

const NotInDictionary = ({ word }) => {
  return (
    <div className="notindict">
      <p>
        {" "}
        <strong>{word}</strong> is not in the dictionary.
      </p>
    </div>
  );
};

export default NotInDictionary;
