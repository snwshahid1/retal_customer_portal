import TextAreaField from "src/elements/Form/TextAreaField";
import { FC } from "react";
import { AppFeedbackWrapper } from "../style";
import StarRating from "src/elements/StarRating";

const AppointmentFeedback: FC<any> = () => {

  return (
    <AppFeedbackWrapper>
      <h2>
        Tell us how was your last appointment?
      </h2>
      <div className="app-detail-list">
        <h4>Appointment details</h4>
        <ul className="list-unstyled m-0 p-0">
          <li>
            <span>Date</span>
            <span>June 16, 2023</span>
          </li>
          <li>
            <span>Time</span>
            <span>09:15 AM - 09:45 AM</span>
          </li>
          <li>
            <span>Contact</span>
            <span>Achraf Azaiez</span>
          </li>
          <li>
            <span>Property</span>
            <span>Saraya Al Nakheel</span>
          </li>
          <li>
            <span>Subject</span>
            <span>Handover</span>
          </li>
        </ul>
      </div>

      <div className="app-details-bottom">
        <div className="app-quality">
          <label>Please, evaluate the quality of the appointment.</label>
          <StarRating rated={4} />
        </div>

        <div className="form-field mb-2">
          <label>Leave a comment</label>
          <TextAreaField 
            placeholder="Justify your rating reason here"
            className="textbox textarea h-60"
          />
        </div>
        <div className="form-field">
          <button className="theme-btn btn-lg  mb-2 w-100">Send evaluation</button>
        </div>
      </div>
    </AppFeedbackWrapper>
  )
}

export default AppointmentFeedback;