import styled from "styled-components";

export const Property = styled.div`
  position: relative;
  background: var(--white);
  display: flex;
  flex-direction: column;

  .property-image {
    width: 100%;

    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
    }
  }

  .property-detail {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      padding: 0 0 20px;

      .property-title {
        h3 {
          margin-bottom: 4px;
          font-size: 18px;
        }
        p {
          margin: 0;
          color: var(--dark-grey);
        }
      }

      .property-status {
        margin-top: 10px;
        display: inline-block;
        padding: 10px;
        border: 1px solid;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        font-family: var(--font-family-secondary);
        min-width: 125px;

        &.in-progress {
          border-color: rgba(var(--theme-brown), 0.2);
          color: rgb(var(--theme-brown));
        }
        &.handed-over {
          border-color: rgba(var(--theme-green), 0.2);
          color: rgb(var(--theme-green));
        }
      } 
    }

    &-bottom {
      border-top: 1px solid var(--lightest-shade);
      padding: 20px 0 0;
      margin: auto 0 0;

      a {
        font-weight: 500;
        color: var(--primary-color);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;