import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DashboardHolder } from "./style";
import WatchVideo from "src/assets/images/video-bg-img.png";
import MarketPlace from "./components/MarketPlace";
import LatestProject from "./components/LatestProject";
import WeatherWidget from "./components/WeatherWidget";
import LatestNews from "./components/LatestNews";
import DocumentsList from "./components/DocumentsList";
import ContentBox from "src/components/ContentBox";
import SlickSlider from "src/components/SlickSlider";
import SlickArrows from "./components/SlickArrows";
import SidebarDialog from "src/components/SidebarDialog";
import RateSalesTeam from "./components/RateSalesTeam";
import CircleProgress from "src/elements/CircleProgress";
import GalleryImg1 from "src/assets/images/dashboard-gallery-img.png";
import GalleryImg2 from "src/assets/images/news-img1.png";

const Dashboard = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const propertySlider = useRef(null);
  const gallerySlider = useRef(null);

  const handleCloseDialog = () => setIsOpenDialog(false);

  const gallerySliderSettings = {
    draggable: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const propertySliderSettings = {
    draggable: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  };

  return (
    <DashboardHolder>
      <div className="dashboard-top-section flex-box">
        <div className="dashboard-content white-bg-area">
          <div className="flex-box align-items-start">
            <div className="property-progress-area">
              <div className="sec-title">
                <h4>Property & Progress</h4>
                <SlickArrows slider={propertySlider} />
              </div>

              <div className="property-sm-carousel">
                <SlickSlider
                  ref={propertySlider}
                  sliderSettings={propertySliderSettings}
                >
                  <div className="slider-item">
                    <div className="property-tag">Property n°861103</div>
                  </div>
                  <div className="slider-item">
                    <div className="property-tag">Property n°268638</div>
                  </div>
                  <div className="slider-item">
                    <div className="property-tag">Property n°59762</div>
                  </div>
                  <div className="slider-item">
                    <div className="property-tag">Property n°329469</div>
                  </div>
                </SlickSlider>
              </div>

              <div className="property-infos">
                <h5>Informations</h5>
                <div className="property-info-boxes d-grid gap-5">
                  <div className="info-box">
                    <span>Villa area</span>
                    <strong>5.00 SQM</strong>
                  </div>
                  <div className="info-box">
                    <span>Plot area</span>
                    <strong>250.00 SQM</strong>
                  </div>
                  <div className="info-box-big-col">
                    <div className="info-box mb-1">
                      <span>
                        Handover Date:
                        <span className="ms-auto">Not assigned</span>
                      </span>
                    </div>
                    <div className="info-box">
                      <span>
                        Warranty exp. date:
                        <span className="ms-auto">Not assigned</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="progress-wrapper">
                <h5>Progression</h5>
                <div className="progress-wrapper-inner flex-wrap d-flex gap-20">
                  <div className="progress-left flex-grow">
                    <ul className="progress-steps list-unstyled m-0 p-0">
                      <li>
                        <span>Step 01</span>
                        <span className="step-icon icon-bg-green">
                          <i className="check-icon2"></i>
                        </span>
                      </li>
                      <li>
                        <span>Step 02</span>
                        <span className="step-icon icon-bg-yellow">
                          <i className="waiting-icon2"></i>
                        </span>
                      </li>
                      <li>
                        <span>Step 03</span>
                        <span className="step-icon icon-bg-red">
                          <i className="lock-icon2"></i>
                        </span>
                      </li>
                      <li>
                        <span>Step 04</span>
                        <span className="step-icon icon-bg-red">
                          <i className="lock-icon2"></i>
                        </span>
                      </li>
                    </ul>
                    <div className="tasks-update">
                      <span className="task-progress-bar">
                        <span
                          className="task-progress"
                          style={{ width: `10%` }}
                        ></span>
                      </span>
                      <h4>
                        Task completed <span className="ms-auto">1/7</span>
                      </h4>
                    </div>
                  </div>

                  <div className="progress-right">
                    <div className="circle-progress-holder">
                      <CircleProgress percentage={25} />
                      <div className="circle-center">
                        <h2>25%</h2>
                        <span>progression</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="theme-btn min-140 mb-1"
                  onClick={() => setIsOpenDialog(true)}
                >
                  View details
                </button>
              </div>
            </div>
            <div className="dashboard-img-carousel">
              <SlickArrows slider={gallerySlider} />
              <SlickSlider
                ref={gallerySlider}
                sliderSettings={gallerySliderSettings}
              >
                <div className="img-slide">
                  <img src={GalleryImg1} alt="" />
                </div>

                <div className="img-slide">
                  <img src={GalleryImg2} alt="" />
                </div>
              </SlickSlider>
            </div>
          </div>
        </div>
        <div className="dashboard-widget-area">
          <div className="widgets-wrapper">
            <div className="white-bg-area mb-20">
              <div className="watch-video">
                <div className="watch-video-img">
                  <img src={WatchVideo} alt="" />
                </div>
                <div className="watch-video-text black-gradient-50">
                  <span className="watch-text">
                    Watch the <br />
                    live streaming
                    <br />
                    of your unit.
                  </span>
                  <Link to="#" className="watch-btn">
                    <i className="play-icon"></i>
                    Watch live now
                  </Link>
                </div>
              </div>
            </div>

            <div className="white-bg-area box-shadow-inset">
              <MarketPlace />
              <Link to="#" className="mt-1">
                Go to Market Place
                <i className="sm-icon md-arrow-icon icon-black ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-row flex-box mt-20">
        <div className="flex-box w-100">
          <div className="lastest-documents white-bg-area">
            <DocumentsList />
          </div>

          <div className="payments-stats-wrapper flex-grow white-bg-area">
            <div className="sec-title">
              <h4>Payments</h4>
              <Link to="/payments" className="view-link">
                View details
              </Link>
            </div>
            <div className="payments-stats d-grid gap-10">
              <ContentBox>
                <h3 className="color-green">140,937.00 SAR</h3>
                <span>Already paid since</span>
                <span>Jan 10, 2022</span>
              </ContentBox>

              <ContentBox>
                <h3 className="color-orange">861,103.00 SAR</h3>
                <span>Left to pay until</span>
                <span>Jan 10, 2023</span>
              </ContentBox>

              <ContentBox>
                <h3>979,249.00 SAR</h3>
                <span>Next payment due</span>
                <span>Nov 30, 2022</span>
              </ContentBox>
            </div>
          </div>

          <div className="dashboard-widget-area">
            <div className="white-bg-area">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-row flex-box mt-20">
        <div className="dashboard-content lastest-news-area box-shadow-inset flex-grow white-bg-area">
          <LatestNews />
        </div>

        <div className="dashboard-widget-area latest-projects">
          <div className="white-bg-area">
            <LatestProject />
          </div>
        </div>
      </div>

      <SidebarDialog
        show={isOpenDialog}
        className={isOpenDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        <RateSalesTeam />
      </SidebarDialog>
    </DashboardHolder>
  );
};

export default Dashboard;
