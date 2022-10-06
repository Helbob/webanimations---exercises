"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom
const properties = {
  duration: 1000,
  iterations: Infinity,
};

const keyframes = [
  { transform: "translate(0, -20vw)" },
  { transform: "translate(0, 65vh)" },
];

/*const zoom_props = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  composite: "add",
};
*/
const animation = ball.animate(keyframes, properties);

// register click
ball.addEventListener("mousedown", ballClicked);

// start falling animation

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  animation.pause();
  // start zoom-animation
  const zoomBall = ball.animate(keyframesZoom, zoom_props);
  zoomBall.onfinish = (event) => {
    console.log("zoom has finished");
    ball.animate(keyframes, properties);
  };
}
const keyframesZoom = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

const zoom_props = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};
