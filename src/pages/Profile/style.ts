import { DeviceUp } from "src/styles/breakpoints";
import styled from "styled-components";

export const ProfileProgressWrapper = styled.div`
  background: pink;
  padding: 25px;

  .progress-bar {
    display: block;
    background: red;
    height: 4px;
    width: 100%;
    position: relative;
    border-radius: 5px;
    margin-top: 10px;

    .actual-progress {
      border-radius: 5px;
      position: absolute;
      top: 0;
      height: 100%;
      transition: width 0.7s;
      transition-delay: 0.2s;
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
    margin: 20px 0 40px;

    .user-profile-img {
      width: 120px;
      margin: 0 auto 20px;
      position: relative;

      img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        margin: 0 auto 20px;
      }

      .edit-btn {
        display: inline-block;
        padding: 0;
        background: var(--primary-color);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid var(--white);
        cursor: pointer;
        position: absolute;
        bottom: -5px;
        right: -5px;
      }
    }
  }

  .profile-sidebar-links {
    ul {
      li {
        margin-bottom: 4px;

        a {
          display: block;
          padding: 8px 15px;

          &.active,
          &:hover {
            background: red;
          }
          i {

          }
        }
      }
    }
     
  }
`;