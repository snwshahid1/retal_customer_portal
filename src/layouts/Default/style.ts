import { styled } from 'styled-components';
import { DeviceUp } from 'src/styles/breakpoints';


export const PageWrapper = styled.div`
  min-height: 100%;

  @media ${DeviceUp.lg} {
    
  }
`;

export const ContentArea = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
