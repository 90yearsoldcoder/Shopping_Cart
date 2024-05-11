import PropTypes from "prop-types";
import style from "../styles/products.module.css";

const Products = ({ product, cart }) => {
  //const num = product["id"] in cart ? cart[product["id"]] : 0;

  return <div className={style.product_card}></div>;
};

/*  
Products.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};
*/
export default Products;
