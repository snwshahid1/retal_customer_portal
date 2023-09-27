import { DeviceUp } from "src/styles/breakpoints";
import styled from "styled-components";

export const ProfileProgressWrapper = styled.div`
  background: #F3EDEB;
  padding: 25px;

  h3 {
    color: var(--secondary-color);
    font-size: 16px;
  }
  h5{
    color: var(--secondary-color);
    font-size: 12px;
  }

  .progress-bar {
    display: block;
    background: rgba(133, 85, 58, 0.25);
    height: 4px;
    width: 100%;
    position: relative;
    border-radius: 5px;
    margin-top: 15px;

    .actual-progress {
      border-radius: 5px;
      position: absolute;
      top: 0;
      height: 100%;
      width: 0;
      transition: width 0.7s ease-in;
      transition-delay: 0.1s;
      background: var(--primary-color);
    }
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px auto 0;
  width: 100%;

  .detail-content {
    flex-grow: 1;
    background: var(--white);
    padding: 15px;

    @media ${DeviceUp.sm} {
      padding: 25px;
    }

    h3 {
      font-size: 20px;
    }

    .form-wrapper {
      .form-field {
        padding-bottom: 10px;
      }
    }
  }
`;

export const Sidebar = styled.aside`
  min-width: 100%;
  background: var(--white);
  padding: 15px;

  @media ${DeviceUp.sm} {
    min-width: 250px;
  }

  .user-info {
    text-align: center;
    margin: 10px 0 40px;

    .user-name-id {
      margin: 30px 0 15px;

      h3 {
        font-size: 20px;
        margin-bottom: 4px;
      }

      p {
        strong {
          font-weight: 500;
        }
      }
    }

    .user-profile-img {
      width: 120px;
      margin: 0 auto 15px;
      position: relative;

      img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        margin: 0 auto;
      }

      .edit-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        background: var(--primary-color);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 3px solid var(--white);
        cursor: pointer;
        position: absolute;
        bottom: -4px;
        right: 2px;
      }
    }
  }

  .profile-sidebar-links {
    ul {
      li {
        margin-bottom: 4px;

        a {
          padding: 10px 15px;
          display: flex;
          align-items: center;

          &.active,
          &:hover {
            background: #EDE7E5;
            color: var(--secondary-color);

            i {
              filter: invert(30%) sepia(80%) saturate(331%) hue-rotate(338deg) brightness(97%) contrast(86%);
            }
          }
          i {
            min-width: 15px;
            height: 15px;
            width: 15px;
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
    }
  }
`;