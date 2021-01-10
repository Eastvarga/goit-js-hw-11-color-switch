import colors from '../colors.json';

// console.log(colors);

const ref = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};
// console.dir(ref);
// random function
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchColor = () => {
  ref.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  // console.log(inervalId);
  // console.log(ref.body.style.backgroundColor);
};
// console.log(randomIntegerFromInterval(0, 5));
// Handler for start color switch on body
const colorSwitchHandler = () => {
  if (intervalId) {
    return console.log(`Color switcher by id${intervalId} is already runing`);
  }
  intervalId = setInterval(switchColor, 1000);
};
// Handler is delete setInterval by Id intervalId
const colorStopSwitchHandler = () => {
  if (intervalId) {
    clearInterval(intervalId);
    console.log(`Color switcher by id${intervalId} now are off `);
    intervalId = null;
    return;
  }
  console.log(`There are no color swither. Id is ${intervalId}`);
};

let intervalId = null;
// console.log(randomIntegerFromInterval(0, colors.length - 1));

ref.start.addEventListener('click', colorSwitchHandler);
ref.stop.addEventListener('click', colorStopSwitchHandler);
