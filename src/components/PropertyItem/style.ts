import styled from "styled-components";

export const Property = styled.div`
  position: relative;
  background: var(--white);

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

    &-top {
      border-bottom: 1px solid var(--lightest-shade);
      padding: 0 0 20px;
      margin: 0 0 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;

      .property-title {
        h3 {
          margin-bottom: 8px;
          font-size: 20px;
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
        font-weight: 500;
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
      a {
        font-weight: 500;
        color: var(--primary-color);
      }
    }
  }
`;