import { styled } from "styled-components";
import SearchIcon from "src/assets/icons/search-icon.svg";
import { DeviceUp } from "src/styles/breakpoints";

export const SearchbarWrapper = styled.div`
  position: relative;
  margin: 6px 0;
  width: 100%;

  @media ${DeviceUp.lg} {
    width: 300px;
    margin-left: auto;
  }


  .search-btn {
    position: absolute;
    background: url(${SearchIcon}) no-repeat center center;
    background-size: contain;
    border: none;
    cursor: pointer;
    width: 13px;
    height: 13px;
    left: 14px;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .search-field {
    border: 1px solid var(--lightest-shade);
    background: var(--white);
    padding: 10px 15px 10px 35px;
    width: 100%;
  }
`;