import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="navbar navbar-fixed-bottom">
      <div className="row justify-content-center">
        <div className="col-1">
          <a href="https://github.com/kitanablade">
            <img
              className="img-fluid"
              src="images/Github/GitHub-Mark-64px.png"
              alt="Github icon with embedded link"
            ></img>{" "}
          </a>
        </div>
        <div className="col-1">
          {" "}
          <a href="www.linkedin.com/in/kit-williams-webdev">
          <img
            className="img-fluid"
            src="images/LinkedIn/LI-In-Bug.png"
            alt="LinkedIn icon with embedded link"
          ></img>
          </a>
        </div>
        <div className="col-1">
        <a href="https://twitter.com/kiteaglewx">

          <img
            className="img-fluid"
            src="images/Twitter/2021 Twitter logo - blue.png"
            alt="Twitter icon with embedded link"
          ></img>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
