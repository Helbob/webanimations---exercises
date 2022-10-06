"use strict";

const properties = {
  duration: 2000,
  iterations: Infinity,
};

const keyframes = [
  { transform: "translate(42vw, 0vw)" },
  { transform: "translate(85vw, 20vw)" },
  { transform: "translate(42vw, 41vw" },
  { transform: "translate(0vw, 20vw" },
  { transform: "translate(42vw, 0vw)" },
];

const ball = document.querySelector("#ball");
const animation = ball.animate(keyframes, properties);
