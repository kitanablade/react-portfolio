import React from "react";

export default function Resume() {
  return (
    <div className="Home">
      <h1>Skills and Resume</h1>
      <a href="files/williams-kit-resume.pdf" download>
        Kit's Resume Download (.pdf)
      </a>
      <div className="row justify-content-center">
        <div className="col-9">
          <div className="row">
            <div className ="col-4" id="skills-tab">Javascript</div>
            <div className ="col-4" id="skills-tab">REACT</div>
            <div className ="col-4" id="skills-tab">Node</div>
          </div>
          <div className="row">
            <div className ="col-4" id="skills-tab">Express</div>
            <div className ="col-4" id="skills-tab">MongoDB</div>
            <div className ="col-4" id="skills-tab">SQL</div>
          </div>
          <div className="row">
            <div className ="col-4" id="skills-tab">HTML</div>
            <div className ="col-4" id="skills-tab">CSS</div>
            <div className ="col-4" id="skills-tab">Typescript</div>
          </div>
        </div>
      </div>
    </div>
  );
}
