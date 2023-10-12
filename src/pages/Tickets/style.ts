import { ToggleMenuStyle } from "src/styles/commonStyle";
import styled from "styled-components"

export const TicketsWrapper = styled.div`

`;

export const NewTicketWrapper = styled.div`

  .new-ticket-top {
    margin: 0 -10px;

    .toggle-menu-dropdown {
      width: 100%;
      padding: 10px 25px;
      height: 365px;
      overflow-y: scroll;
    }

    .uploaded-images {
      background: #FAFAFA;
      padding: 18px 0 0;

      h4 {
        font-weight: 500;
        font-family: var(--font-family);
        margin-bottom: 6px;
      }
      .slider-img {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 96%;

        img {
          width: 100%;
        }

        button {
          position: absolute;
          right: 5px;
          top: 5px;
          background: var(--white);
          border: none;
          cursor: pointer;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .sticky-bottom {
    padding: 25px 30px;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    border-top: 1px solid var(--lightest-shade);
    background: var(--white);
    margin: 0 -25px;
  }
`;

export const TicketDetailWrapper = styled.div`
  color: var(--dark-grey);
  position: relative;

  ${ToggleMenuStyle};

  h4 {
    font-size: 16px;
    padding-bottom: 4px;
  }

  h5 {
    font-size: 14px;
  }

  .in-progress {
    min-width: 85px;
    border: 1px solid rgba(var(--theme-brown), 0.2);
    color: rgb(var(--theme-brown));
    display: inline-block;
    text-align: center;
    padding: 7px;
    font-size: 12px;
  }
  .request-ticket-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 10px;
  }

  .ticket-detail {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 15px 0 20px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;

    .ticket-subject {
      min-width: 150px;
    }
  }

  .request-ticket-middle {
    background: rgba(133, 85, 58, 0.05);
    padding: 16px;
    margin-bottom: 15px;

    h5 {
      padding-bottom: 10px;
    }

    p {
      font-size: 12px;
      line-height: 23px;
    }

    .your-message {
      padding-bottom: 20px;
    }

    .slider-img {
      width: 96%;
      
      img {
        width: 100%;
      }
    }
  }

  .request-ticket-bottom {

    .btn-view-more {
      i {
        transform: rotate(-90deg);
        
      }
    }
    .test {
      width: 100%;
      height: 100px;
      background: blue;
    }
  }

  .tickets-status-block {
    padding-bottom: 15px;
  }
`;

export  const TicketStatusBox = styled.div`

  .date {
    display: block;
    padding-top: 15px;
    color: var(--dark-grey);
    font-size: 13px;
  }

  .gray-box {
    background: #FAFAFA;
    padding: 20px 40px 20px 25px;
    margin: 12px auto;
    position: relative;

    .icon-holder {
      display: inline-flex;
      width: 40px;
      height: 40px;
      background: #F7F7F7;
      border-radius: 15px;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 12px;
      top: 15px;

      i {
        width: 16px;
        height: 16px;
        background-size: contain !important;
      }
    }

    .time {
      color: rgba(0, 0, 0, 0.5);
      font-size: 13px;
    }

    h3 {
      margin: 8px 0;
      font-size: 16px;
    }

    p {
      color: #767676;
      font-size: 13px;
    }
  }
`;

export const ReportProblemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h4 {
    color: var(--primary-color);
    padding-bottom: 20px;
  }

  .report-ticket-bottom {
    padding: 25px 30px;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    border-top: 1px solid var(--lightest-shade);
    background: var(--white);
    margin: auto -25px 0;
  }
`;