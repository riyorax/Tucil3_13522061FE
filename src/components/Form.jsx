import React from "react";
import { useState, useEffect } from "react";
import MethodComponent from "./MethodComponent";
// import "./Form.css";

const FormComponent = ({ isLoading, setLoading }) => {
  //   const [startWord, setStartWord] = useState("");
  //   const [endWord, setEndWord] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [selectedMethod, setSelectedMethod] = useState("UCS");

  const methodOptions = [
    { value: "ucs", text: "UCS" },
    { value: "gbfs", text: "GBFS" },
    { value: "a*", text: "A*" },
  ];

  async function handleSubmit() {
    if (!isInputValid || !startWord || !endWord || fromValue === toValue) {
      alert(
        "Input Invalid, make sure you choose the keywords from displayed card!"
      );
      return;
    }

    setButtonEnabled(false);
    setLoading(true);
    const data = {
      method: selectedMethod,
      start: startWord,
      end: endWord,
    };

    // fetch("http://localhost:8080/save-data", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data) {
    //       setGraphData(data);
    //       setRuntime(data.details[0].runtime);
    //       setResult(data.details[1].totalpath);
    //       setDepth(data.details[2].depth);
    //       setTotArticle(data.details[3].totArticle);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //     setButtonEnabled(true);
    //     setIsDone(true);
    //   });
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
            onMethodChange={setSelectedMethod}
            className="method-select"
          />
        </div>
        <div className="bottom"></div>
        <br />
        <button className="find-button" type="submit" disabled={!buttonEnabled}>
          Find!
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
