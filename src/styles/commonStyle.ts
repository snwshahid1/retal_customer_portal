import styled from "styled-components";
import { DeviceDown, DeviceUp } from "./breakpoints";

export const ToggleMenuStyle = `
  .toggleMenu {
    position: absolute;
    right: 0px;
    top: -45px;

    .dots-icon {
      transform: rotate(90deg);
      cursor: pointer;
    }

    .toggle-menu-dropdown {
      width: 285px;
      padding: 0;
      border-radius: 10px;

      li {
        &:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        a {
          padding: 25px;
          display: flex;
          align-items: center;
          font-weight: 500;

          i {
            display: inline-block;
            width: 25px;
            height: 25px;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;

export const FilterHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  flex-grow: 1;

  @media ${DeviceDown.md} {
    width: 100%;
    justify-content: space-between;

    & > div {
      min-width: calc(50% - 10px);
    }
  }

  @media ${DeviceDown.sm} {
    & > div {
      min-width: 100%;
    }
  }

  .react-datepicker__tab-loop {
    margin-left: -10px;
  }
  select {
    min-width: 170px;
  }

  select,
  input {
    cursor: pointer !important;
    font-size: 16px;

    @media ${DeviceUp.md} {
      font-size: 14px;
    }
  }
`;

export const SlickArrowsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 60px;
  margin-left: 10px;
  position: relative;
  z-index: 1;

  .slider-arrow {
    background: var(--secondary-color);
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    margin: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &-left {
      background: var(--light-gray);

      i {
        transform: scale(-1);
        filter: invert(45%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);

      }
    }

    &.slick-disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }

    &:not(.slick-disabled) {
      &:hover {
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
      }
    }

    i {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-size: contain;
    }
  }
`;