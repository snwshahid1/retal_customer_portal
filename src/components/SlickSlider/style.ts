import styled from "styled-components";
import SliderArrow from "src/assets/icons/arrow-icon.svg";

export const SliderWrapper = styled.div`
  position: relative;

  .slick-slider {
    .slick-prev {
      transform: translate(0, -50%) scale(-1);
    }
    .slick-prev, 
    .slick-next {
      background: url(${SliderArrow}) no-repeat center center;
      filter: invert(60%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);

      &::before {
        display: none;
      }
    }
  }
`