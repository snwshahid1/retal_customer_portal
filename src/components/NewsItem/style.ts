import styled from "styled-components";

export const NewsItem = styled.div`
  position: relative;

  a {
    display: block;
  }

  .news-image {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .news-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    background: rgba(18, 18, 18, 0.6);
    padding: 15px;
    color: var(--white);
    position: absolute;
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    h5 {
      color: var(--white);
      font-size: 15px;
      line-height: 24px;
    }

    .news-date {
      display: block;
      margin: auto 0 12px;
      font-size: 13px;
    }

    .news-tag {
      display: inline-flex;
      min-width: 70px;
      min-height: 30px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 5px 10px;
      align-items: center;
      justify-content: center;
      background: var(--primary-color);
      font-size: 13px;
      font-weight: 500;
    }
  }
`;