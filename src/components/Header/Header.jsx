import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  return (
    <header>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
