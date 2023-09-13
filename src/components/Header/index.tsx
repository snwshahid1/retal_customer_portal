import { FC, memo } from "react"
import { Link } from "react-router-dom";
import { HeaderWrapper, NotifyBubble, NotifyIcon } from "./style"

const Header: FC<any> = () => {
  
  return (
    <HeaderWrapper>
      <div className="d-inline-flex align-items-center ms-auto">
        <NotifyIcon>
          <NotifyBubble />
          <i className="sm-icon bell-icon"></i>
        </NotifyIcon>
        <span className="separator"></span>
        <Link to="#">Ar</Link>
      </div>
    </HeaderWrapper>
  );
};

export default memo(Header);
