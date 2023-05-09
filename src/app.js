/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const randomSuit = () => {
  let randomSuits = ["♦", "♥", "♠", "♣"];
  let randomNumber = Math.floor(Math.random() * 4);
  return randomSuits[randomNumber];
};

const randomCardNumber = () => {
  let randomCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * 13);
  return randomCard[randomNumber];
};

const refreshTime = () => {
  let randomSuitsSymbol = ["♦", "♥", "♠", "♣"];
  let generatedSuit = randomSuit();

  if (
    generatedSuit === randomSuitsSymbol[0] ||
    generatedSuit === randomSuitsSymbol[1]
  ) {
    document.getElementById("suit").style.color = "red";
    document.getElementById("suit2").style.color = "red";
  } else {
    document.getElementById("suit").style.color = "black";
    document.getElementById("suit2").style.color = "black";
  }

  let generatedCardNumber = randomCardNumber();
  document.getElementById("numberGenerate").innerHTML = generatedCardNumber;
  document.getElementById("suit").innerHTML = generatedSuit;
  document.getElementById("suit2").innerHTML = generatedSuit;
};

window.onload = function() {
  refreshTime();

  setInterval(refreshTime, 1000);
};
