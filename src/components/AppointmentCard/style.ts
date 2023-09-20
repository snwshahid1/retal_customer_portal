import styled from "styled-components";


export const CardItem = styled.div`
  background: var(--white);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  padding: 20px 16px;

  .card-item-title {
    h4 {
      font-size: 17px;
      margin-bottom: 4px;
    }
    span {
      color: var(--dark-grey);
    }
  }

  .card-item-bottom {
    border-top: 1px solid var(--lightest-shade);
    padding: 15px 0 0;
    margin: 15px 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--dark-grey);
  }
`;