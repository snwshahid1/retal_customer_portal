import { FC, memo, useState } from "react";
import { TicketDetailWrapper } from "../style";
import UploadImage1 from "src/assets/images/upload-img1.png";
import UploadImage2 from "src/assets/images/upload-img2.png";
import UploadImage3 from "src/assets/images/upload-img3.png";
import UploadImage4 from "src/assets/images/upload-img4.png";
import SlickSlider from "src/components/SlickSlider";
import classNames from "classnames";
import TicketStatus from "./TicketStatus";
import ToggleDropdown from "src/components/ToggleDropdown";
import { Link } from "react-router-dom";
import { useClickAway } from "@uidotdev/usehooks";

const TicketDetail: FC<any> = ({ showReportProblem }) => {
  const [viewMore, setViewMore] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  const ref = useClickAway(() => {
    setToggleMenu(false);
  });

  const sliderSettings = {
    draggable: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    arrows: false,
  };

  const UploadeImages = [
    UploadImage1,
    UploadImage2,
    UploadImage3,
    UploadImage4,
    UploadImage1,
  ];

  const TicketStatusData = [
    {
      date: "On March 08, 2023",
      time: "9:47am",
      title: "Technician arrived",
      iconClass: "briefcase-icon",
      description: "The technician has arrived at your service location.",
    },
    {
      date: "",
      time: "9:30am",
      title: "Technician on his way !",
      iconClass: "track-icon",
      description: "Technician is on his way to the appointment number #916745",
    },
    {
      date: "On March 02, 2023",
      time: "5:42 pm",
      title: "Appointment fixed",
      iconClass: "calendar-icon4",
      description: "Appointment fixed on March 08, 2023",
    },
    {
      date: "On February 28, 2023",
      time: "9:15 am",
      title: "We organize an appointment",
      iconClass: "calendar-icon5",
      description:
        "We are looking for an appointment with one of our technicians. You will be notified when the appointment has been fixed.",
    },
    {
      date: "On February 27, 2023",
      time: "10:56 am",
      title: "Ticket in progress",
      iconClass: "waiting-icon",
      description:
        "Your ticket has been accepted. Support team is treating it.",
    },
    {
      date: "On February 27, 2023",
      time: "8:37 am",
      title: "Ticket received",
      iconClass: "support-icon",
      description: "Support team received your ticket. It is under review.",
    },
  ];

  return (
    <TicketDetailWrapper>
      <ToggleDropdown
        ref={ref}
        toggleCTA={<i className="sm-icon icon-black dots-icon" onClick={() => setToggleMenu(!toggleMenu) }></i>}
        visible={`${toggleMenu ? 'visible' : ''}`}
        className="menu-align-right"
      >
        <ul className="list-unstyled m-0 p-0">
          <li>
            <Link to="#" onClick={() => showReportProblem()}>
              <i className="reschedule-icon"></i>
              <span>Report a problem</span>
            </Link>
          </li>

          <li>
            <Link to="/profile">
              <i className="cancel-icon"></i>
              <span>Cancel ticket</span>
            </Link>
          </li>
        </ul>
      </ToggleDropdown>
      <h2>Request #8726914B</h2>
      <div className="request-ticket-top">
        <div className="request-ticket-header">
          <div>
            <h4>Alaya Al Nakheel</h4>
            <span>Request #8726914B</span>
          </div>
          <span className="in-progress">In progress</span>
        </div>

        <div className="ticket-detail">
          <div className="ticket-subject">
            <span>Subject</span>
            <h5>Maintenance</h5>
          </div>
          <div className="ticket-date">
            <span>Created on</span>
            <h5>Feb 27, 2023 at 09:45 am</h5>
          </div>
        </div>
      </div>

      <div className="request-ticket-middle">
        <div className="your-message">
          <h5>Your message</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
            lacus, aliquet sed blandit at, bibendum molestie dui. Mauris sed
            neque sollicitudin, ultrices tortor sit amet.
          </p>
        </div>

        <div className="uploaded-images">
          <h5>Added photos</h5>
          <ul className="list-unstyled p-0 m-0">
            <SlickSlider sliderSettings={sliderSettings}>
              {UploadeImages.map((image: any, i: number) => (
                <li key={i}>
                  <div className="slider-item">
                    <div className="slider-img">
                      <img src={image} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </SlickSlider>
          </ul>
        </div>
      </div>

      <div className="request-ticket-bottom">
        <div className="flex-base-wrapper">
          <h4>Status of my ticket</h4>
          <button
            className={classNames("btn-inline fs-13", {
              "btn-view-more": viewMore,
            })}
            onClick={() => setViewMore(!viewMore)}
          >
            View {viewMore ? "less" : "more"}{" "}
            <i className="sm-icon down-black-icon"></i>
          </button>

          {viewMore && (
            <div className="tickets-status-block">
              {TicketStatusData.map(
                (
                  { date, time, title, description, iconClass }: any,
                  i: number
                ) => (
                  <TicketStatus
                    key={i}
                    date={date}
                    time={time}
                    title={title}
                    iconClass={iconClass}
                  >
                    <p>{description}</p>
                  </TicketStatus>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </TicketDetailWrapper>
  );
};

export default memo(TicketDetail);
