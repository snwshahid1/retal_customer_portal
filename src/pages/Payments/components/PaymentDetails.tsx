import { FC, memo } from "react";
import { PaymentDetailsWrapper } from "../style";
import { FileUpload } from "src/components/UploadFile/style";

const PaymentDetails: FC<any> = () => {

  return (
    <PaymentDetailsWrapper>
      <h2>Payment Details</h2>
      <span className="payment-amount">
        - 85 SAR
      </span>

      <div className="payment-detail-list">
        <h4>Payment details</h4>
        <ul className="list-unstyled m-0 p-0">
          <li>
            <span>Recorded on the date of:</span>
            <span className="color-primary">May 28, 2023</span>
          </li>
        </ul>
      </div>

      <div className="payment-property-widget">
        <div className="pay-propery-box">
          <span className="icon-holder"><i className="sm-icon home-icon"></i></span>
          <div className="">
            <h5>Property</h5>
            <span>Alaya Al Nakheel</span>
          </div>
        </div>

        <h4>Full label</h4>
        <p>
          LEVY RETAL COMPANY REAL ESTATE 73E73928899621631<br />
          ID: 82377278398273 SUBJECT: SA 182738012938 REF:28739102365423618237
        </p>
      </div>

      <div className="payment-proof">
        <h4>Proof of payment</h4>
        <p>
          Import a proof to justify your payment
        </p>
        <FileUpload>
          <i className="add-file-icon mb-1"></i>
          <h4>Choose file to upload</h4>
          <span>19 kb max</span>
        </FileUpload>
      </div>
    </PaymentDetailsWrapper>
  )
}

export default memo(PaymentDetails);