import { FC, memo, useRef } from "react";
import { LatestProjectHolder } from "../style";
import SlickSlider from "src/components/SlickSlider";
import ProjectImage from "src/assets/images/latest-project.png";
import ProjectImage2 from "src/assets/images/latest-project2.png";
import { Link } from "react-router-dom";
import SlickArrows from "./SlickArrows";

const LatestProject: FC<any> = () => {
  const projectSlider = useRef(null);

  const CarouselData = [
    {
      itemImage: ProjectImage,
      title: "Retal Rise, your new paradise.",
      location: "8 Apt Retal Rise, Khobar.",
      link: "#",
    },
    {
      itemImage: ProjectImage2,
      title: "Ayala Al Nakheel",
      location: "Khobar • 128 Villa Ayala Al Nakheel, Khobar",
      link: "#",
    },
    {
      itemImage: ProjectImage,
      title: "Ewan Sedra",
      location: "8 Villa Ewan Sedra, Riyadh.",
      link: "#",
    },
  ];

  const sliderSettings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <LatestProjectHolder>
      <div className="sec-title">
        <h4>Latest project</h4>
        <SlickArrows slider={projectSlider} />
      </div>

      <div className="latest-project-carousel">
        <SlickSlider ref={projectSlider} sliderSettings={sliderSettings}>
          {CarouselData.map(
            ({ itemImage, title, location, link }: any, i: number) => (
              <div key={i}>
                <div className="slider-item">
                  <div className="slide-img">
                    <img src={itemImage} alt="" />
                  </div>
                  <div className="slide-text black-gradient-90">
                    {location && (
                      <span className="location">
                        <i className="sm-icon map-marker-icon"></i> {location}
                      </span>
                    )}
                    <h3>{title}</h3>
                    <Link to={link} className="theme-btn theme-btn-white">
                      Discover
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </SlickSlider>
      </div>
    </LatestProjectHolder>
  );
};

export default memo(LatestProject);
