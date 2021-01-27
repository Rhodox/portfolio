import { React } from "react";
import "./Title.css";

function Title( {reference} ) {
  return (
    <div ref={reference} className="title-container" id="title">
      <div className="title-text">
        <div className="title-header">
          <h1>Alexander Sandberg</h1>
        </div>
        <div className="title-subheader">
          <h4>Full-stack JavaScript Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default Title;
