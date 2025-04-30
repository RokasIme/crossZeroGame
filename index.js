const crossEl = document.querySelector(".cross");
const zeroEl = document.querySelector(".zero");
const btnAllEl = document.querySelectorAll(".btn");
const resultEl = document.querySelector(".result");
const startEl = document.querySelector(".start-btn");

let usedBtn = [];
let choosedWeapon;

startEl.addEventListener("click", startGame());

function startGame() {
  crossEl.addEventListener("click", () => {
    choosedWeapon = 1;
  });
  zeroEl.addEventListener("click", () => {
    choosedWeapon = 0;
  });
  console.log(choosedWeapon);
}
// btn for each listener  kai paspaudi idėtu į nutton content X arba 0
// kad astkirti kuris mygtukas gal galima btn index
// usedBtn[1] = 1;
// usedBtn[2] = 0;

// butons[(0, 0, 0, 0, 0, 0, 0, 2)];

// [
//   [0,1,2], [3,4,5], [6,7,8],
//   [0,3,6], [1,4,7], [2,5,8],
//   [0,4,8], [2,4,6]
// ];
