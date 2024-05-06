import React from "react";
import { useState, useEffect } from "react";
import MethodComponent from "./MethodComponent";
import InputComponent from "./InputComponent";
import "./Form.css";

const FormComponent = ({
  setResponseReceived,
  onApiResponse,
  startWord,
  setStartWord,
  endWord,
  setEndWord,
  setNotInDict,
  setLastCheckedWords,
}) => {
  const [isDone, setIsDone] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [method, setMethod] = useState("ucs");

  const methodOptions = [
    { value: "ucs", text: "UCS" },
    { value: "gbfs", text: "GBFS" },
    { value: "a*", text: "A*" },
  ];

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  async function handleSubmit() {
    if (!startWord || !endWord) {
      alert("Please fill in the input field first!!");
      return;
    }
    if (startWord === endWord) {
      alert("Blud its literally the same thing");
      return;
    }
    if (startWord.length !== endWord.length) {
      alert("Bro its not the same length...");
      return;
    }

    setNotInDict(null);
    setLastCheckedWords({ startWord: "", endWord: "" });
    setButtonEnabled(false);
    setResponseReceived(false);

    const data = {
      startWord: startWord,
      endWord: endWord,
      method: method,
    };
    console.log("Sending data to server:", data);

    fetch("http://localhost:8080/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("Raw response received:", data);
          onApiResponse(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      })
      .finally(() => {
        setResponseReceived(true);
        setButtonEnabled(true);
        setIsDone(true);
      });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      autoComplete="off"
    >
      <div className="container">
        <div className="top">
          <MethodComponent
            labelId="methodOption"
            selectId="method"
            options={methodOptions}
            onMethodChange={setMethod}
            className="method-select"
          />
        </div>
        <div className="bottom">
          <InputComponent
            label="Start Word"
            id="start-field"
            autoComplete="off"
            className="input-box"
            value={startWord}
            setValue={setStartWord}
          />
          <InputComponent
            label="End Word"
            id="end-field"
            autoComplete="off"
            className="input-box"
            value={endWord}
            setValue={setEndWord}
          />
        </div>
        <br />
        <button className="find-button" type="submit" disabled={!buttonEnabled}>
          Find!
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
