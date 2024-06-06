import Button from "../styles/Buttons.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarNav = ({ route, title, cornerAnno }) => {
  /* when cornerAnno is string'none', it will not be shown */
  return (
    <NavLink
      to={route}
      className={({ isActive, isPending }) => {
        return (
          Button.NavButton +
          " " +
          (isActive ? Button.active : isPending ? "pending" : "")
        );
      }}
    >
      {({ isActive }) => (
        <>
          <div className={Button.plainWord}>
            {title}
            {cornerAnno === undefined || cornerAnno === "none" ? (
              ""
            ) : (
              <div
                className={`${Button.cornerAnno} ${
                  !isActive ? Button.cornerAnnoInactive : ""
                }`}
              >
                {cornerAnno}
              </div>
            )}
          </div>
        </>
      )}
    </NavLink>
  );
};

SideBarNav.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cornerAnno: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SideBarNav;
