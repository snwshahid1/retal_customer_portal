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

  .bg-grey-field {
    background: #FAFAFA;
  }

  .px-15 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .time-slots-wrapper {
    gap: 7px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    margin-bottom: 15px;
    padding: 20px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    .time-slot {
      position: relative;

      label {
        background: var(--white);
        border: 1px solid var(--lightest-shade);
        padding: 10px 5px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
      }

      input[type="radio"] {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;

        &:checked + label {
          color: var(--white);
          background: var(--primary-color);
          border-color: var(--primary-color);
        }
      }
    }
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