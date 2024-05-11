import layout from "../styles/Layout.module.css";
import Products from "../components/products";

function Menu() {
  return (
    <>
      <div>Header</div>
      <div className={layout.Menu_grid}>
        <Products></Products>
        <Products></Products>
      </div>
    </>
  );
}

export default Menu;
