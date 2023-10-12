import { FC, memo } from "react";
import { RateTeam } from "../style";
import TextAreaField from "src/elements/Form/TextAreaField";
import StarRating from "src/elements/StarRating";

const RateSalesTeam: FC<any> = () => {
  return (
    <RateTeam>
      <h2>Rate Sales Team</h2>
      <ul className="list-unstyled p-0 m-0">
        <li>
          <span className="rate-question">
            How satisfied are you with the stage of signing the contract?
          </span>
          <div className="rate-option">
            <StarRating rated={4} />
          </div>
        </li>

        <li>
          <span className="rate-question">
            What is your impression of the sales consultant’s performance?
          </span>
          <div className="rate-option">
            <StarRating rated={4} />
          </div>
        </li>

        <li>
          <span className="rate-question">
            Have all your questions about your property been answered ?
          </span>
          <div className="rate-option">
            <div className="d-flex gap-10 rate-btns">
              <div className="radio-option">
                <input
                  id="yesOption"
                  type="radio"
                  name="q_answer3"
                  value="Yes"
                  defaultChecked
                />
                <label htmlFor="yesOption" className="theme-btn">
                  Yes
                </label>
              </div>
              <div className="radio-option">
                <input id="noOption" type="radio" name="q_answer3" value="No" />
                <label htmlFor="noOption" className="theme-btn">
                  No
                </label>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="form-area mt-auto">
        <TextAreaField
          className="textbox textarea mb-20"
          placeholder="Add a comment..."
        />
        <button className="theme-btn w-100">Send evaluation</button>
      </div>
    </RateTeam>
  );
};

export default memo(RateSalesTeam);
