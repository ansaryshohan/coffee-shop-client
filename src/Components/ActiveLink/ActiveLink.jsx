import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  // console.log(typeof(to))
  return (
    <NavLink
      to={to}
      className={({ isActive}) =>
        isActive ? "text-buttonColor"  : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
