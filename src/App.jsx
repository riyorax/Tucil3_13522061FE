import React from "react";
import { useState } from "react";
import Solution from "./components/Solution";
import FormComponent from "./components/Form";
import TitleComponent from "./components/TitleComponent";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="App">
      <TitleComponent title="😭 WEEPER 😭" />
      <FormComponent isLoading={isLoading} setLoading={setLoading} />
      <Solution words={["cat", "cot", "cog", "dog"]} comparisonWord={"dog"} />
    </div>
  );
}

export default App;
