"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");

  if (cursor) {
    document.body.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX - 14}px`;
      cursor.style.top = `${event.clientY - 14}px`;
    });

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("mini");
      });
      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mini");
      });
    });
  }

  const mobileTouchArea = document.querySelector(".mt-area");
  if (mobileTouchArea) {
    mobileTouchArea.addEventListener("click", () => {
      document.querySelectorAll(".t-mobile-f").forEach((element) => {
        element.classList.toggle("is-hidden");
      });
      document.querySelectorAll(".t-mobile-s").forEach((element) => {
        element.classList.toggle("is-hidden");
      });
    });
  }
});
