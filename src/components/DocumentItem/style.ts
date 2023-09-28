import styled from "styled-components";


export const CardItem = styled.div`
  background: var(--white);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  padding: 15px;

  .card-item-title {
    display: flex;
    align-items: flex-start;

    .doc-icon {
      min-width: 25px;
      margin-right: 12px;
      height: 30px;
      width: 25px;      
      margin-top: 5px;
      background-size: contain;
    }
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
    padding: 10px 0 0;
    margin: 14px 0 0;

    .btn-inline {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;