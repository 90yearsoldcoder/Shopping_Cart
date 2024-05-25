import { useParams } from "react-router-dom";
import { useDetailCache } from "../cache/detailCache";
import style from "../styles/detail.module.css";
import { NavLink } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { detailCache, updateDetail } = useDetailCache();

  updateDetail(id);

  return (
    <>
      <NavLink to="/menu">Back</NavLink>
      {id in detailCache ? (
        <div className={style.container}>
          <div className={style.displayContainer}></div>
          <div className={style.infoContainer}></div>
        </div>
      ) : (
        <div>Loading the details of {id} product</div>
      )}
    </>
  );
};

export default Detail;
