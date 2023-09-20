import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--light-gray);
  padding: 25px 15px;

  &.bg-green {
    background: #3DBC17;
  }

  &.bg-brown {
    background: #E5903B;
  }

  &.bg-blue {
    background: #3B83E5;
  }
`;