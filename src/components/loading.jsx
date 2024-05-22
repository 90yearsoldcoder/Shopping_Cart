import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/loading.module.css";

export const Loading = () => {
  return (
    <FontAwesomeIcon className={style.spinner} icon={faSpinner} size="4x" />
  );
};
