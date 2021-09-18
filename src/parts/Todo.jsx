import React, { useState } from "react";
import Moon from "../images/icon-moon.svg";
import Circle from "../images/circle.svg";
import Cross from "../images/icon-cross.svg";

import "./parts.css";
import ThemeButton from "../components/ThemeButton";
import InputArea from "../components/InputArea";

import { list as data } from "../components/data";

function Todo() {
  const [list, setList] = useState(data);

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

  const checked = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    console.log(idx);
    let newStatus = "";

    if (list[idx].status == "onProgress") {
      newStatus = "Completed";
    } else {
      newStatus = "onProgress";
    }

    let newList = [...list];
    newList[idx].status = newStatus;

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
        {list.map((item, idx) => (
          <div
            key={idx}
            id="#list"
            className={
              `flex w-full h-16 px-6 text-lg leading-tight text-gray-700 align-middle bg-white dark:bg-input-dark  shadow appearance-none focus:outline-none focus:shadow-outline dark:text-gray-300  ` +
              (idx === 0 ? " rounded-t-lg bg-red-5000" : "") +
              (idx === list.length - 1 ? " rounded-b-lg bg-blue-5000" : "")
            }
          >
            <button
              data-index={idx}
              className="w-6 h-6 my-auto mr-6 bg-blue-500"
              onClick={(e) => checked(e)}
            >
              <img src={Circle} alt="LogoCentang" />
            </button>
            <p className="flex flex-1 w-full my-auto align-middle border-none input">
              {item.status === "Completed" ? (
                <strike>{item.text}</strike>
              ) : (
                item.text
              )}
              {/* {item.text} {idx} */}
            </p>
            <button className="w-6 h-6 my-auto ml-6 bg-red-600">
              <img src={Cross} alt="LogoCentang" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
