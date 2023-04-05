"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct Number";
// document.querySelector(".number").textContent = 1;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;

let numbers = Math.floor(Math.random() * 20) + 1; //number is 1 to 20

document.querySelector(".number").textContent = "?"; //<----- put the number to project correct value

let score = 20;
let highscore = 0;
// create a function and show the message dublicate code remove or less code writing
const displaymsg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displaymsg("NO NUMBER");
  }

  // when player is win condition
  else if (guess === numbers) {
    displaymsg("Correct Number");
    document.querySelector(".number").textContent = numbers;
    document.querySelector("body").style.backgroundColor = "rgb(13, 221, 41)";
    // to use highscore value show and store and if refresh the page value is zero

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // short cut code using Turnnary operator part1 + part2
  else if (guess != highscore) {
    if (score > 1) {
      //document.querySelector(".message").textContent =

      displaymsg(guess > numbers ? "TOO High" : "TOO Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymsg("You Loose The Game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // value is so near to the randum number to HIGH Score         part 1

  // else if (guess > numbers) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "TOO High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Loose The Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }                                                   // value is long to the randum number TO LOW Score       part2

  // else if (guess < numbers) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "TOO Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Loose The Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
// again click and all value is 0 without change highscore
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numbers = Math.floor(Math.random() * 20) + 1;
  displaymsg("start guessing..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "black";
});
