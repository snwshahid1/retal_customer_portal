import styled from "styled-components";

export const DocPreviewHolder = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 900px;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    border: none;
    width: 100%;
    height: 100%;
  }
`;