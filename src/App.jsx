import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import layout from "./styles/Layout.module.css";
import Button from "./styles/Buttons.module.css";
import logo from "./assets/logo.svg";
import logoStyle from "./styles/logo.module.css";
import { useMenuCache } from "./cache/menuCache";
import { Loading } from "./components/loading";

function App() {
  const { menuCache } = useMenuCache();
  return (
    <>
      <div className={layout.sideBar}>
        <img src={logo} alt="" className={logoStyle.sidebar_logo} />
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
        {menuCache == undefined ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}

export default App;
