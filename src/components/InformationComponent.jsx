import React from "react";

const InformationComponent = ({ runtime, nodeTraversed, pathLength }) => {
  return (
    <div className="information-container">
      <p>
        <strong>Runtime:</strong> {runtime} ms
      </p>
      <p>
        <strong>Nodes Traversed:</strong> {nodeTraversed}
      </p>
      <p>
        <strong>Path Length:</strong> {pathLength}
      </p>
    </div>
  );
};

export default InformationComponent;
