import styled from "styled-components";

let CommonStyle = `
  font-family: inherit;
  font-size: 18px;
  display: block;
  width: 100%;

  &.textbox {
    height: 40px;
    padding: 5px 15px;
    background: var(--white);
    border: 1px solid var(--lightest-shade);
  }

  &.icon-end {
    padding-right: 80px; 
  }

  &.icon-start {
    padding-left: 80px; 
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
  min-height: 200px;
  resize: none;
`;

export const SelectBox = styled.select`
  ${CommonStyle};
`;