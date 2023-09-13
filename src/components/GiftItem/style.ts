

import { styled } from "styled-components";
import { DeviceUp } from "src/styles/breakpoints";

export const GiftItem = styled.div`
  background: var(--white);
  padding: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media ${DeviceUp.sm} {
    width: calc(50% - 5px);
  }

  .gift-icon {
    margin: 0 15px 0 5px;
    min-width: 40px;
    width: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gift-detail {
    h5 {
      font-size: var(--fs-15);
      margin: 5px 0 10px;
    }
    .expiry-date {
      font-size: 12px;
      color: rgba(var(--dark-color), 0.3);
    }
  }
`;
