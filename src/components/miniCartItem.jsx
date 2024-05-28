import PropTypes from "prop-types";
import styles from "../styles/miniCartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const MiniCartItem = ({ item, num, setCart }) => {
  const changeNum = (delta) => {
    const id = item["id"];
    let newNum = num + delta;
    if (newNum < 0) newNum = 0;

    setCart((preCart) => {
      let newCart = { ...preCart };
      newCart[id] = newNum;
      if (newCart[id] === 0) delete newCart[id];
      return newCart;
    });
  };

  const ItemPrice = () => {
    const unitPrice = parseFloat(item["price"].replace(/[^0-9.]/g, ""));
    return unitPrice * num;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item["preview"]} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.title}>{item["name"]}</div>

        <div className={styles.footer}>
          <div className={styles.quantity_controls}>
            {num == 0 ? (
              <></>
            ) : num == 1 ? (
              <button
                className={styles.quantity_button}
                onClick={() => changeNum(-1)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            ) : (
              <button
                className={styles.quantity_button}
                onClick={() => changeNum(-1)}
              >
                -
              </button>
            )}
            {num == 0 ? <></> : <span className="quantity">{num}</span>}

            <button
              className={styles.quantity_button}
              onClick={() => changeNum(+1)}
            >
              +
            </button>
          </div>
          <div className={styles.priceContainer}>{ItemPrice()}</div>
        </div>
      </div>
    </div>
  );
};

MiniCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired, // Ensures 'preview' is a string and is required
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  setCart: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
};

export default MiniCartItem;
