import React, { useContext } from "react";
import Todo from "../parts/Todo";

import "./pages.css";
import { ThemeContext } from "../components/ThemeContext";
function HomePage() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className="relative w-full h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-bg-dark"
      // style={
      //   (theme === "light"
      //     ? {
      //         backgroundImage: 'url("/images/bg-desktop-light.jpg")',
      //       }
      //     : {
      //         backgroundImage: 'url("/images/bg-desktop-light.jpg")',
      //       }) +
      //   {
      //     backgroundSize: "auto 300px",
      //   }
      // }
    >
      <img
        src="/images/bg-desktop-light.jpg"
        alt="image light"
        className="absolute z-0 object-cover w-full dark:opacity-0"
        style={{ height: "300px" }}
      />

      <img
        src="/images/bg-desktop-dark.jpg"
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-0 dark:opacity-100"
        style={{ height: "300px" }}
      />
      <Todo />
    </div>
  );
}

export default HomePage;
