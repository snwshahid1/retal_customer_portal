import { SlickArrowsWrapper } from "src/styles/commonStyle";
import { FC, memo } from "react";

const SlickArrows: FC<any> = ({ slider }: any) => {
  return (
    <SlickArrowsWrapper className="slider-arrows">
      <button
        className={`slider-arrow slider-arrow-left`}
        aria-label="Previous"
        onClick={() => slider?.current?.slickPrev()}
      >
        <i className="arrow-icon"></i>
      </button>
      <button
        className="slider-arrow slider-arrow-right"
        aria-label="Next"
        onClick={() => slider?.current?.slickNext()}
      >
        <i className="arrow-icon"></i>
      </button>
    </SlickArrowsWrapper>
  );
};

export default memo(SlickArrows);
