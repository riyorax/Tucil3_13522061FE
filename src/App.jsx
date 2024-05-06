import React from "react";
import { useState } from "react";
import Solution from "./components/Solution";
import FormComponent from "./components/Form";
import TitleComponent from "./components/TitleComponent";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [apiResponseData, setApiResponseData] = useState(null);
  function handleApiResponse(data) {
    setApiResponseData(data);
  }

  return (
    <div className="App">
      <TitleComponent title="😭 WEEPER 😭" />
      <FormComponent
        isLoading={isLoading}
        setLoading={setLoading}
        onApiResponse={handleApiResponse}
      />
      <Solution words={["cat", "cot", "cog", "dog"]} comparisonWord={"dog"} />
    </div>
  );
}

export default App;
