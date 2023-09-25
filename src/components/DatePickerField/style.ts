import styled from "styled-components";
import ArrowIcon from "src/assets/icons/arrow-icon.svg";
import { DeviceDown } from "src/styles/breakpoints";

export const DateField = styled.div`
  position: relative;

  &:before {
    content: "";
    right: 11px;
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    filter: invert(100%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);
    transform: rotate(90deg);
    background: url(${ArrowIcon}) no-repeat center center;
    background-size: contain !important;
    pointer-events: none;
    z-index: 1;
  }

  .date-icon {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 10px;
  }

  .react-datepicker-wrapper {
    display: block;
  }

  & input {
    height: 40px;
    padding: 5px 32px;
    background: var(--white);
    border: 1px solid var(--lightest-shade);
    color: var(--secondary-color);
    cursor: text;
    font-family: inherit;
    min-width: 270px;
    width: 100%;

    @media ${DeviceDown.xs} {
      min-width: 100%;
    }

    &:focus,
    &:hover {
      border-color: var(--primary-color);
    }
  }
`;