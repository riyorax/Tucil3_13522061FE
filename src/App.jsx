import React from "react";
import { useState } from "react";
import Solution from "./components/Solution";
import NoSolution from "./components/NoSolution";
import FormComponent from "./components/Form";
import TitleComponent from "./components/TitleComponent";
import NotInDictionary from "./components/NotInDictionaryComponent";
import "./App.css";
import { nodeModuleNameResolver } from "typescript";

function App() {
  const [responseReceived, setResponseReceived] = useState(false);
  const [apiResponseData, setApiResponseData] = useState(null);
  const [startWord, setStartWord] = useState("");
  const [endWord, setEndWord] = useState("");
  const [notInDict, setNotInDict] = useState(null);
  const [lastCheckedWords, setLastCheckedWords] = useState({
    startWord: "",
    endWord: "",
  });

  function handleApiResponse(data) {
    setApiResponseData(data);
    if (data.message === "startWord not in Dictionary") {
      setNotInDict({ type: "start", word: startWord });
    } else if (data.message === "endWord not in Dictionary") {
      setNotInDict({ type: "end", word: endWord });
    } else if (data.message === "both not in Dictionary") {
      setNotInDict({ type: "both", startWord, endWord });
    } else {
      setLastCheckedWords({ startWord, endWord });
    }
  }

  function getDictionaryErrorComponent() {
    if (!notInDict) return null;

    if (notInDict.type === "start") {
      return <NotInDictionary word={notInDict.word} />;
    } else if (notInDict.type === "end") {
      return <NotInDictionary word={notInDict.word} />;
    } else if (notInDict.type === "both") {
      return (
        <NotInDictionary
          word={`${notInDict.startWord} and ${notInDict.endWord}`}
        />
      );
    }
    return null;
  }

  return (
    <div className="App">
      <TitleComponent title="😭 WEEPER 😭" />
      <FormComponent
        setResponseReceived={setResponseReceived}
        onApiResponse={handleApiResponse}
        startWord={startWord}
        setStartWord={setStartWord}
        endWord={endWord}
        setEndWord={setEndWord}
        setNotInDict={setNotInDict}
        setLastCheckedWords={setLastCheckedWords}
      />
      {responseReceived ? (
        apiResponseData &&
        apiResponseData.solution &&
        apiResponseData.solution.length > 0 ? (
          <Solution
            words={apiResponseData.solution}
            comparisonWord={
              apiResponseData.solution[apiResponseData.solution.length - 1]
            }
            runtime={apiResponseData.runtime}
            nodeTraversed={apiResponseData.nodeTraversed}
            pathLength={apiResponseData.pathLength}
          />
        ) : (
          getDictionaryErrorComponent() || (
            <NoSolution
              startWord={lastCheckedWords.startWord}
              endWord={lastCheckedWords.endWord}
              aporuntime={apiResponseData.runtime}
              nodeTraversed={apiResponseData.nodeTraversed}
            />
          )
        )
      ) : null}
    </div>
  );
}

export default App;
