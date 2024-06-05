import styles from "../styles/home.module.css";
import Gallery from "../components/gallery";
import { useMenuCache } from "../cache/menuCache";
import { useCart } from "../cache/cartProvider";
import Product from "../components/product";
import { recommendation, overrallPic } from "../settings/homepicture";

function Home() {
  //context
  const { cart, cartSetter } = useCart();
  const { menuCache } = useMenuCache();
  console.log(menuCache["featured"]);
  return (
    <div className={styles.container}>
      <div className={styles.overrallContainer}>
        <Gallery images={overrallPic}></Gallery>
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
      <div className={styles.footer}></div>
    </div>
  );
}

export default Home;
