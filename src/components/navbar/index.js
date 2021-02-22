import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Clicky Game</a>
          <div className="collapse navbar-collapse" id="navbarText">
            <p>Click each image once to rack up points!</p>
            <span className="navbar-text">
              Score: {props.score} | HighScore: {props.highscore}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
