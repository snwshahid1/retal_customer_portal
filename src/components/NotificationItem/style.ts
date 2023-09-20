import styled from "styled-components";

export const NotificationWrapper = styled.div`
  padding: 16px 30px;
  position: relative;
  border-bottom: 1px solid var(--lightest-shade);

  &:last-child {
    border-bottom: none;
  }

  &.unread-item {
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      left: 0;
      top: 0;
      bottom: 0;
      height: 40px;
      background: rgb(var(--theme-green));
      width: 5px;
    }
    background: #EDE7E5;
    border-bottom-color: #EDE7E5; 
  }

  a {
    display: flex;
    align-items: flex-start;

    .notification-text {
      flex-grow: 1;
      position: relative;
      padding-right: 70px;
      padding-top: 5px;

      h5 {
        font-size: 15px;
        margin-bottom: 4px;
      }

      p {
        margin: 0;
        font-size: 13px;
      }

      .notify-time {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 13px;
        color: var(--dark-grey);
        opacity: 0.5;
      }
    }

    .img-holder {
      min-width: 40px;
      margin-right: 20px;
      position: relative;

      img {
        min-width: 40px;
        width: 40px;
        height: 40px;
      }

      .unread-bubble {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: rgb(var(--theme-green));
        border: 3px solid var(--white);
        border-radius: 100%;
        position: absolute;
        right: 0;
        bottom: -3px;
      }
    }
  }
`;