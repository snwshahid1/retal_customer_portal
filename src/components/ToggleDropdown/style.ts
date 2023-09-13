import styled from "styled-components";

export const DropDown = styled.div`
  background: var(--white);
  box-shadow: 0 3px 20px rgba(0,0,0,.15);
  margin: 14px auto auto;
  opacity: 0;
  padding: 8px;
  position: absolute;
  right: 0;
  left: 0;
  transition: transform .2s,opacity .2s,visibility 0s linear .2s;
  visibility: hidden;
  width: 175px;
  will-change: transform;
  z-index: 99;

  &.visible {
    opacity: 1;
    transform: translateY(-3px);
    transition: transform .2s,opacity .2s,visibility linear;
    visibility: visible;
  }

  li {
    margin: 2px 0;
  }
`;