import { DeviceUp } from "src/styles/breakpoints";
import { styled } from "styled-components";

export const ContactWrapper = styled.div`
  .half-screen {
    width: 100%;

    @media ${DeviceUp.sm} {
      width: 46%;
    }
  }

  .white-text-box {
    @media ${DeviceUp.md} {
      padding: 45px 30px;
    }
  }
  .contact-text-block {
    @media ${DeviceUp.sm} {
      margin-top: 35px;
    }

    h3 {
      font-size: 22px;
      padding-bottom: 5px;
    }
    p {
      line-height: 26px;
      padding: 0 0 20px;
      color: #5D5D5E;
    }
  }

  .contact-us-list {
    margin: 50px 0 30px;
    li {
      display: flex;
      align-items: center;
      margin: 20px 0;
      font-weight: 500;

      .icon-holder {
        min-width: 36px;
        width: 36px;
        height: 36px;
        background: var(--primary-color);
        margin-right: 16px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          display: inline-block;
          width: 18px;
          height: 14px;
          background-size: contain !important;
        }
      }
    }
  }

  .contact-map {
    iframe, 
    img {
      display: block;
      width: 100%;
    }
  }
`;