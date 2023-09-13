import { FC, memo } from "react"
import { Link, useLocation } from "react-router-dom";
import UserImage from "src/assets/images/user-img1.png";
import { Sidebar } from "../style"

const ProfileSidebar: FC<any> = ( ) => {
  const location = useLocation();

  const ProfileLinks = [
    {label: "Personal Infomations", slug: '/profile', iconClass: "user-icon"},
    {label: "Change Password", slug: '/profile/change-password', iconClass: "lock-icon"}
  ]
  return (
    <Sidebar>
      <div className="user-info">
        <div className="user-profile-img-wrapper">
          <div className="user-profile-img">
            <button className="edit-btn">
              <i className="photo-icon"></i>
            </button>
            {UserImage && <img src={UserImage} alt="" />}
          </div>
          <p>Change my profile photo</p>
        </div>
        <div className="user-name-id">
          <h3>Saleh Abdullah</h3>
          <p>Customer <strong>#2861493</strong> </p>
        </div>
      </div>

      <div className="profile-sidebar-links">
        <ul className="list-unstyled p-0 m-0">
          {ProfileLinks.map( ({label, slug, iconClass}, i: number) => (
            <li key={i}>
              <Link to={slug} className={`${location.pathname === slug ? 'active' : ''}`}>
                <i className={iconClass}></i>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Sidebar>
  );
};

export default memo(ProfileSidebar);
