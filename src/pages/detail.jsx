import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return <div>The details of {id} product</div>;
};

export default Detail;
