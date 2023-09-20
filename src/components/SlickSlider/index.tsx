import { forwardRef, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./style";

const SlickSlider = forwardRef(function SlickSlider(
  { sliderSettings, children }: any,
  ref: any
) {
  return (
    <SliderWrapper>
      <Slider ref={ref} {...sliderSettings}>
        {children}
      </Slider>
    </SliderWrapper>
  );
});

export default memo(SlickSlider);
