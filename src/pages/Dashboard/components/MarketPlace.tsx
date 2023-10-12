import { FC, memo, useRef } from "react";
import MarketPlaceImg1 from "src/assets/images/marketplace-img1.png";
import MarketPlaceImg2 from "src/assets/images/marketplace-img2.png";
import SlickSlider from "src/components/SlickSlider";
import SlickArrows from "./SlickArrows";

const MarketPlace: FC<any> = () => {
  const marketPlace = useRef(null);

  const CarouselData = [
    {
      itemImage: MarketPlaceImg1,
      text: "Extended Warranties",
    },
    {
      itemImage: MarketPlaceImg1,
      text: "Smart Technology",
    },
    {
      itemImage: MarketPlaceImg2,
      text: "Home Staging",
    },
  ];

  const sliderSettings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
  };

  return (
    <>
      <div className="sec-title">
        <h4>MARKETPLACE</h4>
        <SlickArrows slider={marketPlace} />
      </div>
      <div className="marketplace-slider">
        <SlickSlider ref={marketPlace} sliderSettings={sliderSettings}>
          {CarouselData.map(({ itemImage, text }: any, i: number) => (
            <div key={i}>
              <div className="slider-item">
                <div className="slide-img">
                  <img src={itemImage} alt="" />
                </div>
                <div className="slide-text">{text}</div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </>
  );
};

export default memo(MarketPlace);
