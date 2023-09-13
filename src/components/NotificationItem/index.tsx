import { FC, memo } from "react"
import { Link } from "react-router-dom";
import { NotificationWrapper } from "./style";

const NotificationItem: FC<any> = ({ title, imageURL, text, time, read }) => {
  
  return (
    <NotificationWrapper className={`notification-item ${read ? "read-item" : "unread-item"}`}>
      <Link to="#">
        <div className="img-holder">
          {imageURL && <img src={imageURL} alt="" /> }
          {!read && <span className="unread-bubble"></span> }
        </div>
        <div className="notification-text">
          <span className="notify-time">{time}</span>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </Link>
    </NotificationWrapper>
  );
};

export default memo(NotificationItem);
