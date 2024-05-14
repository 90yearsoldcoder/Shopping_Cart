import PropTypes from "prop-types";
import style from "../styles/products.module.css";

const Product = ({ product, cart }) => {
  //const num = product["id"] in cart ? cart[product["id"]] : 0;
  console.log(product);
  return <div className={style.product_card}>{product["name"]}</div>;
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};

export default Product;
