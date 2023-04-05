"use strict";
const btn = document.querySelectorAll(".show-model");
const msg = document.querySelector(".sms1");
const modelclose = document.querySelector(".close-model");
const overly = document.querySelector(".overlay");
//console.log(btn);
for (let i = 0; i < btn.length; i++)
  btn[i].addEventListener("click", function () {
    console.log("button clicked");
    msg.classList.toggle("hidden");
    overly.classList.remove("hidden");
  });
modelclose.addEventListener("click", function () {
  msg.classList.add("hidden");
  overly.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  msg.classList.add("hidden");
  overly.classList.add("hidden");
});
