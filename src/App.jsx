import { Outlet } from "react-router-dom";
import "./App.css";
import layout from "./styles/Layout.module.css";
import logo from "./assets/logo.svg";
import logoStyle from "./styles/logo.module.css";
import { useMenuCache } from "./cache/menuCache";
import { Loading } from "./components/loading";
import { useEffect } from "react";
import logo_jpg from "./assets/logo.jpg";
import { useCart } from "./cache/cartProvider";
import SideBarNav from "./components/sideBarNav";

function App() {
  const { menuCache } = useMenuCache();
  const { cart } = useCart();

  //remove the head text
  useEffect(() => {
    document.title = "Princpe Flavor";
  }, []);

  //remove the original icon
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = logo_jpg;
    }
  }, []);

  const numItems = () => {
    let count = 0;
    for (let id of Object.keys(cart)) {
      count += cart[id];
    }
    return count;
  };

  return (
    <>
      <div className={layout.sideBar}>
        <img src={logo} alt="" className={logoStyle.sidebar_logo} />
        <SideBarNav route={"/"} title={"Home"}></SideBarNav>
        <SideBarNav route={"/menu"} title={"Menu"}></SideBarNav>
        <SideBarNav
          route={"/cart"}
          title={"My Cart"}
          cornerAnno={numItems() > 0 ? numItems() : "none"}
        ></SideBarNav>
      </div>
      <div className={layout.main}>
        {menuCache == undefined ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}

export default App;
