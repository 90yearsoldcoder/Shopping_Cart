import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import style from "../styles/gallery.module.css";

const Gallery = ({ images, auto }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Dependency on images.length which likely does not change

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]); // Similar handling for prevSlide

  const slideToInd = useCallback((ind) => {
    setCurrentIndex(ind);
  }, []);

  useEffect(() => {
    if (auto == undefined || auto < 300) return;

    const timer = setInterval(nextSlide, auto); // Set interval to trigger nextSlide every 2000 ms
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [nextSlide, auto]);

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
  auto: PropTypes.number.isRequired,
};

export default Gallery;
