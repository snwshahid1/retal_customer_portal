import styled from "styled-components";

export const ResponsiveModal = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 990;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;

  &.show-modal {
    display: block;
  }

  .close-popup {
    top: 15px;
    left: 10px;

    &.close-popup::before, 
    &.close-popup::after {
      height: 18px;
      background: #797979;
    }
  }

  .popup-modal-inner {
    background: var(--white);
    position: fixed;
    max-width: 620px;
    width: 84%;
    max-height: 90%;
    top: 50%;
    padding: 40px 30px;
    left: calc(50% + 110px);
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    margin: auto;
    overflow: auto;
    padding: 0 25px;
    margin: 0 auto;
    max-width: 650px;
    width: 100%;

    &.modal-sm {
      max-width: 420px;
      width: 100%;
    }

    .modal-content {
      padding: 40px 0 25px 0;

      h2{
        font-size: 24px;
        padding-bottom: 10px;
      }
    }
  }
`;