import styled from "styled-components";


export const LoaderWrapper = styled.div`
  border: 3px solid var(--theme-ligth-brown);
  border-radius: 50%;
  border-top: 3px solid var(--primary-color);
  width: 30px;
  height: 30px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;