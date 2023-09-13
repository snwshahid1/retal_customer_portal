import styled from "styled-components";

export const AppointmentsWrapper = styled.div`

`;

export const NewAppointmentWrapper = styled.div`

  .new-appointment-top {
    height: 100%;
  }
  .new-appointment-bottom {
    padding: 25px 16px;
    position: sticky;
    bottom: -20px;
    border-top: 1px solid var(--lightest-shade);
    background: var(--white);
    margin: 0 -15px;
  }
`;

export const AppointmentDetailWrapper = styled.div`
  position: relative;

  .dots-icon {
    position: absolute;
    right: 0px;
    top: -20px;
  }

  .appointment-title-wrapper {
    position: relative;
    margin: 0 -16px;
    min-height: 120px;
    display: flex;
    flex-direction: column;

    .appointment-img {
      position: absolute;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .appointment-title {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: relative;
      z-index: 2;
      color: var(--white);
      padding: 16px;

      .app-date,
      .app-month {
        text-decoration: underline;
      }
      .app-date {
        font-weight: 500;
        font-size: 32px;
      }
      h4 {
        margin-top: auto;
        color: var(--white);
      }
    }
  }

  .appointment-detail-list {
    li {
      min-height: 40px;
      padding: 5px 0;
      display: flex;
      align-items: center;

      span {
        display: inline-block;
      }
      .detail-label {
        min-width: 125px;
      }
      .detail-value {
        .user-info {
          align-items: center;

          img {
            width: 30px;
            min-width: 30px;
            height: 30px;
            border-radius: 100%;
            object-fit: cover;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .detail-comments {
    margin: 35px 0 15px;

    .comment-title {
      margin-right: 10px;
    }
  }
  
  .appointment-bottom {
    border-top: 1px solid var(--lightest-shade);
    padding: 25px 0;

    .map-loc {
      margin: 20px auto;

      img,
      iframe {
        width: 100%;
      }
    }
  }
`;

export const AppFeedbackWrapper = styled.div`
  .app-detail-list {
    ul {
      min-height: 220px;
      border-bottom: 1px solid var(--lightest-shade);

      li {
        display: flex;
        flex-wrap: warp;
        justify-content: space-between;
        padding: 6px;
        
      }
    }
  }

  .app-details-bottom {
    margin-top: 25px;

    .app-quality {
      text-align: center;
      padding: 20px;
      background: pink;
      margin-bottom: 25px;
    }

    .form-field {
      padding-bottom: 15px;
    }
    label {
      font-weight: 500;
    }
  }
`;