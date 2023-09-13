import { DeviceUp } from "src/styles/breakpoints";
import styled from "styled-components";


export const HeaderWrapper = styled.header`
  background: #fff;
  padding: 5px 15px;
  display: flex;
  align-items: center;

  @media ${DeviceUp.sm} {
    padding: 5px 25px; 
  }
  .separator {
    display: inline-block;
    width: 1px;
    height: 30px;
    background: rgba(102, 102, 102, 0.15);
    margin: 0 20px;
  }
`;

export const NotifyIcon = styled.button`
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: 10px 0;
  padding: 0;
  cursor: pointer;
`;

export const NotifyBubble = styled.span`
  background: var(--white);
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border-radius: 100%;
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    box-shadow: 0 0 9px var(--primary-color);
    background: var(--primary-color);
    position: absolute;
    border-radius: 100%;
    top: 0;
    left: 0;
    margin: auto;
    right: 0;
    bottom: 0;
  }
`;
