import styled from "styled-components";


export const CardItem = styled.div`
  background: var(--white);
  padding: 15px;

  .card-item-title {
    display: flex;
    align-items: flex-start;

    .doc-icon {
      min-width: 30px;
      margin-right: 10px;
      height: 30px;
      width: 30px;
      background-size: contain;
    }
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
  }
`;