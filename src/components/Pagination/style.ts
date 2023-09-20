import styled from "styled-components"

export const PaginationHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  border-top: 1px solid var(--lightest-shade);
  padding: 8px 15px;
  margin: 15px -25px 0;

  & div {
    align-items: center;
    margin: 5px 0;
  }
  .pages-links {
    margin-left: auto;
  }

  .nav-label {

  }
  .links-list {
    border: 1px solid var(--lightest-shade);
    border-radius: 5px;
    margin: 0 12px;
    display: flex;
    align-items: stretch;
    min-height: 25px;

    button {
      display: inline-flex;
      padding: 0;
      min-width: 35px;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;

      &:not(:last-child) {
        border-right: 1px solid var(--lightest-shade);
      }

      &.active-item {
        background: #F5F5F7;

        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
        }
      }

      &.prev-page {
        i {
          transform: scale(-1);
        }
      }

      &[disabled] {
        i {
          opacity: 0.5;
          pointer-event: none;
        }
      }
    }
  }
`;