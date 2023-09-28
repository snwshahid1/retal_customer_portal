import { DeviceDown } from "src/styles/breakpoints";
import styled from "styled-components";


export const PageTitleHolder = styled.div`

  @media ${DeviceDown.xs} {
    width: 100%;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 5px
  }

  h5 {
    font-size: 14px;
    color: rgba(var(--dark-color), 0.35);
    margin-bottom: 5px;
  }
`;