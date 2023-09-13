import styled from "styled-components";

export const WarrantyHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .warranty-card-holder {
    text-align: center;

    .warranty-card {
      color: var(--white);
      background: var(--primary-color);
      padding: 5px 10px;
      margin-bottom: 20px;

      h3 {
        color: var(--white);
      }

      .member-tag {
        display: inline-block;
        background: var(--secondary-color);
        padding: 6px 10px;
        margin-bottom: 15px;
      }

      .user-img {
        width: 80px;
        margin: -40px auto 20px;

        img {
          border: 3px solid var(--white);
          border-radius: 100%;
        }
      }
    }
  }
`;