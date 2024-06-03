import styles from "../styles/home.module.css";
import Gallery from "../components/gallery";
import overrallPic from "../settings/homepicture";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overrallContainer}>
        <Gallery images={overrallPic}></Gallery>
      </div>
      <div className={styles.productsGallery}></div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default Home;
