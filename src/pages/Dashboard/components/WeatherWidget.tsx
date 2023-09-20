import { FC, memo } from "react";
import { WeatherWidgetHolder } from "../style";
import CloudImg from "src/assets/icons/cloud-icon.svg";

const WeatherWidget: FC<any> = () => {
  return (
    <WeatherWidgetHolder>
      <div className="weather-temp">
        <span className="cloud-img">
          <img src={CloudImg} alt="" />
        </span>
        <div className="weather-temp-today">
          <h3>30<sup>°C</sup></h3>
          <span>SATURDAY, 10:25 AM</span>
        </div>
      </div>

      <h2>
        Hey,<br />
        Have a good<br />
        day Achraf !
      </h2>
    </WeatherWidgetHolder>
  )
}

export default memo(WeatherWidget);
