import styled from "styled-components";
import RetalLogo from "src/assets/icons/retal-bg-logo.svg";
import WarrantyBg from "src/assets/images/waranty-page-bg.png";

export const WarrantyHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: url(${WarrantyBg}) no-repeat center center;
  background-size: cover;

  .warranty-card-holder {
    text-align: center;
    max-width: 355px;
    width: 100%;

    .warranty-card {
      color: var(--white);
      background: #8C5F46 url(${RetalLogo}) no-repeat bottom right;
      background-size: contain;
      padding: 5px 10px;
      margin-bottom: 16px;

      h3 {
        color: var(--white);
        font-size: 22px;
        margin-bottom: 5px;
      }

      .member-tag {
        display: inline-block;
        background: var(--secondary-color);
        padding: 6px 12px;
        margin: 5px 0 15px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
      }

      .user-img {
        width: 85px;
        margin: -45px auto 15px;

        img {
          border: 4px solid #FAFAFA;
          border-radius: 100%;
          width: 85px;
          height: 85px;
        }
      }

      .member-dates {
        font-size: 10px;
        color: #E6E6E6;
        padding-top: 12px;

        p {
          margin: 0 0 5px;
        }
      }
    }

    .theme-btn {
      font-size: 15px;
      padding: 14px;
    }
  }
`;