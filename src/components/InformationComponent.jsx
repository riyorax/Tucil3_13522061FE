import React from "react";

const InformationComponent = ({
  runtime,
  nodeTraversed,
  pathLength,
  isSol,
}) => {
  return (
    <div className="information-container">
      <p>
        <strong>Runtime:</strong> {runtime} ms
      </p>
      <p>
        <strong>Nodes Traversed:</strong> {nodeTraversed}
      </p>
      {isSol ? (
        <p>
          <strong>Path Length:</strong> {pathLength}
        </p>
      ) : (
        <p>
          <strong>No Solution!</strong>
        </p>
      )}
    </div>
  );
};

export default InformationComponent;
