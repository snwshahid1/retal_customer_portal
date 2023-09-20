import styled from "styled-components";

export const FieldHolder = styled.div`
  margin-bottom: 15px;

  &.bg-grey-field {
    padding: 18px 14px;
    background: #FAFAFA;
  }

  .field-label {
    display: block;
    position: relative;

    .field-label-text {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }
    .label-description {
      font-size: 12px;
    }
  }
`;