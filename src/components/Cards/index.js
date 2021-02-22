import React from "react";
import "./style.css";

function MemoryCard(props) {
  return (
    <div className="card" onClick={() => props.guessCard(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
    </div>
  );
}

export default MemoryCard;
