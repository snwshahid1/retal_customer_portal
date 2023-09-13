import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { Property } from "./style";

const PropertyItem: FC<any> = ( 
  {image, title, location, progress, route}
  ) => {
  return (
    <Property>
      <div className="property-image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="property-detail">
        <div className="property-detail-top">
          <div className="property-title">
            <h3>{title}</h3>
            <p><i className="sm-icon map-marker-icon"></i> {location}</p>
          </div>
          <div
            className={`property-status ${
              progress === "100%" ? "handed-over" : "in-progress"
            } `}
          >
            {progress === "100%"
              ? `Handed over ${progress}`
              : `In Progress : ${progress}`}
          </div>
        </div>
        <div className="property-detail-bottom">
          <Link to={route}>View details</Link>
        </div>
      </div>
    </Property>
  );
};

export default memo(PropertyItem);
