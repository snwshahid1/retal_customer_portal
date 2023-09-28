import { DeviceDown, DeviceUp } from "src/styles/breakpoints";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  padding: 15px 10px 0;

  @media ${DeviceUp.md} {
    padding: 25px 40px 0;
  }

  .full-page-img {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgb(18,18,18, 0.45);
      background: -moz-linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.35) 100%);
      background: -webkit-linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.35) 100%);
      background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.35) 100%);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .content-wrapper {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: auto;
    height: 100%;
    color: var(--white);

    h1 {
      color: var(--white);
      font-size: 34px;
      font-weight: 400;
      font-family: var(--font-family);
      padding-bottom: 5px;
    }

    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 64px;
      }
    }

    .text-block {
      max-width: 360px;
      margin: auto;
      text-align: center;
      padding: 30px 0 0;

      @media ${DeviceDown.sm} {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        h1 {
          margin-top: auto;
        }

        .theme-btn {
          margin-top: auto !important;
        }
      }

      p {
        color: rgba(255, 255, 255, 0.75);
        font-size: 16px;
      }

      .theme-btn {
        margin-top: 30px;
        font-size: 16px;
      }
    }
  }
`;