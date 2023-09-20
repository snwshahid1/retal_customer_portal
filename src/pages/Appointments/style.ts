import styled from "styled-components";
import { ToggleMenuStyle } from "src/styles/commonStyle";

export const AppointmentsWrapper = styled.div`

`;

export const NewAppointmentWrapper = styled.div`

  .new-appointment-top {
    margin: 0 -10px;

    h2 {
      padding: 0 12px 10px;
    }
  }
  .new-appointment-bottom {
    padding: 25px 30px;
    position: sticky;
    bottom: -20px;
    border-top: 1px solid var(--lightest-shade);
    background: var(--white);
    margin: 0 -25px;
  }
`;

export const AppointmentDetailWrapper = styled.div`
  position: relative;
  
  h2 {
    margin-bottom: 15px;
  }

  ${ToggleMenuStyle}

  .appointment-title-wrapper {
    position: relative;
    margin: 0 -25px;
    min-height: 140px;
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
      padding: 16px 25px;

      .app-date,
      .app-month {
        text-decoration: underline;
      }
      .app-date {
        font-weight: 700;
        font-size: 28px;
      }
      h4 {
        margin-top: auto;
        color: var(--white);
        font-size: 18px;
        padding-bottom: 5px;
      }
    }
  }

  .appointment-detail-list {
    padding: 25px 0;

    li {
      min-height: 40px;
      padding: 10px 0;
      display: flex;
      align-items: center;
      color: var(--secondary-color);

      span {
        display: inline-block;
      }
      .detail-label {
        min-width: 140px;
        color: var(--dark-grey);
        opacity: 0.6;
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
    margin: 30px 0 15px;

    .comment-title {
      margin-right: 10px;
      padding-top: 3px;
    }
    
    .comment-text {
      opacity: 0.5;
      line-height: 24px;
      font-size: 13px;
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
    padding-top: 10px;

    h4 {
      color: var(--primary-color);
      margin-bottom: 15px;
      font-size: 16px;
    }
    ul {
      min-height: 220px;
      border-bottom: 1px solid var(--lightest-shade);

      li {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 6px;
        color: var(--dark-grey);
      }
    }
  }

  .app-details-bottom {
    margin-top: 25px;
    
    label {
      display: block;
      margin: 0 0 10px;
      font-weight: 500;
    }

    .app-quality {
      text-align: center;
      padding: 20px;
      background: #FAFAFA;
      margin-bottom: 25px;

      .star-rating {
        padding: 8px 0;
      }

      .star-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 3px 8px;
        cursor: pointer;
      }
    }

    .form-field {
      padding-bottom: 15px;
    }
  }
`;