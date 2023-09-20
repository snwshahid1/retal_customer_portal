import { FC, memo } from "react"
import { ReportProblemWrapper } from "../style";
import FormField from "src/components/FormField";
import TextAreaField from "src/elements/Form/TextAreaField";

const ReportProblem: FC<any> = () => {
  
  return (
    <ReportProblemWrapper>
      <h2>Report a problem</h2>
      <h4>Please enter your text to report a problem</h4>

      <FormField
        className=""
        label="Message"
        control={
          <TextAreaField
            name="message"
            id="message"
            className="textbox textarea"
            placeholder="Enter message"
            // value={inputs.message}
            // onChange={handleChange}
          />
        }
      />

      <div className="report-ticket-bottom sticky-bottom">
        <button className="theme-btn w-100">
          Send message
        </button>
      </div>
    </ReportProblemWrapper>
  )
}

export default memo(ReportProblem);