import React, { useState } from "react";
import Circle from "../images/circle.svg";
// import { list as data } from "./data";

function InputArea({ handleSubmit }) {
  const [input, setInput] = useState("");

  return (
    <div
      id="#input"
      className="flex w-full h-16 px-6 my-12 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
    >
      <div>
        <img src={Circle} alt="LogoCentang" className="mt-5 mr-6" />
      </div>

      <form
        className="flex-1"
        onSubmit={(e) => {
          {
            handleSubmit(e, input);
            setInput("");
          }
        }}
      >
        <input
          className="w-full h-16 border-none input dark:bg-input-dark dark:text-gray-300"
          id="username"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What to do ?"
        />
      </form>
    </div>
  );
}

export default InputArea;
