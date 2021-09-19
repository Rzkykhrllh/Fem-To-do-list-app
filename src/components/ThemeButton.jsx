import React, { useContext } from "react";
import Moon from "../images/icon-moon.svg";
import Sun from "../images/icon-sun.svg";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <img src={theme === "light" ? Moon : Sun} alt="toggle-mode" />
    </button>
  );
}

export default ThemeButton;
