import styled from "styled-components";

export const GrayoutWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
`;

export const Dialog = styled.dialog`
  width: 350px;
  background: var(--white);
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 5px;
  min-height: 100vh;
  z-index: 999;
  display: block;
  padding: 16px;
  border: none;
  left: auto;
  transition: transform 0.4s;
  transform: translateX(350px);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;

  &.show-dialog {
    transform: translateX(0px);
  }

  .dialog-content {
    height: 100%;
  }

  .dialog-close-btn {
    background: var(--lightest-shade);
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }
`;