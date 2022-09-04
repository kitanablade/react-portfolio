import React from "react";

export default function AboutMe() {
  console.log("About Me Page");
  return (
    <div className= "row justify-content-center">
    <div className="col-6">
      <form>
      <div className="form-group">
    <label for="inputName">Name:</label>
    <input type="text" className="form-control" id="inputName"></input>
  </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Please enter your introduction, questions, or comments here!</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
    </div>
  );
}
