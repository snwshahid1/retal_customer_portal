import styled from "styled-components";


export const CardItem = styled.div`
  background: var(--white);
  padding: 15px;

  .card-item-title {
    h4 {
      font-size: 20px;
    }
    span {

    }
  }

  .card-item-bottom {
    border-top: 1px solid var(--lightest-shade);
    padding: 10px 0 0;
    margin: 10px 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
`;