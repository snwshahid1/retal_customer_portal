import { map } from 'lodash'
import { FC, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DeviceDown } from "src/styles/breakpoints";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useTranslation } from 'src/Hooks/useTranslation';

const NavLinks: FC<any> = ({ NavRoutes, handleSidebar }) => {
  let { translate } = useTranslation();
  const location = useLocation();
  const isMobile = useMediaQuery(`only screen and ${DeviceDown.md}`);

  return (
    <ul className="navbar-links">
      {
        map( NavRoutes, ( val, key ) => (
          <li key={key} onClick={() => isMobile && handleSidebar()}>
            <Link
              title={val.name} 
              to={val.path}
              className={
                val.path === location.pathname ? "selected" : ""
              }
          >
              <i className={val.iconClass}></i>
              <span>{translate(`${val.name}`)}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default memo(NavLinks)
