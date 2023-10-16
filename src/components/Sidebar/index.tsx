import { FC, memo, useState } from "react";
import { SidebarWrapper, ContactBox, Copyright, UserProfile, HamburgerButton } from "./style";

import { EssentialsRoutes, ServicesRoutes } from "src/routes";
import { Link } from "react-router-dom";
import classNames from "classnames";
import NavLinks from "./NavLinks";

import ProfileImage from "src/assets/images/user-img1.png";
import ToggleDropdown from "src/components/ToggleDropdown";
import { useClickAway } from "@uidotdev/usehooks";
import { useTranslation } from "src/Hooks/useTranslation";

const Sidebar: FC<any> = () => {
  let { translate } = useTranslation();
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleSidebar = () => setActiveSidebar(!activeSidebar);
  const closeSidebar = () => setActiveSidebar(false);

  const ref = useClickAway(() => {
    setToggleMenu(false);
  });

  return (
    <>
      <HamburgerButton 
        onClick={() => handleSidebar()}
        className={classNames("hamburger-menu-btn", {
          open: Boolean(activeSidebar),
        })}  
      >
        <span></span>
      </HamburgerButton>

      <SidebarWrapper
        id="app-sidebar"
        className={classNames( {
          active: Boolean(activeSidebar),
        })}
      >
        <button
          onClick={() => handleSidebar()}
          className={classNames("sidebar-toggle-btn", {
            open: Boolean(activeSidebar),
          })}
        >
          <i className="sm-icon arrow-icon arrow-icon-right"></i>
        </button>

        <UserProfile className="user-profile-header">
          <div className="d-flex">
            <div className="user-img">
              <img src={ProfileImage} alt="User" />
              <span className="hide-sm-nav">{translate("MEMBER")}</span>
            </div>
            <div className="username hide-sm-nav">
              <strong>{translate("Saleh Abdullah")}</strong>
              <span>#2861493</span>
            </div>
          </div>

          <ToggleDropdown
            ref={ref}
            toggleCTA={
              <Link to="#" onClick={() => setToggleMenu(!toggleMenu) } className="hide-sm-nav">
                <i className="sm-icon dots-icon"></i>
              </Link>}
            visible={toggleMenu ? 'visible' : ''}
          >
            <ul className="list-unstyled m-0 p-0">
              <li onClick={() => setToggleMenu(false)}>
                <Link to="/profile">
                  <i className="user-icon"></i>
                  <span>{translate("My Profile")}</span>
                </Link>
              </li>

              <li onClick={() => setToggleMenu(false)}>
                <Link to="/profile">
                  <i className="logout-icon"></i>
                  <span>{translate("Logout")}</span>
                </Link>
              </li>
            </ul>
          </ToggleDropdown>
        </UserProfile>

        <div className="nav-wrapper">
          <h4>{translate("Your Essentials")}</h4>
          <NavLinks NavRoutes={EssentialsRoutes} handleSidebar={closeSidebar} />
          <h4>{translate("Services")}</h4>
          <NavLinks NavRoutes={ServicesRoutes} handleSidebar={closeSidebar} />
        </div>

        <div className="sidebar-bottom mt-auto">
          {/* <ContactBox className="sidebar-contact-box">
            <h4>A Question ?</h4>
            <p>
              Read our <Link to="/faqs">FAQ</Link> or contact us.
            </p>
            <Link to="/contact" className="theme-btn text-uppercase fs-13 w-100">
              Contact Us <i className="sm-icon ms-1 md-arrow-icon"></i>
            </Link>
          </ContactBox> */}
          <Copyright>
            <p className="fs-10">&copy; {translate("Retal Development. All rights reserved.")}</p>
          </Copyright>
        </div>
      </SidebarWrapper>
    </>
  );
};

export default memo(Sidebar);
