import { FC, memo } from "react"
import { Link, useLocation } from "react-router-dom";
import { NavbarList } from "./style"

const Navbar: FC<any> = ( { navbarLinks } ) => {
  const location = useLocation();
  return (
    <NavbarList className="list-unstyled m-0 p-0">
      {navbarLinks.map( ({ label, slug }: any, i: number) => (
        <li key={i} className={`${slug === location.pathname ? 'selected-item' : ''}`}>
        <Link to={slug}>{label}</Link>
        </li>
      ))}
    </NavbarList>
  );
};

export default memo(Navbar);
