import React from "react";
import Todo from "../parts/Todo";

import "./pages.css";

function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-bg-dark">
      {/* desktop light */}
      <img
        src="/images/bg-desktop-light.jpg"
        alt="image light"
        className="absolute z-0 hidden object-cover w-full dark:opacity-0 sm:block"
        style={{ height: "300px" }}
      />

      {/* desktop dark */}
      <img
        src="/images/bg-desktop-dark.jpg"
        alt="image light"
        className="absolute z-0 hidden object-cover w-full opacity-0 dark:opacity-100 sm:block"
        style={{ height: "300px" }}
      />

      {/* mobile light */}
      <img
        src="/images/bg-mobile-light.jpg"
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-100 dark:opacity-0 sm:hidden "
        style={{ height: "200px" }}
      />

      <img
        src="/images/bg-mobile-dark.jpg"
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-0 dark:opacity-100 sm:hidden"
        style={{ height: "200px" }}
      />

      <Todo />
    </div>
  );
}

export default HomePage;
