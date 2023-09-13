import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: 15px;

  &.bg-green {
    background: green;
  }

  &.bg-brown {
    background: brown;
  }

  &.bg-blue {
    background: blue;
  }
`;