"use strict";

/* overwrite this file with your 5_varying_keyframes.js - and the edit this one */

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

/*const centerXx = (sizeStage.width - sizeBall.width) / 2;
const rightXx = (sizeStage.width - sizeBall.width) / 2;
const centerYy = (sizeStage.height - sizeBall.height) / 2;
const bottomYy = (sizeStage.height - sizeBall.height) / 2;
*/
console.log(centerX);
//console.log(centerXx);

const keyframes = [
  { transform: `translate(${centerX}px, ${0})` },
  { transform: `translate(${rightX}px, ${centerY}px` },
  { transform: `translate(${centerX}px, ${bottomY}px` },
  { transform: `translate(${0}px, ${centerY}px` },
  { transform: `translate(${centerX}px, ${0})` },
];

const animation = ball.animate(keyframes, properties);
