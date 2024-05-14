import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import layout from "./styles/Layout.module.css";
import Button from "./styles/Buttons.module.css";

function App() {
  return (
    <>
      <div className={layout.sideBar}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) => {
            return (
              Button.NavButton +
              " " +
              (isActive ? Button.active : isPending ? "pending" : "")
            );
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            Button.NavButton +
            " " +
            (isActive ? Button.active : isPending ? "pending" : "")
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            Button.NavButton +
            " " +
            (isActive ? Button.active : isPending ? "pending" : "")
          }
        >
          My Cart
        </NavLink>
      </div>
      <div className={layout.main}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
