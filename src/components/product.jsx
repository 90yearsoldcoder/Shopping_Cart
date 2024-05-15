import PropTypes from "prop-types";
import style from "../styles/products.module.css";
import imgNotFound from "../assets/imgNotFound.jpg";

const Product = ({ product, cart, setCart }) => {
  const num = product["id"] in cart ? cart[product["id"]] : 0;
  //console.log(product);
  //console.log(cart);

  const changeNum = (delta) => {
    let newNum = product["id"] in cart ? cart[product["id"]] : 0;
    if (newNum + delta <= 0) newNum = 0;
    else newNum += delta;

    let newCart = { ...cart };
    newCart[product["id"]] = newNum;
    if (newCart[product["id"]] === 0) delete newCart[product["id"]];
    setCart(newCart);
  };

  return (
    <div className={style.product_card}>
      <img
        src={product["preview"]}
        alt={imgNotFound}
        className={style.product_img}
      />
      <div className={style.name}>{product["name"]}</div>
      <div className={style.quantity_controls}>
        <button className={style.quantity_button} onClick={() => changeNum(-1)}>
          -
        </button>
        <span className="quantity">{num}</span>
        <button className={style.quantity_button} onClick={() => changeNum(+1)}>
          +
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Product;
