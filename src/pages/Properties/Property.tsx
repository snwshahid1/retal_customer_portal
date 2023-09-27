import { Link } from "react-router-dom";
import { PropertiesDetailsHolder } from "./style";
import Map from "src/assets/images/property-map.png";
import SlickSlider from "src/components/SlickSlider";
import ProperyImage from "src/assets/images/property-main-img.png";
import QuickAccess from "src/components/QuickAccess";
import PrjectUpdateImage from "src/assets/images/project-widget-img.png";
import { useState } from "react";

const Property = () => {
  const [showSlide, setShowSlide] = useState(1);

  const sliderGallerysettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current:number) => setShowSlide(current+ 1)
  };

  const propertyInfoSliderSettings = {
    draggable: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const QuickAccessLinks = [
    {
      iconClass: "qc-ticket-icon",
      boxClass: "qc-border-1",
      text: "Raise Ticket",
      route: "/create-ticket#new-ticket"
    },
    {
      iconClass: "qc-calendar-icon",
      boxClass: "qc-border-2",
      text: "Appointment",
      route: "/request-appointment"
    },
    {
      iconClass: "qc-document-icon",
      boxClass: "qc-border-3",
      text: "Documentation",
      route: "/documents"
    },
    {
      iconClass: "qc-marketplace-icon",
      boxClass: "qc-border-4",
      text: "Marketplace",
      route: "/"
    },
    {
      iconClass: "qc-floor-icon",
      boxClass: "qc-border-5",
      text: "Floor plan",
      route: "/"
    },
    {
      iconClass: "qc-payments-icon",
      boxClass: "qc-border-6",
      text: "Payments",
      route: "/payments"
    },
    {
      iconClass: "qc-warranty-icon",
      boxClass: "qc-border-7",
      text: "Warranty",
      route: "/warranty"
    },
    {
      iconClass: "qc-dashboard-icon",
      boxClass: "qc-border-8",
      text: "Progression",
      route: "/"
    },
    {
      iconClass: "qc-phone-icon",
      boxClass: "qc-border-9",
      text: "Contact",
      route: "/contact"
    }
  ]

  const PropertyCarouselImages = [
    {imageURL: ProperyImage},
    {imageURL: 'https://dummyimage.com/1500x600/EEE/000'},
    {imageURL: 'https://dummyimage.com/1500x600/222/000'},
  ]


  const [slidesCount, setSlidesCount] = useState('');
  return(
    <>
      <PropertiesDetailsHolder>
        <Link to="/properties">
          <i className="sm-icon arrow-icon-right arrow-icon icon-black me-2"></i> 
          Back to properties
        </Link>

        <div className="property-top-section">
            <div className="property-img-carousel">
              <SlickSlider 
                sliderSettings={sliderGallerysettings} 
                slidesCount={slidesCount}
                setSlidesCount={setSlidesCount}
              >
                {PropertyCarouselImages.map( ({ imageURL}, i:number) => (
                  <img src={imageURL} alt="" key={i} />
                ))}
              </SlickSlider>
            </div>
            <span className="count-slides">{showSlide} / {PropertyCarouselImages.length}</span>
            <Link to="#" className="theme-btn construction-btn">
              <i className="sm-icon camera-icon me-2"></i> Live construction
            </Link>
        </div>

        <div className="flex-base-wrapper align-items-start gap-20">
          <div className="property-info">
            <div className="white-text-box mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="property-name-loc">
                  <h3>Ayala Al Nakheel</h3>
                  <p className="property-loc">
                    <i className="sm-icon map-marker-icon me-2"></i>
                    Khobar • 128 Villa Ayala Al Nakheel, Khobar
                  </p>
                </div>

                <div className="propery-info-carousel-wrapper">
                  <ul className="list-style-none p-0 m-0 propery-info-carousel">
                    <SlickSlider sliderSettings={propertyInfoSliderSettings}>
                      <li>
                        <div className="info-item">
                          <span className="icon-holder"><i className="villa-icon"></i></span>
                          <span>Property</span>
                          <strong>Villa</strong>
                        </div>
                      </li>

                      <li>
                        <div className="info-item">
                          <span className="icon-holder"><i className="floor-icon"></i></span>
                          <span>Floor</span>
                          <strong>3</strong>
                        </div>
                      </li>

                      <li>
                        <div className="info-item">
                          <span className="icon-holder"><i className="bedroom-icon"></i></span>
                          <span>Bedrooms</span>
                          <strong>3</strong>
                        </div>
                      </li>

                      <li>
                        <div className="info-item">
                          <span className="icon-holder"><i className="bathroom-icon"></i></span>
                          <span>Bathrooms</span>
                          <strong>4</strong>
                        </div>
                      </li>

                      <li>
                        <div className="info-item">
                          <span className="icon-holder"><i className="villa-icon"></i></span>
                          <span>Porch</span>
                          <strong>2</strong>
                        </div>
                      </li>
                    </SlickSlider>
                  </ul>
                </div>
              </div>
            </div>

            <div className="white-text-box">
              <h4>View on map</h4>
              <div className="propery-map">
                <img src={Map} alt="" />
              </div>
            </div>
          </div>

          <div className="property-details">
            <div className="property-widget">
              <h5>Property information</h5>
              <ul className="list-style-none p-0 m-0 property-info-list">
                <li>
                  <span>Status</span>
                  <span className="color-green">
                    <strong>Handed Over 100% &bull;</strong> may 16, 2023
                  </span>
                </li>
                <li>
                  <span>Buy</span>
                  <span>On Nov 12, 2022</span>
                </li>
                <li>
                  <span>Location</span>
                  <span>Khobar</span>
                </li>
                <li>
                  <span>Customer number</span>
                  <span>#2861493d</span>
                </li>
              </ul>
            </div>

            <div className="property-widget">
              <h5>Quick access</h5>
              <QuickAccess links={QuickAccessLinks} />
            </div>

            <div className="property-widget">
              <h5>Project update</h5>
              <div className="project-update">
                <img src={PrjectUpdateImage} alt="" />
                <div className="project-update-text">
                  <span className="project-date">March 08, 2023</span>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PropertiesDetailsHolder>
    </>
  )
}

export default Property