import layout from "../styles/Layout.module.css";
import Products from "../components/products";
import { useFeaturedProducts } from "../cache/featuredDataProvider";

function Menu() {
  const featuredProducts = useFeaturedProducts();
  //console.log(featuredProducts);

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
