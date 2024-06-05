import PropTypes from "prop-types";
import style from "../styles/products.module.css";
import imgNotFound from "../assets/imgNotFound.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Product = ({ product, cart, setCart, cornerTitle }) => {
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

  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={style.product_card}>
      <div
        className={style.product_img_container}
        onClick={() => handleNavigation(product["id"])}
      >
        <img
          src={product["preview"]}
          alt={imgNotFound}
          className={style.product_img}
        />
        {cornerTitle === undefined ? (
          <></>
        ) : (
          <div className={style.top_badge}>{cornerTitle}</div>
        )}
      </div>
      <div
        className={style.name}
        onClick={() => handleNavigation(product["id"])}
      >
        {product["name"]}
      </div>
      <div className={style.footContainer}>
        <div className={style.price}>{product["price"]}</div>
        <div className={style.quantity_controls}>
          {num == 0 ? (
            <></>
          ) : num == 1 ? (
            <button
              className={style.quantity_button}
              onClick={() => changeNum(-1)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          ) : (
            <button
              className={style.quantity_button}
              onClick={() => changeNum(-1)}
            >
              -
            </button>
          )}
          {num == 0 ? <></> : <span className="quantity">{num}</span>}

          <button
            className={style.quantity_button}
            onClick={() => changeNum(+1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
  cornerTitle: PropTypes.string,
};

export default Product;
