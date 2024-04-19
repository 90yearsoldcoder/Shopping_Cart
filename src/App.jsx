import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>APP side bar</div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
