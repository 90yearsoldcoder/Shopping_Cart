import layout from "../styles/Layout.module.css";
import Product from "../components/product";
import { useCart } from "../cache/cartProvider";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import { useMenuCache } from "../cache/menuCache";
import { cate2Key } from "../settings/cacheSetting";

function Menu() {
  //context
  const { cart, cartSetter } = useCart();
  const { menuCache, updateMenuCache_byCate } = useMenuCache();

  //state
  const [activeCategory, setActiveCategory] = useState("featured");

  async function handleCategoryClick(category) {
    setActiveCategory(cate2Key[category]);
    if (category in menuCache) return;
    await updateMenuCache_byCate(cate2Key[category]);
  }

  return (
    <>
      <div className={layout.Menu_grid}>
        <div className={layout.Menu_header}>
          <div className={layout.Menu_cate}>
            {[
              "FEATURE",
              "APPETIZERS",
              "DISHES",
              "STAPLE",
              "DESSERT",
              "DRINK",
            ].map((category) => (
              <div
                key={category}
                className={`${layout.Menu_cate_item} ${
                  activeCategory === category ? layout.active : ""
                }`}
                onClick={async () => await handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <SearchBar></SearchBar>
        </div>
        {activeCategory in menuCache ? (
          Object.values(menuCache[activeCategory]).map((value) => {
            //console.log(value);
            return (
              <Product
                key={value["id"]}
                product={value}
                cart={cart}
                setCart={cartSetter}
              ></Product>
            );
          })
        ) : (
          <>loading</>
        )}
      </div>
    </>
  );
}

export default Menu;
