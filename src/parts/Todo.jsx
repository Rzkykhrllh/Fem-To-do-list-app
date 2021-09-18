import React, { useState } from "react";
import Moon from "../images/icon-moon.svg";

import "./parts.css";
import ThemeButton from "../components/ThemeButton";
import InputArea from "../components/InputArea";
import ListOfActivity from "../components/ListOfActivity";
import Filter from "../components/InformationAndFilter";

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
  const removeOne = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    let newList = [...list];
    newList.splice(idx, 1);

    console.log(newList);

    setList(newList);
  };

  const removeCompleted = () => {
    let newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].status === "Completed") {
        newList.splice(i, 1);
      }
    }

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
        <ListOfActivity
          list={list}
          filter={filter}
          checked={checked}
          removeOne={removeOne}
        />

        <Filter
          list={list}
          options={options}
          removeCompleted={removeCompleted}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}

export default Todo;

const options = ["All", "Active", "Completed"];
