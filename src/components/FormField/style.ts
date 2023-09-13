import styled from "styled-components";

export const FieldHolder = styled.div`
  margin-bottom: 15px;

  &.bg-grey-field {
    padding: 18px;
    background: pink;
  }

  .field-label {
    display: block;

    .field-label-text {
      display: block;
      margin-bottom: 5px;
    }
  }
`;