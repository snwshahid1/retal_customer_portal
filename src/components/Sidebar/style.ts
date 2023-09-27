import styled from "styled-components";
import { DeviceUp } from "src/styles/breakpoints";
import ArrowIcon from "src/assets/icons/arrow-icon.svg";

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background: var(--primary-color);
  color: var(--white);
  transition: all 0.4s;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  overflow: auto;
  padding: 20px;
  transform: translate(-270px);
  min-width: 270px;
  width: 270px;
  height: 100%;
  font-size: 13px;
  text-wrap: nowrap;

  @media ${DeviceUp.md} {
    min-width: 220px;
    max-width: 220px;
    padding: 10px;
    position: relative;
    height: auto;
    overflow: visible;
    transform: translate(0);
  }

  &.active {
    transform: translate(0);

    @media ${DeviceUp.md} {
      max-width: 60px;
      min-width: 60px;
      text-align: center;
      transition: all 0.4s;
    }
  }

  &.active .hide-sm-nav,
  &.active .navbar-links a span,
  &.active h4,
  &.active .sidebar-bottom {
    @media ${DeviceUp.md} {
      opacity: 0;
      visibility: hidden;
      transition: all 0s;
    }
  }

  .hide-sm-nav,
  h4,
  .navbar-links a span,
  .sidebar-bottom {
    transition: all 1s;
    transition-delay: 0.2s;
    opacity: 1;
    visibility: visible;
  }

  &.active {
    .user-profile-header {
      padding: 10px 0;
    }
  }

  .sidebar-toggle-btn {
    cursor: pointer;
    position: fixed;
    z-index: 99999;
    left: 194px;
    top: 200px;
    background: var(--secondary-color);
    height: 40px;
    width: 40px;
    border-radius: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    opacity: 0;
    border: none;
    display: none;

    @media ${DeviceUp.md} {
      display: block;
    }

  }
  
  &:hover .sidebar-toggle-btn {
    opacity: 1;
    top: 170px;
    transition: all 0.3s;
  }
  .sidebar-toggle-btn.open {
    left: 40px;
  }
  .sidebar-toggle-btn.open .arrow-icon-right {
    transform: rotate(0deg);
  }

  .nav-wrapper {
    padding: 25px 0px 10px;

    h4 {
      padding: 0 10px;
      margin-bottom: 10px;
    }
  }

  h4 {
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 5px;
  }

  .navbar-links {
    margin: 0 0 20px;
    list-style: none;
    padding: 5px 0;

    li {
      padding: 1px 0;

      a {
        display: flex;
        align-items: center;
        padding: 10px;
        color: rgba(255, 255, 255, 0.7);

        i {
          display: inline-block;
          vertical-align: middle;
          background-size: contain !important;
          width: 14px;
          height: 14px;
          min-width: 14px;
          margin: 0 13px 0 2px;
          opacity: 0.3;
        }

        &.selected,
        &:hover {
          background: rgba(18, 18, 18, 0.15);
          color: var(--white);

          i {
            filter: invert(100%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const HamburgerButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

  @media ${DeviceUp.sm} {
    left: 20px;
  }

  &.open {
    top: 5px;
    left: 225px;
    transition-delay: 0.35s;
    position: fixed;
  }

  @media ${DeviceUp.md} {
    display: none;
  }
`;

export const ContactBox = styled.div`
  background: var(--white);
  padding: 16px 15px;
  color: var(--secondary-color);

  h4 {
    color: var(--secondary-color);
    font-size: var(--fs-14);
  }

  p {
    font-size: 13px;

    a:hover {
      text-decoration: underline;
    }
  }

  .theme-btn {
    margin-top: 7px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  transition: all 0.3s;

  .toggleMenu {
    margin-left: auto;

    .dots-icon {
      opacity: 0.3;
    }

    li {
      a {
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px 15px;

        &::before {
          content: "";
          width: 12px;
          height: 12px;
          display: none;
          position: absolute;
          right: 10px;
          top: 0;
          bottom: 0;
          margin: auto;
          background: url(${ArrowIcon}) no-repeat center center;
          filter: invert(75%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);
        }

        &:hover {
          background: var(--theme-ligth-brown);

          &::before {
            display: block
          }

          i {
            filter: invert(33%) sepia(44%) saturate(525%) hue-rotate(338deg) brightness(96%) contrast(91%);
          }
        }

        i {
          min-width: 15px;
          width: 15px;
          height: 15px;
          margin-right: 15px;
        }
      }
    }
  }

  .user-img {
    min-width: 40px;
    width: 40px;
    margin-right: 16px;
    position: relative;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      object-fit: contain;
    }

    span {
      display: inline-block;
      background: var(--secondary-color);
      border: 2px solid var(--primary-color);
      border-radius: 20px;
      font-size: 9px;
      padding: 4px 5px;
      position: absolute;
      bottom: -11px;
      left: 10px;
      font-family: var(--font-famiyl-secondary);
      font-weight: 700;
    }
  }

  .username {
    strong {
      display:block;
      font-size: var(--fs-15);
    }
    span {
      display: block;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const Copyright = styled.div`
  padding: 30px 0 15px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;

  p {
    margin: 0;
  }
`;
