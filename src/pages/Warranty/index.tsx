import { Link } from "react-router-dom"
import PageTitle from "src/components/PageTitle"
import { WarrantyHolder } from "./style"

import UserImage from "src/assets/images/user-img1.png";

const Warranty = () => {

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Warranty" subtitle="Find here your Warranty" />
      </div>
      <WarrantyHolder className="warranty-wrapper">
        <div className="warranty-card-holder">
          <div className="warranty-card">
            <div className="user-img">
              <img src={UserImage} alt="" />
            </div>
            <div className="card-text">
              <span className="member-tag">Member</span>
              <h3>Saleh Abdullah</h3>
              <p>Customer <strong>#2861493</strong></p>
              <div className="member-dates">
                <p>
                  <strong>Start date:</strong> May 28, 2023 |  <strong>Expiration date:</strong> May 28, 2024
                </p>
              </div>
            </div>
          </div>
          <Link to="#" className="theme-btn w-100">Contact us to change your warranty</Link>
        </div>
      </WarrantyHolder>
    </>
  )
}

export default Warranty