import { FC, memo } from "react"
import { NewsItem as StyledNewsItem } from "./style"
import { Link } from "react-router-dom";

const GiftItem: FC<any> = ({ image, title, date, tag, link }) => {
  
  return (
    <StyledNewsItem className="news-item">
        <div className="news-image">
          {image && <img src={image} alt={title} /> }
        </div>
        <div className="news-text">
          <Link to={link}><span className="news-tag">{tag}</span></Link>
          <span className="news-date">{date}</span>
          <Link to={link}><h5>{title}</h5></Link>
        </div>
    </StyledNewsItem>
  );
};

export default memo(GiftItem);
