import React from "react";
import Circle from "../images/circle.svg";
import Checked from "../images/circle-cheked.svg";
import Cross from "../images/icon-cross.svg";

function ListOfActivity({ list, filter, checked, removeOne }) {
  return (
    <>
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
              <p
                data-index={idx}
                className="flex flex-1 w-full my-auto align-middle border-none cursor-pointer input hover:text-blue-600"
                onClick={(e) => checked(e)}
              >
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
                onClick={(e) => removeOne(e)}
              >
                <img src={Cross} alt="LogoCross" />
              </button>
            </div>
          );
      })}
    </>
  );
}

export default ListOfActivity;
