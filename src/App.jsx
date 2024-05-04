import React from "react";
import { useState } from "react";
import LetterBox from "./components/LetterBox";
import WordContainer from "./components/WordContainer";
import Solution from "./components/Solution";
import MethodOption from "./components/MethodComponent";
import FormComponent from "./components/Form";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="App">
      {/* <WordContainer word={"cat"} matchWord={"cog"} /> */}
      <FormComponent isLoading={isLoading} setLoading={setLoading} />
    </div>
  );
}

export default App;
