import React from "react";
import Todo from "../parts/Todo";

import "./pages.css";

function HomePage() {
  return (
    <div
      className="w-full h-screen bg-center bg-top bg-no-repeat bg-contain bg-desktop-light"
      style={{ backgroundImage: 'url("/images/bg-desktop-light.jpg")' }}
    >
      <Todo></Todo>
    </div>
  );
}

export default HomePage;
