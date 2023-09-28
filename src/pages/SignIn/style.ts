import { DeviceDown, DeviceUp } from "src/styles/breakpoints";
import styled from "styled-components";

export const SignInWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${DeviceDown.sm} {
    flex-grow: 1;
    flex-direction: column;
  }

  .half-screen {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 170px;

    @media ${DeviceUp.sm} {
      width: 50%;
      min-height: 100vh;
    }
    @media ${DeviceDown.sm} {
      .hide-sm {
        display: none;
      }
    }
  }

  .text-area-screen {
    flex-grow: 1;
  }

  .full-width-img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

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

  .content-area {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: auto;
    width: 100%;
    padding: 15px 15px 0;

    @media ${DeviceUp.md} {
      padding: 25px 40px 0;
    }
  }

  .logo {
    max-width: 65px;
    text-align: center;
    margin: auto;
    padding: 10px 0;

    @media ${DeviceUp.sm} {
      max-width: 120px;
    }
  }

  .text-block {
    max-width: 360px;
    width: 100%;
    margin: auto;
    padding: 30px 0 0;

    @media ${DeviceDown.sm} {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin: 0 auto;

      .theme-btn {
        margin-top: auto;
      }

      .btn-inline {
        text-align: right;
      }
    }

    h1 {
      font-size: 32px;
      font-weight: 500;
    }

    .theme-btn {
      font-size: 16px;
    }
  }

  .form-field {
    margin-top: 40px;

    .user-icon {
      height: 15px;
    }
  }

  .code-fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 10px;
    padding: 25px 0;

    @media ${DeviceUp.md} {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }

    .code-input {
      width: 65px;
      height: 65px;
      font-size: 45px;
      text-align: center;
      margin: auto;

      @media ${DeviceUp.md} {
        width: 80px;
        height: 80px;
      }

      &:hover, 
      &:focus {
        border-color: var(--secondary-color);
      }
    }
  }

  .bottom-text {
    padding: 30px 0 15px;

    strong {
      display: block;
      font-weight: 700;
      color: var(--secondary-color);
    }

    p {
      font-size: 13px;
      line-height: 22px;
      margin: 0;
      color: var(--dark-grey);

      a {
        text-decoration: underline;
      }
    }
  }
`;