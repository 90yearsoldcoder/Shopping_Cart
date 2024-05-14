import layout from "../styles/Layout.module.css";
import Product from "../components/product";
import { useFeaturedProducts } from "../cache/featuredDataProvider";
import { useCart } from "../cache/cartProvider";

function Menu() {
  const featuredProducts = useFeaturedProducts();
  //console.log(featuredProducts);

  const { cart, cartSetter } = useCart();

  return (
    <>
      <div>Header</div>
      <div className={layout.Menu_grid}>
        {Object.values(featuredProducts).map((value) => {
          //console.log(value);
          return (
            <Product key={value["id"]} product={value} cart={cart}></Product>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
