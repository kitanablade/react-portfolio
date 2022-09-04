import React from "react";

export default function Navbar() {
  //const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Kit Williams
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/resume">
                Resume
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
