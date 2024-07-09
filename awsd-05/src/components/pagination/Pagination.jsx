import React, { useEffect, useState } from "react";
import "./Pagination.scss";

const Pagination = ({
  totalPots,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPots / postsPerPage); i++) {
    pages.push(i);
  }

  function numAndActive() {
    const numbers = document.querySelectorAll(".number");
    numbers[0].classList.add("active");
    const active = document.querySelector(".number.active");
    const currentP = parseInt(active.innerHTML);

    if (currentP == 1) {
      numbers[0].style.display = "block";
      numbers[parseInt(numbers.length) - 1].style.display = "block";
      numbers[currentP].style.display = "block";
      numbers[currentP + 1].style.display = "block";
      numbers[currentP + 2].style.display = "block";

      for (let i = 0; i < parseInt(numbers.length) - 1; i++) {
        if (
          i != currentP &&
          i != currentP + 1 &&
          i != currentP + 2 &&
          i != parseInt(numbers.length) - 1 &&
          i != 0
        ) {
          numbers[i].style.display = "none";
        }
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      numAndActive();
    }, 500);
  }, []);

  function nonActive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].classList.contains("active")) {
        numbers[i].classList.remove("active");
      }
    }
  }

  function isVisible(numbers, active, currentP) {
    if (pages.length > 4) {
      if (currentP > 1 && currentP < pages.length - 2) {
        numbers[0].style.display = "block";
        numbers[pages.length - 1].style.display = "block";
        numbers[currentP - 1].style.display = "block";
        numbers[currentP + 1].style.display = "block";
        numbers[currentP].style.display = "block";

        for (let i = 0; i < pages.length - 1; i++) {
          if (
            i != currentP - 1 &&
            i != currentP + 1 &&
            i != currentP &&
            i != pages.length - 1 &&
            i != 0
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (currentP > 1 && currentP == pages.length - 2) {
        numbers[0].style.display = "block";
        numbers[pages.length - 1].style.display = "block";
        numbers[currentP - 1].style.display = "block";
        numbers[currentP - 2].style.display = "block";
        numbers[currentP].style.display = "block";

        for (let i = 0; i < pages.length - 1; i++) {
          if (
            i != currentP - 1 &&
            i != currentP - 2 &&
            i != currentP &&
            i != pages.length - 1 &&
            i != 0
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (currentP > 1 && currentP == pages.length - 1) {
        numbers[0].style.display = "block";
        numbers[pages.length - 1].style.display = "block";
        numbers[currentP - 1].style.display = "block";
        numbers[currentP - 2].style.display = "block";
        numbers[currentP - 2].style.display = "block";

        for (let i = 0; i < pages.length - 1; i++) {
          if (
            i != currentP - 1 &&
            i != currentP - 2 &&
            i != currentP - 3 &&
            i != pages.length - 1 &&
            i != 0
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (currentP == 1) {
        numbers[0].style.display = "block";
        numbers[pages.length - 1].style.display = "block";
        numbers[currentP].style.display = "block";
        numbers[currentP + 1].style.display = "block";
        numbers[currentP + 2].style.display = "block";

        for (let i = 0; i < pages.length - 1; i++) {
          if (
            i != currentP &&
            i != currentP + 1 &&
            i != currentP + 2 &&
            i != pages.length - 1 &&
            i != 0
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (currentP == pages.length) {
        numbers[0].style.display = "block";
        numbers[pages.length - 1].style.display = "block";
        numbers[currentP - 2].style.display = "block";
        numbers[currentP - 3].style.display = "block";
        numbers[currentP - 4].style.display = "block";

        for (let i = 0; i < pages.length - 1; i++) {
          if (
            i != currentP - 2 &&
            i != currentP - 3 &&
            i != currentP - 4 &&
            i != pages.length - 1 &&
            i != 0
          ) {
            numbers[i].style.display = "none";
          }
        }
      }
    }
  }

  function thePage(number, index) {
    const numbers = document.querySelectorAll(".number");
    const active = document.querySelector(".number.active");
    const currentP = parseInt(active.innerHTML);
    setCurrentPage(number);
    nonActive(numbers);
    numbers[index].classList.add("active");
    isVisible(numbers, active, currentP);
  }

  function nextPage() {
    const numbers = document.querySelectorAll(".number");
    const active = document.querySelector(".number.active");
    const currentP = parseInt(active.innerHTML);
    if (currentP < pages[pages.length - 1]) {
      nonActive(numbers);
      setCurrentPage(currentP + 1);
      numbers[currentP].classList.add("active");
      isVisible(numbers, active, currentP);
    }
  }

  function prevPage() {
    const numbers = document.querySelectorAll(".number");
    const active = document.querySelector(".number.active");
    const currentP = parseInt(active.innerHTML);
    if (currentP > pages[0]) {
      nonActive(numbers);
      setCurrentPage(currentP - 1);
      numbers[currentP - 2].classList.add("active");
      isVisible(numbers, active, currentP);
    }
  }

  return (
    <div className="pagination">
      <div className="page-count">
        {pages.map((number, index) => {
          return (
            <span
              className="number"
              key={index}
              //   onClick={() => setCurrentPage(number)}
              onClick={() => thePage(number, index)}
            >
              {number}
            </span>
          );
        })}
        <span className="prev" onClick={prevPage}>
          {"<<"}
        </span>
        <span className="next" onClick={nextPage}>
          {">>"}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
