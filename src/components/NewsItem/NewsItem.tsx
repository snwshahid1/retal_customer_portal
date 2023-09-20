import { FC, memo } from "react"
import { NewsItem as StyledNewsItem } from "./style"
import { Link } from "react-router-dom";

const GiftItem: FC<any> = ({ image, title, date, tag, link }) => {
  
  return (
    <StyledNewsItem className="news-item">
      <Link to={link}>
        <div className="news-image">
          {image && <img src={image} alt={title} /> }
        </div>
        <div className="news-text">
          <span className="news-tag">{tag}</span>
          <span className="news-date">{date}</span>
          <h5>{title}</h5>
        </div>
      </Link>
    </StyledNewsItem>
  );
};

export default memo(GiftItem);
