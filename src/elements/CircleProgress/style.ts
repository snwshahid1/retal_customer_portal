import styled from "styled-components";

export const CircleHolder = styled.div<{ stroke?: number; }>`
  .circle-bg {
    stroke: rgba(18, 18, 18, 0.05);
  }

  .cirlce-percentage {
    stroke: #6CC66F;
    filter: drop-shadow(0 0 4px #6CC66F);
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease-in;
    animation: dash 0.9s linear forwards;
    stroke-dashoffset: 380;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: ${props => props.stroke};
    }
  }
`;
