import React from "react";

export default function AboutMe() {
  function submitForm(e) {
    e.preventDefault();
    
    const inputs = document.getElementsByClassName("form-control");
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <form>
          <div className="form-group">
            <label htmlFor="inputName">Name:</label>
            <input type="text" className="form-control" id="inputName"></input>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="name@example.com"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="inputIntro">
              Please enter your introduction, questions, or comments here!
            </label>
            <textarea
              className="form-control"
              id="inputIntro"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={submitForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
