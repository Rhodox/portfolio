import { React } from "react";
import "./Title.css";

function Title() {
  return (
    <div className="title-container" id="title">
      <div className="title-text">
        <div className="title-header">
          <h1>Alexander Sandberg</h1>
        </div>
        <div className="title-subheader">
          <h4>Full-stack JavaScript Developer</h4>
        </div>
      </div>
      <div className="bottom-gradient"></div>
    </div>
  );
}

export default Title;
