import styled from "styled-components";
import CheckedIcon from "src/assets/icons/checked-icon.svg";
import ArrowIcon from "src/assets/icons/arrow-icon.svg";

let CommonStyle = `
  font-family: inherit;
  font-size: 16px;
  display: block;
  width: 100%;

  &.textbox {
    height: 40px;
    padding: 5px 15px;
    background: var(--white);
    border: 1px solid var(--lightest-shade);
    cursor: text;

    &:focus,
    &:hover {
      border-color: var(--primary-color);
    }
  }

  &.textbox-v2 {
    background: var(--light-gray-v1);
    border-color: var(--light-gray-v1);
    color: var(--secondary-color);
  }

  &.icon-right-long {
    padding-right: 130px; 
  }
  &.icon-end {
    padding-right: 35px; 
  }

  &.icon-start {
    padding-left: 35px; 
  }

  &.h-50 {
    height: 55px;
  }
`;

export const TextBox = styled.input`
  ${CommonStyle};
`;

export const TextAreaBox = styled.textarea`
  ${CommonStyle};
  min-height: 150px;
  resize: none;

  &.h-60 {
    min-height: 60px;
  }
`;

export const SelectWrap = styled.div`
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
  }
`;

export const SelectBox = styled.select`
  ${CommonStyle};
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 35px !important;
  color: var(--secondary-color) !important;

  option {
    font-family: var(--font-family);
    color: var(--secondary-color);
  }
`;

export const IconHolder = styled.div`

  &.icon-holder {
    position: relative;

    .field-icon {
      position: absolute;
      right: 11px;
      top: 0;
      bottom: 0;
      margin: auto;
      display: inline-flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
      }

      i {
        margin-left: 10px;
      }
    }
  }
`;

export const StyledCheckBox = styled.span`
  display: inline-flex;

  input {
    display: none;

    &:checked {
      & + label {
        background: var(--primary-color);
        border-color: var(--primary-color);

        &::before {
          display: block;
        }
      }
    }
  }
  label {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(0, 15, 41, 0.1);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      display: none;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 18px;
      height: 13px;
      position: absolute;
      z-index: 1;
      background: url(${CheckedIcon}) no-repeat center center;
      background-size: contain;
    }
  }
`;
