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

  function nonActive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].classList.contains("active")) {
        numbers[i].classList.remove("active");
      }
    }
  }

  function thePage(number, index) {
    setCurrentPage(number);
    const numbers = document.querySelectorAll(".number");
    nonActive(numbers);
    numbers[index].classList.add("active");
  }

  function nextPage() {
    const numbers = document.querySelectorAll(".number");
    const active = document.querySelector(".number.active");
    const currentP = parseInt(active.innerHTML);
    if (currentP < pages[pages.length - 1]) {
      nonActive(numbers);
      setCurrentPage(currentP + 1);
      numbers[currentP].classList.add("active");
      if (currentP >= 3) {
        for (let i = currentP; i > 1; i--) {
          numbers[i - 2].style.display = "none";
          console.log("count:", i);
        }
      }
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
      if (currentP < 3) {
        console.log("currentP>=3 true");
        for (let i = currentP - 1; i >= 4; i--) {
          numbers[i - 1].style.display = "none";
          console.log("count:", i);
        }
        for (let i = 0; i >= 4; i++) {
          numbers[i].style.display = "block";
          console.log("count:", i);
        }
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const numbers = document.querySelectorAll(".number");
      numbers[0].classList.add("active");
    }, 1500);
  }, []);

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
