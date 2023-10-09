import { FC, memo, useState } from "react";
import { AppointmentDetailWrapper } from "../style";
import AppointmentImage from "src/assets/images/appointment-detail-img.png";
import UserImg1 from "src/assets/images/user-img1.png";
import UserImg2 from "src/assets/images/user-img2.png";
import MapImg from "src/assets/images/map-img2.png";
import ToggleDropdown from "src/components/ToggleDropdown";
import { useClickAway } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const AppointmentDetails: FC<any> = ({
  newAppointmentForm,
  openModal,
  scheduleMeeting,
  cancelMeeting,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const ref = useClickAway(() => {
    setToggleMenu(false);
  });

  return (
    <AppointmentDetailWrapper>
      <ToggleDropdown
        ref={ref}
        toggleCTA={
          <i
            className="sm-icon icon-black dots-icon"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        }
        visible={`${toggleMenu ? "visible" : ""}`}
        className="menu-align-right"
      >
        <ul className="list-unstyled m-0 p-0">
          <li>
            <Link
              to="#"
              onClick={() => {
                scheduleMeeting();
                openModal();
              }}
            >
              <i className="reschedule-icon"></i>
              <span>Reschedule</span>
            </Link>
          </li>

          <li>
            <Link
              to="#"
              onClick={() => {
                cancelMeeting();
                openModal();
              }}
            >
              <i className="cancel-icon"></i>
              <span>Cancel meeting</span>
            </Link>
          </li>
        </ul>
      </ToggleDropdown>
      <h2>Appointment details</h2>
      <div className="appointment-title-wrapper">
        <div className="appointment-img">
          <img src={AppointmentImage} alt="" />
        </div>
        <div className="appointment-title">
          <span className="app-month">June</span>
          <strong className="app-date">16</strong>
          <h4>Meeting with Greg</h4>
        </div>
      </div>

      <div className="appointment-detail-list">
        <ul className="list-unstyled m-0 p-0">
          <li>
            <span className="detail-label">Time</span>
            <span className="detail-value">09:15 AM - 09:45 AM</span>
          </li>
          <li>
            <span className="detail-label">Host</span>
            <span className="detail-value">
              <div className="d-flex user-info">
                <img src={UserImg1} alt="" />
                <span>Salah Abdullah</span>
              </div>
            </span>
          </li>
          <li>
            <span className="detail-label">Contact</span>
            <span className="detail-value">
              <div className="d-flex user-info">
                <img src={UserImg2} alt="" />
                <span>Achraf Azaiez</span>
              </div>
            </span>
          </li>
          <li>
            <span className="detail-label">Contact Info</span>
            <span className="detail-value">+966 800 327 0888</span>
          </li>
          <li>
            <span className="detail-label">Property</span>
            <span className="detail-value">Saraya Al Nakheel</span>
          </li>
          <li>
            <span className="detail-label">Subject</span>
            <span className="detail-value">Handover</span>
          </li>
        </ul>
      </div>

      <div className="detail-comments d-flex align-items-start">
        <span className="comment-title">Comment</span>
        <div className="comment-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
          lacus, aliquet sed blandit at, bibendum.
        </div>
      </div>

      <div className="appointment-bottom">
        <button
          className="theme-btn w-100"
          onClick={() => newAppointmentForm()}
        >
          New appointment
        </button>
        <div className="map-loc">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3575.843616257482!2d50.2120739!3d26.3315629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e62f08476d37%3A0xd7b0c8ad9518770b!2z2YXYsdmD2LIg2LHYqtin2YQg2YTZhNij2LnZhdin2YQgfCBSZXRhbCBCdXNpbmVzcyBDZW50ZXLigI8!5e0!3m2!1sen!2s!4v1696739610747!5m2!1sen!2s" width="100%" height="165" loading="lazy"></iframe>
        </div>
      </div>
    </AppointmentDetailWrapper>
  );
};

export default memo(AppointmentDetails);
