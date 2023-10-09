import { DeviceUp } from "src/styles/breakpoints";
import { styled } from "styled-components";

export const PropertiesHolder = styled.div`
  .border-bottom {
    border-bottom: 1px solid var(--lightest-shade);
    margin-bottom: 25px;
    h4 {
      padding-bottom: 12px;
      display: inline-flex;
      border-bottom: 1px solid var(--secondary-color);
      margin-bottom: -1px;
      font-family: var(--font-family);
    }
  }

  .properties-list-wrapper {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr));
    gap: 10px;
  }
`;

export const PropertiesDetailsHolder = styled.div`

  .property-top-section {
    margin: 30px auto 20px;
    position: relative;

    .property-img-carousel {
      width: 100%;
      
      img {
        width: 100%;
        border-radius: 2px;
      }

      .slick-next {
        right: 15px;
      }

      .slick-prev {
        left: 15px;
      }

      .slick-next,
      .slick-prev  
      {
        filter: none;
        z-index: 9;
        width: 34px;
        height: 34px;
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 50%;
      }
    }

    .construction-btn {
      border-radius: 8px;
      position: absolute;
      top: 20px;
      right: 25px;
      z-index: 99;
    }

    .count-slides {
      background: rgba(0, 0, 0, 0.2);
      color: var(--white);
      display: inline-block;
      padding: 3px 8px;
      border-radius: 8px;
      position: absolute;
      bottom: 20px;
      right: 15px;
      font-size: 13px;
    }
  }
  .property-info {
    width: 100%;

    @media ${DeviceUp.lg} {
      width: calc(70% - 20px);
    }

    .property-name-loc {
      width: 100%;

      @media ${DeviceUp.sm} {
        width: 40%;
        padding-right: 20px;
      }

      h3 {
        font-size: 20px;
      }

      .property-loc {
        padding-left: 20px;
        position: relative;

        i {
          position: absolute;
          left: 0;
          top: 5px;
        }
      }
    }

    .propery-info-carousel-wrapper {
      padding: 0 15px;
      width: 100%;

      @media ${DeviceUp.sm} {
        width: 60%;
      }

      .propery-info-carousel {
        li {
          text-align: center;

          .info-item {
            padding: 0 8px;
          }
          span {
            font-weight: 300;
          }

          .icon-holder {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: block;
            background: rgba(133, 85, 58, 0.07);
            margin: 0 auto 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
              display: block;
              background-size: contain;
              height: 15px;
              width: 100%;
            }
          }

          strong {
            display: block;
            margin-top: 5px;
            font-weight: 500;
            font-size: 13px;
          }
        }
      }
    }

    .propery-map {
      margin-top: 20px;
      iframe {
        border: none;
        height: 430px;
        width: 100%;
      }
    }
  }

  .property-details {
    width: 100%;
    background: var(--white);
    padding: 20px;
    font-size: 12px;

    @media ${DeviceUp.lg} {
      width: 30%;
    }

    .property-widget:not(:last-child) {
      border-bottom: 1px solid var(--lightest-shade);
      padding: 0 0 20px;
      margin: 0 0 25px;
    }

    .project-update {
      display: flex;
      align-items: flex-start;

      .project-date {
        border: 1px solid rgba(112, 112, 112, 0.2);
        display: inline-block;
        padding: 7px 12px;
        margin-bottom: 15px;
        color: var(--dark-grey);
        font-size: 12px;
      }

      p {
        line-height: 18px;
      }

      & > img {
        width: 80px;
        min-width: 80px;
        object-fit: cover;
        margin-right: 15px;
      }
    }

    h5 {
      font-size: 16px;
      margin-bottom: 16px;
    }

    .property-info-list {
      li {
        padding: 7px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;