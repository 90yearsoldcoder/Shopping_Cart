import PropTypes from "prop-types";

const Products = ({ product, cart }) => {
  const num = product["id"] in cart ? cart[product["id"]] : 0;

  return <div className=""></div>;
};

Products.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};

export default Products;
