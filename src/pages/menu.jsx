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
      <div className={layout.Menu_grid}>
        <div className={layout.Menu_header}>
          <div className={layout.Menu_cate}>
            <div className={layout.Menu_cate_item}>FEATURE</div>
            <div className={layout.Menu_cate_item}>APPETIZERS</div>
            <div className={layout.Menu_cate_item}>DISHES</div>
            <div className={layout.Menu_cate_item}>STAPLE</div>
            <div className={layout.Menu_cate_item}>DESSERT</div>
            <div className={layout.Menu_cate_item}>DRINK</div>
          </div>
        </div>
        {Object.values(featuredProducts).map((value) => {
          //console.log(value);
          return (
            <Product
              key={value["id"]}
              product={value}
              cart={cart}
              setCart={cartSetter}
            ></Product>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
