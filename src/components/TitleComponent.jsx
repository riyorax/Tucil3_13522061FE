import React from "react";
import "./TitleComponent.css";

const TitleComponent = ({ title }) => {
  return (
    <div className="title-container">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default TitleComponent;
