import React, { useEffect, useState } from "react";
import "./PaginationJobs.scss";

const PaginationJobs = ({ totalPots, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPots / postsPerPage); i++) {
    pages.push(i);
  }

  const [numbers, setNumbers] = useState([]);
  const [active, setActive] = useState(false);
  const [activePage, setActivePage] = useState(0);

  function initialization() {
    setNumbers(document.querySelectorAll(".number"));
    document.querySelectorAll(".number")[0].classList.add("active");
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));

    // const currentP = parseInt(active.innerHTML);

    // if (currentP == 1) {
    //   numbers[0].style.display = "block";
    //   numbers[parseInt(numbers.length) - 1].style.display = "block";
    //   numbers[currentP].style.display = "block";
    //   numbers[currentP + 1].style.display = "block";
    //   numbers[currentP + 2].style.display = "block";

    //   for (let i = 0; i < parseInt(numbers.length) - 1; i++) {
    //     if (
    //       i != currentP &&
    //       i != currentP + 1 &&
    //       i != currentP + 2 &&
    //       i != parseInt(numbers.length) - 1 &&
    //       i != 0
    //     ) {
    //       numbers[i].style.display = "none";
    //     }
    //   }
    // }
  }

  useEffect(() => {
    setTimeout(() => {
      initialization();
    }, 1000);
  }, []);

  function unselectPages(numbers) {
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
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    setCurrentPage(number);
    unselectPages(numbers);
    numbers[index].classList.add("active");
    // isVisible(numbers, active, currentP);
  }

  function nextPage() {
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    if (
      parseInt(document.querySelector(".number.active").innerHTML) <
      pages[pages.length - 1]
    ) {
      let number = parseInt(document.querySelector(".number.active").innerHTML);
      unselectPages(numbers);
      setCurrentPage(number + 1);
      numbers[number].classList.add("active");
      // isVisible(numbers, active, currentP);
    }
  }

  function prevPage() {
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    if (
      parseInt(document.querySelector(".number.active").innerHTML) > pages[0]
    ) {
      let number = parseInt(document.querySelector(".number.active").innerHTML);
      unselectPages(numbers);
      setCurrentPage(number - 1);
      numbers[number - 2].classList.add("active");
      // isVisible(numbers, active, currentP);
    }
  }

  return (
    <div className="pagination-jobs">
      <div className="page-count">
        {pages.map((number, index) => {
          return (
            <span
              className="number"
              key={index}
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

export default PaginationJobs;
