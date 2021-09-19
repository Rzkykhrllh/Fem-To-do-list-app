import React, { useState, useEffect } from "react";

import "./parts.css";
import ThemeButton from "../components/ThemeButton";
import InputArea from "../components/InputArea";
import ListOfActivity from "../components/ListOfActivity";
import Filter from "../components/InformationAndFilter";

import { list as data } from "../components/data";

function Todo() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("activity")) || data
  );
  const [filter, setFilter] = useState(0);

  const [currentId, setCurrent] = useState(1);

  const handleSubmit = (e, input) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    setList((prev) => {
      console.log("prev");
      console.log(prev);
      return [
        ...prev,
        { text: input, status: "onProgress", id: `${currentId + 1}-${input}` },
      ];
    });

    console.log(list);
  };

  useEffect(() => {
    localStorage.setItem("activity", JSON.stringify(list));
    setCurrent(currentId + 1);
  }, [list]);

  // function when check button pressed
  const checked = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    let newStatus = "";

    if (list[idx].status === "onProgress") {
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
    let newList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].status === "onProgress") {
        newList.push(list[i]);
      }
    }

    setList(newList);
  };

  function handleDrag(result) {
    // console.log(result);
    if (!result.destination) return;

    const items = Array.from(list);
    const [reordererItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordererItem);

    setList(items);
  }

  return (
    <div className="relative z-10 flex h-auto max-w-xl px-10 mx-auto bg-yellow-3000 md:mx-auto">
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
          handleDrag={handleDrag}
        />
        {/* {console.log(list)} */}
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
