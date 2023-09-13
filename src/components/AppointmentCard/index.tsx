import { FC, memo } from "react"
import { CardItem } from "./style"

const AppointmentCard: FC<any> = ({ appointmentID, title, property, date }) => {
  
  return (
    <CardItem>
      <div className="card-item-title">
        <h4>{title}</h4>
        <span>Appointment Id {appointmentID}</span>
      </div>
      <div className="card-item-bottom">
        <span className="app-loc">
          <i className="map-marker-icon"></i>
          {property}
        </span>
        <span className="app-date">{date}</span>
      </div>
    </CardItem>
  );
};

export default memo(AppointmentCard);
