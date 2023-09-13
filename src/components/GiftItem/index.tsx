import { FC, memo } from "react"
import { GiftItem as StyledGiftItem } from "./style"

const GiftItem: FC<any> = ({ icon, title, expiryDate }) => {
  
  return (
    <StyledGiftItem>
      <div className="gift-icon">
        {icon && <img src={icon} alt={title} /> }
      </div>
      <div className="gift-detail">
        <h5>{title}</h5>
        <span className="expiry-date">{expiryDate}</span>
      </div>
    </StyledGiftItem>
  );
};

export default memo(GiftItem);
