import PropTypes from "prop-types";
import { useState } from "react";
import style from "../styles/gallery.module.css";

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const slideToInd = (ind) => {
    setCurrentIndex(ind);
  };

  return (
    <div className={style.gallery}>
      <div
        className={style.gallery_wrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, ind) => (
          <div className={style.gallery_slide} key={ind}>
            <img className={style.img} src={img} alt={`Slide ${ind}`} />
          </div>
        ))}
      </div>

      <button className={`${style.button} ${style.left}`} onClick={prevSlide}>
        ❮
      </button>
      <button className={`${style.button} ${style.right}`} onClick={nextSlide}>
        ❯
      </button>

      <div className={style.footer}>
        {images.map((img, ind) => (
          <div
            key={ind}
            className={`${style.dot} ${
              currentIndex === ind ? style.active : ""
            }`}
            onClick={() => slideToInd(ind)}
          ></div>
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
