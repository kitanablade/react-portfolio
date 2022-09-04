import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row justify-content-center">
        <div className="col-1">
          <img
            className="img-fluid"
            src="images/Github/GitHub-Mark-32px.png"
            alt="Github icon with embedded link"
          ></img>{" "}
        </div>
        <div className="col-1">
          {" "}
          <img
            className="img-fluid"
            src="images/LinkedIn/LI-In-Bug.png.png"
            alt="LinkedIn icon with embedded link"
          ></img>
        </div>
        <div className="col-1">
          <img
            className="img-fluid"
            src="images/Twitter/2021 Twitter logo - blue.png"
            alt="Twitter icon with embedded link"
          ></img>{" "}
        </div>
      </div>
    </footer>
  );
}
