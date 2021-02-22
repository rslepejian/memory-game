import React from "react";
import "./style.css";

function NavBar(props) {
  return (

    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li>{props.message}</li>
      </ul>
      <ul className="navbar-nav mr-auto">
        <li>Score: {props.score} | Top Score: {props.highscore}</li>
      </ul>
    </nav>
  );
}

export default NavBar;
