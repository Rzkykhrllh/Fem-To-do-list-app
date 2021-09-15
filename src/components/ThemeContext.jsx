import React, { createContext, useState, useEffect } from "react";

const getInitialTheme = () => {
  //Cel apakah window.locastorage ada
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme"); // get referenced color

    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    // kalau user setting dark, maka setting dark theme
    if (userMedia.matches) {
      return "dark";
    }
  }

  // If you want to use dark theme as the default, return 'dark' instead
  return "light";
};

export const ThemeContext = createContext();

// fungsi yang ngatur semua tema
export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement; // get root of element
    const isDark = rawTheme === "dark"; // isDark = cek thema sekarang
    root.classList.remove(isDark ? "light" : "dark"); // if dark true remove classname yg light, beigtupun sebaliknya
    root.classList.add(rawTheme); // menambahkan dark/light ke class
    localStorage.setItem("color-theme", rawTheme); // simpan preferensi color ke local storage
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
