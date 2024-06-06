import styles from "../styles/home.module.css";
import buttons from "../styles/Buttons.module.css";
import Gallery from "../components/gallery";
import { useMenuCache } from "../cache/menuCache";
import { useCart } from "../cache/cartProvider";
import Product from "../components/product";
import { recommendation, overrallPic } from "../settings/homepicture";
import { useNavigate } from "react-router-dom";

function Home() {
  //context
  const { cart, cartSetter } = useCart();
  const { menuCache } = useMenuCache();
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/menu");
  }

  return (
    <div className={styles.container}>
      <div className={styles.overrallContainer}>
        <Gallery images={overrallPic} auto={2500}></Gallery>
        <div className={styles.nameContainer}>
          <div style={{ fontSize: "1.7rem" }}>restaurant</div>
          <div>Princpe Flavor</div>
        </div>
      </div>
      <div className={styles.title}>Recommendation</div>
      <div className={styles.productsGallery}>
        {recommendation.map((value) => (
          <Product
            key={value[0]}
            product={menuCache["featured"][value[0]]}
            cart={cart}
            setCart={cartSetter}
            cornerTitle={value[1]}
          ></Product>
        ))}
      </div>
      <div className={styles.footer}>
        <button
          className={`${buttons.plainButton} ${buttons.black}`}
          onClick={handleButtonClick}
        >
          Order Now!
        </button>
      </div>
    </div>
  );
}

export default Home;
