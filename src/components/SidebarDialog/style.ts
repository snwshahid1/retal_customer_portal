import { DeviceUp } from "src/styles/breakpoints";
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
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--white);
  color: inherit;
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 5px;
  z-index: 99999;
  padding: 25px 25px 0;
  border: none;
  left: auto;
  transition: transform 0.4s;
  transform: translateX(110%);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  box-shadow: 0 3px 25px rgba(15, 28, 82, 0.15);

  @media ${DeviceUp.sm} {
    width: 400px;
  }

  &.show-dialog {
    transform: translateX(0px);
  }

  .dialog-content {
    padding: 25px 0 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    h2 {
      font-size: 22px;
      padding-bottom: 10px;
    }
  }

  .dialog-close-btn {
    background: var(--light-gray);
    border: none;
    cursor: pointer;
    border-radius: 50%;
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;
    margin-left: -4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;