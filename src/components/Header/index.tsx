import { FC, memo } from "react"
import { Link, useNavigate } from "react-router-dom";
import { HeaderWrapper, NotifyBubble, NotifyIcon } from "./style"

const Header: FC<any> = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <div className="d-inline-flex align-items-center ms-auto">
        <NotifyIcon onClick={() => navigate('/notifications')}>
          <NotifyBubble />
          <i className="sm-icon bell-icon"></i>
        </NotifyIcon>
        <span className="separator"></span>
        <Link to="#">العربية</Link>
      </div>
    </HeaderWrapper>
  );
};

export default memo(Header);
