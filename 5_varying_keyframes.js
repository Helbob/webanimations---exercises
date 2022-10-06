"use strict";

const ball = document.querySelector("#ball");
const stage = document.querySelector("#stage");

const sizeBall = ball.getBoundingClientRect();
const sizeStage = stage.getBoundingClientRect();

const properties = {
  duration: 2000,
  iterations: Infinity,
};

const centerX = sizeStage.width / 2 - sizeBall.width / 2;
const rightX = sizeStage.width - sizeBall.width;
const centerY = sizeStage.height / 2 - sizeBall.height / 2;
const bottomY = sizeStage.height - sizeBall.height;

console.log(centerX);
console.log(sizeStage);

const keyframes = [
  { transform: "translate(42vw, 0vw)" },
  { transform: "translate(85vw, 20vw)" },
  { transform: "translate(42vw, 41vw" },
  { transform: "translate(0vw, 20vw" },
  { transform: "translate(42vw, 0vw)" },
];

const animation = ball.animate(keyframes, properties);
