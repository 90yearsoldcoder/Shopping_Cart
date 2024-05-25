import { useParams } from "react-router-dom";
import { useDetailCache } from "../cache/detailCache";

const Detail = () => {
  const { id } = useParams();
  const { detailCache, updateDetail } = useDetailCache();

  updateDetail(id);

  return (
    <>
      {id in detailCache ? (
        <div>{detailCache[id]["Desc"]}</div>
      ) : (
        <div>Loading the details of {id} product</div>
      )}
    </>
  );
};

export default Detail;
