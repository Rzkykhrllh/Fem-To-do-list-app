import React, { useState } from "react";
import Circle from "../images/circle.svg";

function InputArea() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // e.defaultPrevented();
    // alert(`Form is submitted ${input}`);
    // console.log(`Form is submitted`);
    // list.concat({ text: input, status: "onProgress" });
  };

  return (
    <div
      id="#input"
      className="flex w-full h-16 px-6 my-12 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    >
      <div>
        <img src={Circle} alt="LogoCentang" className="mt-5 mr-6" />
      </div>

      <form className="flex-1" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="w-full h-16 border-none input"
          id="username"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Username"
        />
      </form>
    </div>
  );
}

export default InputArea;
