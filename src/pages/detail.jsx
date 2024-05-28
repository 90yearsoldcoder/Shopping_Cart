import { useParams } from "react-router-dom";
import { useDetailCache } from "../cache/detailCache";
import style from "../styles/detail.module.css";
import { NavLink } from "react-router-dom";
import Gallery from "../components/gallery";
import { Loading } from "../components/loading";
import { useCart } from "../cache/cartProvider";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import MiniCart from "../components/miniCart";

const Detail = () => {
  const { id } = useParams();
  const { detailCache, updateDetail } = useDetailCache();
  const { cart, cartSetter } = useCart();
  const [quant, setQuant] = useState(id in cart ? cart[id] : 0);
  const [miniCartActive, setMiniCartActive] = useState(false);

  //set quant
  const changeNum = (delta) => {
    if (quant + delta >= 0) setQuant(quant + delta);
  };

  //set cart
  const handleAddToCart = (newNum) => {
    if (newNum < 0) newNum = 0;

    let newCart = { ...cart };
    newCart[id] = newNum;
    if (newCart[id] === 0) delete newCart[id];
    cartSetter(newCart);

    //Todo: will add a slide in Cart at this moment
    //alert("A Cart sliding from right edge");
    setMiniCartActive(true);
  };

  updateDetail(id);

  return (
    <>
      <NavLink className={style.backButton} to="/menu">
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="xl"
          style={{ color: "var(--color1)" }}
        />
      </NavLink>
      {id in detailCache ? (
        <div className={style.container}>
          <div className={style.displayContainer}>
            <Gallery
              images={[
                detailCache[id]["preview"],
                detailCache[id]["detail1"],
                detailCache[id]["detail2"],
              ]}
            ></Gallery>
          </div>
          <div className={style.infoContainer}>
            <div className={style.title}>{detailCache[id]["name"]}</div>
            <div className={style.desc}>{detailCache[id]["Desc"]}</div>
            <div className={style.price}>{detailCache[id]["price"]}</div>
            <div className={style.cart_container}>
              <div className={style.quantity_control}>
                <span className="quantity">Quantity: </span>
                <button
                  className={style.quantity_button}
                  onClick={() => changeNum(-1)}
                >
                  <FontAwesomeIcon icon={faMinus} size="xs" />
                </button>
                <span className="quantity">{quant}</span>
                <button
                  className={style.quantity_button}
                  onClick={() => changeNum(+1)}
                >
                  <FontAwesomeIcon icon={faPlus} size="xs" />
                </button>
              </div>
              <div className={style.addToCartContainer}>
                <button
                  className={style.addButton}
                  onClick={() => handleAddToCart(quant)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.container}>
          <Loading></Loading>
        </div>
      )}

      <MiniCart
        isActive={miniCartActive}
        setIsActive={setMiniCartActive}
      ></MiniCart>
    </>
  );
};

export default Detail;
