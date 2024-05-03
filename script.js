const theActuator = document.querySelector(".theActuator");
const theMovingThing = document.querySelector(".theMovingThing");
const theScrim = document.querySelector(".theScrim");

theActuator.addEventListener("click", () => {
  switch (theMovingThing.style.transform) {
    case `translateX(100%)`:
      theMovingThing.style.transform = `translateX(0%)`;
      theActuator.style.backgroundColor = `#6a4aab`;
      theScrim.style.opacity = `1`;
      theScrim.style.visibility = `visible`;
      break;
    case `translateX(0%)`:
      theMovingThing.style.transform = `translateX(100%)`;
      theActuator.style.backgroundColor = `#ffbf00`;
      theScrim.style.opacity = `0`;
      theScrim.style.visibility = `collapse`;
      break;
    default:
      theMovingThing.style.transform = `translateX(0%)`;
      theActuator.style.backgroundColor = `#6a4aab`;
      theScrim.style.opacity = `1`;
      theScrim.style.visibility = `visible`;
  }
});

theScrim.addEventListener("click", () => {
  theMovingThing.style.transform = `translateX(100%)`;
  theActuator.style.backgroundColor = `#ffbf00`;
  theScrim.style.opacity = `0`;
  theScrim.style.visibility = `collapse`;
});
