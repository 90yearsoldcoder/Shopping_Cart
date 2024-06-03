import { useCart } from "../cache/cartProvider";
import styles from "../styles/cart.module.css";
import MiniCartItem from "../components/miniCartItem";
import { useDetailCache } from "../cache/detailCache";
import { useMenuCache } from "../cache/menuCache";

function Cart() {
  const { cart, cartSetter } = useCart();
  const { detailCache } = useDetailCache();
  const { menuCache } = useMenuCache();

  function getCache(id) {
    for (const value of Object.values(menuCache)) {
      if (id in value) return value[id];
    }
    return detailCache[id];
  }

  const totalPrice = () => {
    let tp = 0;

    for (let id of Object.keys(cart)) {
      const item = getCache(id);
      tp += parseFloat(item["price"].replace(/[^0-9.]/g, "")) * cart[id];
    }

    return tp.toFixed(2);
  };

  const handleButtonClick = () => {
    window.open("https://github.com/90yearsoldcoder/Shopping_Cart", "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Your Cart</div>
      <div className={styles.itemContainer}>
        {Object.keys(cart).length === 0 ? (
          <div className={styles.emptyContainer}>Empty</div>
        ) : (
          Object.entries(cart).map((item) => {
            const id = item[0];
            return (
              <MiniCartItem
                key={id}
                item={getCache(id)}
                num={cart[id]}
                setCart={cartSetter}
              ></MiniCartItem>
            );
          })
        )}
      </div>
      <div className={styles.summary}>{`Total $${totalPrice()}`}</div>

      <button
        className={`${styles.button} ${styles.black}`}
        onClick={handleButtonClick}
      >
        Check Out
      </button>
    </div>
  );
}

export default Cart;
