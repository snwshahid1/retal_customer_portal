import { FC, memo } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./style";


const SlickSlider: FC<any> = ({ sliderSettings, children }) => {
  return (
    <SliderWrapper>
      <Slider {...sliderSettings}>
        {children}
      </Slider>
    </SliderWrapper>
  );
};

export default memo(SlickSlider);
