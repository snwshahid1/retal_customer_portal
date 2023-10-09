import { FC, memo, useState } from "react";
import { RatingHolder } from "./style";

const StarRating: FC<any> = ({rated}) => {
  const [rating, setRating] = useState(rated);
  const [hover, setHover] = useState(0);
  return (
    <RatingHolder>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <i
                className={`star-icon ${
                  index <= (hover || rating) ? "icon-primary" : "icon-gray"
                }`}
              ></i>
            </button>
          );
        })}
      </div>
    </RatingHolder>
  );
};

export default memo(StarRating);
