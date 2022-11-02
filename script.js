"use strict";
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const commnetSec = document.querySelector(".commnetSec");

const nextComment = function () {
  commnetSec.classList.remove("hidden");
};
const prevComment = function () {
  commnetSec.classList.add("hidden");
};
next.addEventListener("click", nextComment);
prev.addEventListener("click", prevComment);
