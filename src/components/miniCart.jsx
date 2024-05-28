import { useEffect, useState } from "react";
import { useCart } from "../cache/cartProvider";
import styles from "../styles/miniCart.module.css";
import PropTypes from "prop-types";

const MiniCart = ({ isActive, setIsActive }) => {
  const { cart, cartSetter } = useCart();
  const [cartPop, setCartPop] = useState(false);

  function getBack() {
    setIsActive(false);
  }

  useEffect(() => {
    setCartPop(isActive);
  }, [isActive, setCartPop]);

  return (
    <div className={isActive ? styles.cover : styles.deActive}>
      <div className={`${styles.miniCart} ${cartPop ? styles.CartActive : ""}`}>
        {/* Your cart content here */}
        <button onClick={getBack}>Continue Shopping</button>
      </div>
    </div>
  );
};

MiniCart.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default MiniCart;
