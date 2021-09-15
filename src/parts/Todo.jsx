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
              `flex w-full h-16 px-6 text-lg leading-tight text-gray-700 align-middle bg-white dark:bg-input-dark  shadow appearance-none focus:outline-none focus:shadow-outline` +
              (idx === 0 ? " rounded-t-lg bg-red-5000" : "") +
              (idx === list.length - 1 ? " rounded-b-lg bg-blue-5000" : "")
            }
          >
            <button>
              <img
                src={Circle}
                alt="LogoCentang"
                className="flex my-auto mr-6 bg"
              />
            </button>

            <p className="flex flex-1 w-full my-auto align-middle border-none input">
              {item.text} {list.length}
            </p>

            <button>
              <img
                src={Cross}
                alt="LogoCentang"
                className="flex my-auto ml-6 bg"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
