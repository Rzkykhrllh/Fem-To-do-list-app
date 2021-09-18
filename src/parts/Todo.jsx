import React, { useState } from "react";
import Moon from "../images/icon-moon.svg";

import Circle from "../images/circle.svg";
import Checked from "../images/circle-cheked.svg";
import Cross from "../images/icon-cross.svg";

import "./parts.css";
import ThemeButton from "../components/ThemeButton";
import InputArea from "../components/InputArea";

import { list as data } from "../components/data";

function Todo() {
  const [list, setList] = useState(data);
  const [filter, setFilter] = useState(0);

  const handleSubmit = (e, input) => {
    e.preventDefault();
    alert(`Form is submitted ${input}`);
    console.log(`Form is submitted`);

    setList((prev) => {
      console.log("prev");
      console.log(prev);
      return [...prev, { text: input, status: "onProgress" }];
    });

    console.log(list);
  };

  // function when check button pressed
  const checked = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    let newStatus = "";

    if (list[idx].status == "onProgress") {
      newStatus = "Completed";
    } else {
      newStatus = "onProgress";
    }

    let newList = [...list];
    newList[idx].status = newStatus;

    // console.log(newList);

    setList(newList);
  };

  // function when x button pressed
  const removeList = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    let newList = [...list];
    newList.splice(idx, 1);

    console.log(newList);

    setList(newList);
  };

  return (
    <div className="relative z-10 flex max-w-xl px-10 mx-auto bg-yellow-3000 md:mx-auto">
      <div className="w-full mt-20 text-left ">
        <div className="flex justify-between align-middle">
          <h1 className="text-4xl font-bold text-white">T O D O</h1>
          <ThemeButton />
        </div>

        <InputArea handleSubmit={handleSubmit} />

        {/* Input */}

        {/* List yg ada */}
        {list.map((item, idx) => {
          if (
            filter == 0 ||
            (filter == 1 && item.status == "onProgress") ||
            (filter == 2 && item.status == "Completed")
          )
            return (
              <div
                key={idx}
                id="#list"
                className={
                  `flex w-full h-16 px-6 text-lg leading-tight text-gray-700 align-middle bg-white dark:bg-input-dark  shadow appearance-none focus:outline-none focus:shadow-outline dark:text-gray-300  ` +
                  (idx === 0 ? " rounded-t-lg" : "")
                }
              >
                <button
                  data-index={idx}
                  className="w-6 h-6 my-auto mr-6"
                  onClick={(e) => checked(e)}
                >
                  <img
                    src={item.status === "onProgress" ? Circle : Checked}
                    alt="LogoCentang"
                  />
                </button>
                <p className="flex flex-1 w-full my-auto align-middle border-none input">
                  {item.status === "Completed" ? (
                    <strike>{item.text}</strike>
                  ) : (
                    item.text
                  )}
                  {/* {item.text} {idx} */}
                </p>

                <button
                  className="w-6 h-6 my-auto ml-6 "
                  data-index={idx}
                  onClick={(e) => removeList(e)}
                >
                  <img src={Cross} alt="LogoCross" />
                </button>
              </div>
            );
        })}

        {/* additional information  */}
        <div className="flex justify-between w-full h-16 px-6 text-sm leading-tight text-gray-700 align-middle bg-white rounded-b-lg shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300">
          <p className="my-auto">{list.length} items left</p>

          {/* Filer Desktop */}
          <div className="hidden my-auto gap-x-5 sm:flex">
            {options.map((item, i) => (
              <p
                className={
                  (i == filter ? "text-green-400 " : "") +
                  "  hover:font-bold cursor-pointer"
                }
                key={item}
                onClick={(e) => {
                  setFilter(i);
                }}
              >
                {item}
              </p>
            ))}
          </div>

          <p className="my-auto">Clear Completed</p>
        </div>

        {/* Filter Option Mobile */}
        <div className="flex justify-center w-full h-16 px-6 mt-5 text-sm leading-tight text-gray-700 align-middle bg-white rounded-lg shadow appearance-none gap-x-5 sm:hidden dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300 ">
          {options.map((item, i) => (
            <p
              className={
                (i == filter ? "text-green-400 " : "") +
                "  hover:font-bold cursor-pointer my-auto"
              }
              key={item}
              onClick={(e) => {
                setFilter(i);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;

const options = ["All", "Active", "Completed"];
