import styled from "styled-components";

export const NotificationWrapper = styled.div`
  padding: 15px 30px;
  position: relative;
  border-bottom: 1px solid var(--lightest-shade);

  &.unread-item {
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      left: 0;
      top: 0;
      bottom: 0;
      height: 40px;
      background: red;
      width: 5px;
    }
    background: pink;
  }

  a {
    display: flex;
    align-item: flex-start;

    .notification-text {
      flex-grow: 1;
      position: relative;
      padding-right: 70px;

      p {
        margin: 0;
      }

      .notify-time {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 13px;
      }
    }

    .img-holder {
      min-width: 36px;
      margin-right: 15px;
      position: relative;

      img {
        width: 36px;
        height: 36px;
      }

      .unread-bubble {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: rgb(var(--theme-green));
        border: 2px solid var(--white);
        border-radius: 100%;
        position: absolute;
        right: 0;
        bottom: 8px;
      }
    }
  }
`;