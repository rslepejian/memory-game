import React, { Component } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/navbar";
import cards from "./cards.json";
import Nothing from "./components/bigNothing";


var jsScore = 0;
var jsHighscore = 0;
var jsMessage = "Click each image once!";

var guessed = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    score: jsScore,
    highscore: jsHighscore,
    message: jsMessage
  };

  guessCard = id => {
    if (!(id in guessed)) {
      guessed.push(id);
      jsScore += 1;
      if (jsScore > jsHighscore) {
        jsHighscore = jsScore;
      }
      var sillyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var sillierArray = [];
      // re order the cards randomly
      for (var i = 0; i < 12; i++) {
        var newRandom = Math.floor(Math.random() * sillyArray.length);
        sillierArray.push(cards[sillyArray[newRandom]]);
        sillyArray.splice(newRandom, 1);
      }
      // Set this.state.cards equal to the newly randomised array
      this.setState({ cards: sillierArray, score: jsScore, highscore: jsHighscore, message: "You guessed correctly!" });
    }
    else {
      guessed = [];
      jsScore = 0;
      // Set this.state.cards equal to the newly randomised array
      this.setState({ cards: cards, score: 0, message: "You guessed incorrectly! Start over!" });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
        ></Navbar>
        <Nothing />
        <div className="row">
          {this.state.cards.map(cards => (
            <div className="col-md-3">
              <Cards
                guessCard={this.guessCard}
                id={cards.id}
                key={cards.id}
                name={cards.name}
                image={cards.image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
