import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import classNames from "classnames";
import Tab1Gallery from "./TabContent/Tab1Gallery";
import Tab2Gallery from "./TabContent/Tab2Gallery";
import Tab3Gallery from "./TabContent/Tab3Gallery";
import Tab4Gallery from "./TabContent/Tab4Gallery";
import Tab1Content from "./TabContent/Tab1Content";
import Tab4Content from "./TabContent/Tab4Content";
import Tab2Content from "./TabContent/Tab2Content";
import Tab3Content from "./TabContent/Tab3Content";

const Dashboard = () => {
  const locHash = useLocation();
  const salesTeam = locHash.hash === "#salesTeam" ? true : false;

  const [isSalesDialog, setIsSalesDialog] = useState(salesTeam);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const propertySlider = useRef<any>('');
  const gallerySlider = useRef(null);

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
    setIsSalesDialog(false);
  }

  const gallerySliderSettings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const propertySliderSettings = {
    draggable: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    //afterChange: (index: any) => test(index),
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const propertyTabs = [
    'Property n°861103',
    'Property n°268638',
    'Property n°59762',
    'Property n°329469'
  ]
  const propertyTabsCount = propertyTabs.length-1;
  const [currentTab, setCurrentTab] = useState<number>(propertyTabsCount);
  const [currentTabPanel, setCurrentTabPanel] = useState<string>(`tabpanel-${propertyTabsCount}`);

  const goToTab = (index: any) => {
    setCurrentTab(index);
    setCurrentTabPanel(`tabpanel-${index}`)
  }

  return (
    <>
      <DashboardHolder>
        <div className="dashboard-top-section flex-box">
          <div className="dashboard-content white-bg-area">
            <div className="flex-box align-items-start">
              <div className="property-progress-area">
                <div className="sec-title">
                  <h4>Property &amp; Progress</h4>
                  <SlickArrows slider={propertySlider} />
                </div>

                <div className="property-sm-carousel">
                  <SlickSlider
                    ref={propertySlider}
                    sliderSettings={propertySliderSettings}
                  >
                    {propertyTabs.map( (item, index) => (
                      <div className="slider-item" key={index}>
                        <div
                          className={ classNames("property-tag", {"active-tab" : index == currentTab} )}
                          data-slide={index}
                          onClick={(e) => goToTab(index)}
                        >
                          {item}
                        </div>
                      </div>
                    ))}
                  </SlickSlider>
                </div>

                {currentTabPanel && currentTabPanel === 'tabpanel-0' && 
                  <Tab1Content opendDialog={() => setIsOpenDialog(true)} />
                }
                {currentTabPanel && currentTabPanel === 'tabpanel-1' && 
                  <Tab2Content opendDialog={() => setIsOpenDialog(true)} />
                }
                {currentTabPanel && currentTabPanel === 'tabpanel-2' && 
                  <Tab3Content opendDialog={() => setIsOpenDialog(true)} />
                }
                {currentTabPanel && currentTabPanel === 'tabpanel-3' && 
                  <Tab4Content opendDialog={() => setIsOpenDialog(true)} />
                }
              </div>
              <div className="dashboard-img-carousel">
                <SlickArrows slider={gallerySlider} />
                {currentTabPanel && currentTabPanel === 'tabpanel-0' && 
                  <Tab1Gallery referance={gallerySlider} sliderSettings={gallerySliderSettings} />
                }
                {currentTabPanel && currentTabPanel === 'tabpanel-1' &&
                  <Tab2Gallery referance={gallerySlider} sliderSettings={gallerySliderSettings} />
                }
                {currentTabPanel && currentTabPanel === 'tabpanel-2' &&
                  <Tab3Gallery referance={gallerySlider} sliderSettings={gallerySliderSettings} />
                }
                {currentTabPanel && currentTabPanel === 'tabpanel-3' &&
                  <Tab4Gallery referance={gallerySlider} sliderSettings={gallerySliderSettings} />
                }
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
      </DashboardHolder>

      <SidebarDialog
        show={isOpenDialog || isSalesDialog}
        className={isOpenDialog || isSalesDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        <RateSalesTeam />
      </SidebarDialog>
    </>
  );
}

export default Dashboard;
