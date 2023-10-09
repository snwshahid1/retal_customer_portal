import { FC, memo } from "react";

const PropertyInfo: FC<any> = ({
  title,
  villaArea,
  plotArea,
  handoverDate,
  warrantyDate,
}) => {
  return (
    <div className="property-infos">
      <h5>information</h5>
      <div className="property-info-boxes d-grid gap-5">
        <div className="info-box">
          <span>Villa area</span>
          <strong>{villaArea}</strong>
        </div>
        <div className="info-box">
          <span>Plot area</span>
          <strong>{plotArea}</strong>
        </div>
        <div className="info-box-big-col">
          <div className="info-box mb-1">
            <span>
              Handover Date:
              <span className="ms-auto">{handoverDate}</span>
            </span>
          </div>
          <div className="info-box">
            <span>
              Warranty exp. date:
              <span className="ms-auto">{warrantyDate}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PropertyInfo);
