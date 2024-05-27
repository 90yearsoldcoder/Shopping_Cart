import { useParams } from "react-router-dom";
import { useDetailCache } from "../cache/detailCache";
import style from "../styles/detail.module.css";
import { NavLink } from "react-router-dom";
import Gallery from "../components/gallery";

const Detail = () => {
  const { id } = useParams();
  const { detailCache, updateDetail } = useDetailCache();

  updateDetail(id);

  return (
    <>
      <NavLink to="/menu">Back</NavLink>
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
            <div className={style.title}>{detailCache[id]["price"]}</div>
          </div>
        </div>
      ) : (
        <div>Loading the details of {id} product</div>
      )}
    </>
  );
};

export default Detail;
