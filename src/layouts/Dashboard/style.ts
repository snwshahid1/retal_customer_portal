import { styled } from 'styled-components';
import { DeviceUp } from 'src/styles/breakpoints';


export const DashboardWrapper = styled.div`
  min-height: 100vh;

  @media ${DeviceUp.lg} {
    
  }
`;

export const ContentArea = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media ${DeviceUp.sm} {
    padding: 25px;
  }
`
