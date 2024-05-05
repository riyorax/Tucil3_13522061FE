import React from "react";
import "./InputComponent.css";
import { useState } from "react";

const InputComponent = ({ label, id }) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id} className="input-label">
          {label}
        </label>
        <input
          type="text"
          id={id}
          name={label}
          placeholder="Enter word here"
          className="input-box"
        />
      </div>
    </>
  );
};

export default InputComponent;
