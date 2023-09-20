import styled from "styled-components";

export const PaymentDetailsWrapper = styled.div`

  h4 {
    font-size: 16px;
  }

  .payment-amount {
    padding: 15px 0;
    font-size: 36px;
    display: block;
  }

  .payment-detail-list {
    padding: 20px 0;

    ul {
      li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        color: var(--dark-grey);
        padding: 5px 0;
      }
    }
  }

  .payment-property-widget {
    padding: 25px;
    margin: 0 -25px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    p {
      margin: 10px 0 0;
      color: var(--dark-grey);
    }

    .pay-propery-box {
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
      padding: 15px 25px;
      background: var(--white);
      display: flex;
      align-items: center;
      margin: 10px auto 30px;

      span,
      h5 {
        font-size: 15px;
      }

      .icon-holder {
        min-width: 35px;
        width: 35px;
        height: 35px;
        margin-right: 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-color);
        border-radius: 100%;

        i {
          height: 14px;
          width: 14px;
        }
      }
    }
  }

  .payment-proof {
    padding: 20px 0;
  }
`;