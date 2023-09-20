import { FC, memo } from "react"
import { TicketStatusBox } from "../style";

const TicketStatus: FC<any> = ({date, time, iconClass, title, children}) => {
  
  return (
    <TicketStatusBox>
      {date && <span className="date">{date}</span>}
      <div className="gray-box">
        <span className="icon-holder"><i className={iconClass && iconClass}></i></span>
        <span className="time">{time}</span>
        <h3>{title}</h3>
        {children}
      </div>
    </TicketStatusBox>
  )
}

export default memo(TicketStatus);