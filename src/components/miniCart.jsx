import { useEffect, useState } from "react";
import { useCart } from "../cache/cartProvider";
import styles from "../styles/miniCart.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MiniCartItem from "./miniCartItem";
import { useDetailCache } from "../cache/detailCache";
import { useMenuCache } from "../cache/menuCache";
import { useNavigate } from "react-router-dom";

const MiniCart = ({ isActive, setIsActive }) => {
  const { cart, cartSetter } = useCart();
  const [cartPop, setCartPop] = useState(false);
  const { detailCache } = useDetailCache();
  const { menuCache } = useMenuCache();

  //console.log(menuCache);

  function getBack() {
    setIsActive(false);
  }

  function getCache(id) {
    for (const value of Object.values(menuCache)) {
      if (id in value) return value[id];
    }
    return detailCache[id];
  }

  useEffect(() => {
    setCartPop(isActive);
  }, [isActive, setCartPop]);

  const navigate = useNavigate();
  const handleShoppingButton = () => {
    navigate(`/menu`);
  };
  const handleCheckButton = () => {
    navigate(`/cart`);
  };

  return (
    <div className={isActive ? styles.cover : styles.deActive}>
      <div className={`${styles.miniCart} ${cartPop ? styles.CartActive : ""}`}>
        <div className={styles.header}>
          <div>CART</div>
          <FontAwesomeIcon
            icon={faXmark}
            style={{ cursor: "pointer" }}
            onClick={getBack}
          />
        </div>
        <div className={styles.itemContainer}>
          {Object.entries(cart).map((item) => {
            const id = item[0];
            return (
              <MiniCartItem
                key={id}
                item={getCache(id)}
                num={cart[id]}
                setCart={cartSetter}
              ></MiniCartItem>
            );
          })}
        </div>

        <div className={styles.footer}>
          <button
            onClick={handleShoppingButton}
            className={`${styles.button} ${styles.white}`}
          >
            Continue Shopping
          </button>
          <button
            onClick={handleCheckButton}
            className={`${styles.button} ${styles.black}`}
          >
            Check Out Now
          </button>
        </div>
      </div>
    </div>
  );
};

MiniCart.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default MiniCart;
