import React from "react";
import "./InputComponent.css";
import { useState } from "react";

const InputComponent = ({ label, id, value, setValue }) => {
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputComponent;
