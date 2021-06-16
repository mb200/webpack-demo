import React from "react";
import ReactDOM from "react-dom";
import WebpackIcon from "./webpack.svg";
import "./index.scss";

function Root() {
  return (
    <div className="container">
      <div className="hero">
        <WebpackIcon />
        <h2>Webpack Demo</h2>
      </div>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
