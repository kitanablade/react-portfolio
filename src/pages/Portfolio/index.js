import React from "react";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          
            <img
              className="img-fluid"
              src="images/curarte2.png"
              alt="Screenshot of the Curarte app"
            ></img>
          
          <div className="row">
            <a href="https://kitanablade.github.io/curarte/">
              Curarte Deployed Site
            </a>
          </div>
          <div className="row">
            <a href="https://github.com/kitanablade/curarte">
              Curarte GitHub Repo
            </a>
          </div>
          {/* https://github.com/kitanablade/scheduler */}
          {/* https://kitanablade.github.io/scheduler/ */}
        </div>
        <div className="col-6">
          <img
            className="img-fluid"
            src="images/scheduler.png"
            alt="Screenshot of the Scheduler app"
          ></img>
          <div className="row h-25">
            <a href="https://github.com/kitanablade/scheduler">
              Work Day Scheduler Deployed Site
            </a>
          </div>
          <div className="row">
            <a href="https://kitanablade.github.io/scheduler/">
              Work Day Scheduler GitHub Repo
            </a>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-6">
          <img
            className="img-fluid"
            src="images/wx-dashboard.png"
            alt="Screenshot of the Weather app"
          ></img>
          <div className="row">
            <a href="https://kitanablade.github.io/weather-api/">
            Weather Dashboard Deployed Site
            </a>
          </div>
          <div className="row">
            <a href="https://github.com/kitanablade/weather-api">
              Weather Dashboard GitHub Repo
            </a>
          </div>
        </div>
        <div className="col-6">
          <img
            className="img-fluid"
            src="images/farmers-market.png"
            alt="Screenshot of the Farmer's Market app"
          ></img>
          <div className="row">
            <a href="https://github.com/kitanablade/farmers-market-manager">
              Farmer's Market Deployed Site
            </a>
          </div>
          <div className="row">
            <a href="https://github.com/kitanablade/farmers-market-manager">
              Farmer's Market GitHub Repo
            </a>
          </div>
        </div>
        <div className="row"></div>
        <div className="col-6">
          <img
            className="img-fluid"
            src="images/github-regex-gist.png"
            alt="Screenshot GitHub gist"
          ></img>
          <div className="row">
            <a href="https://gist.github.com/kitanablade">
              GitHub Gist about RegEx email verificaiton
            </a>
          </div>
          {/* <div className="row">
            <a href="https://github.com/kitanablade/curarte">
              Curarte GitHub Repo
            </a>
          </div> */}
        </div>
        <div className="col-6">
          <img
            className="img-fluid"
            src="images/quiz-game.png"
            alt="Screenshot of the Quiz Game app"
          ></img>
          <div className="row">
            <a href="https://kitanablade.github.io/quiz-timer/">
              Quiz Game Deployed Site
            </a>
          </div>
          <div className="row">
            <a href="https://github.com/kitanablade/quiz-timer">
              Quiz Game GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
