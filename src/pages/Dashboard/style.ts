import styled from "styled-components";
import Arrow from "src/assets/icons/arrow-icon.svg";
import { DeviceDown, DeviceUp } from "src/styles/breakpoints";

export const DashboardHolder = styled.div`
  .white-bg-area {
    background: var(--white);
    padding: 10px;
  }
  .flex-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  .sec-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 5px;

    h4 {
      color: var(--primary-color);
      text-transform: uppercase;
    }
  }

  h5 {
    text-transform: uppercase;
    font-weight: 400;
    font-family: var(--font-family);
    font-size: 12px;
    letter-spacing: 0.5px;
    padding: 0 0 10px;
  }

  .dashboard-content {
    width: 100%;

    @media ${DeviceUp.xl} {
      width: calc(100% - 250px);
    }
  }

  .slider-arrows {
    display: flex;
    align-items: flex-start;
    min-width: 60px;
    margin-left: 10px;
    position: relative;
    z-index: 1;

    .slider-arrow {
      background: var(--secondary-color);
      width: 24px;
      height: 24px;
      min-width: 24px;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      margin: 3px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &-left {
        background: var(--light-gray);

        i {
          transform: scale(-1);
          filter: invert(45%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);

        }
      }

      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-size: contain;
      }
    }
  }

  .property-progress-area {
    flex-grow: 1;
    width: 100%;

    @media ${DeviceUp.md} {
      width: calc(50% - 25px);
    }
  }

  .dashboard-img-carousel {
    max-width: 410px;
    width: 100%;
    margin: 0 auto;
    position: relative;

    @media ${DeviceUp.md} {
      max-width: 410px;
      width: 50%;
    }

    .slider-arrows {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      right: 10px;
    }

    .img-slide {
      position: relative;
      vertical-align: top;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: rgb(0,0,0, 0.4);
        background: -moz-linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
        background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .property-infos {
    border-bottom: 1px solid rgba(18, 18, 18, 0.05);
    padding: 15px 0;
    margin: 0 0 15px;

    .gap-5 {
      gap: 5px;
    }

    .property-info-boxes {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }

    .info-box {
      background: var(--light-gray);
      padding: 7px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        display: block;
        font-weight: 700;
        font-family: var(--font-family-secondary);
        font-size: 15px;
        text-align: center;
      }
    }

    .info-box-big-col {
      grid-column: span 2;

      .info-box {
        font-size: 12px;

        & > span {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin: 3px 0;
        }
        
        .ms-auto {
          font-weight: 700;
          font-family: var(--font-family-secondary);
        }
      }
    }
  }

  .property-tag {
    background: var(--light-gray);
    border: 1px solid #EAE7E7;
    color: rgba(18, 18, 18, 0.31);
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 8px;
    margin: 0 5px;
    transition: 0.4s all;
    cursor: pointer;

    &:hover {
      border-color: var(--primary-color);
      background: var(--primary-color);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      color: var(--white);
      transition: 0.4s all;
    }
  }

  .progress-right {
    min-width: 125px;
  }

  .progress-steps {
    display: flex;
    gap: 6px;

    li {
      background: var(--light-gray);
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .step-icon {
        width: 16px;
        height: 16px;
        min-width: 16px;
        margin-left: 10px;
        border-radius: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        

        &.icon-bg-green {
          background: #6CC66F;
        }

        &.icon-bg-yellow {
          background: #F0AC2D;
        }

        &.icon-bg-red {
          background: #ED6161;
        }

        i {
          display: inline-block;
          width: 13px;
          height: 13px;
        }
      }
    }
  }

  .tasks-update {
    margin: 10px 0 25px;

    h4 {
      display: flex;
      font-weight: 700;
      color: #6CC66F;
    }
  }
  .task-progress-bar {
    background: rgba(18, 18, 18, 0.08);
    height: 4px;
    width: 100%;
    display: block;
    border-radius: 5px;
    margin: 0 0 10px;
    position: relative;

    .task-progress {
      border-radius: 5px;
      position: absolute;
      top: 0;
      height: 100%;
      transition: width 0.7s;
      transition-delay: 0.2s;
      background: #6CC66F;
    }
  }

  @property --progress-value {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }
  
  @keyframes progress {
    to { --progress-value: 75; }
  }

  
  .progress-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: 
      radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(hotpink calc(var(--progress-value) * 1%), pink 0);
    animation: progress 2s 1 forwards;
  }
  
  .progress-bar::before {
    counter-reset: percentage var(--progress-value);
    content: counter(percentage) '%';
    animation: progress 2s 1 forwards;
  }
  
  .progress-circle {
    width: 125px;
    height: 125px;
    border: 7px solid rgba(18, 18, 18, 0.1);
    border-radius: 100%;

    

    .progress-circle-percentage {
      width: 125px;
      height: 25%;
      border: 7px solid #6CC66F;
      border-radius: 100%;
      box-shadow: 0 0 6px #6CC66F;
    }
  }

  .dashboard-widget-area {
    width: calc(50% - 25px);
    min-width: 230px;
    flex-grow: 1;

    @media ${DeviceUp.xl} {
      width: 230px;
      flex-grow: unset;
    }

    .widgets-wrapper {

      @media ${DeviceDown.xl} {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .white-bg-area {
          width: calc(50% - 10px);
          margin-bottom: 0;
        }
      }

      @media ${DeviceDown.xs} {
        .white-bg-area {
          width: 100%;
        }
      }
    }
  }

  .watch-video {
    position: relative;
    height: 100%;
    min-height: 200px;

    .watch-video-img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .watch-video-text {
      position: relative;
      z-index: 1;
      padding: 15px;
      color: var(--white);
      height: 100%;
      display: flex;
      flex-direction: column;

      .watch-text {
        font-size: 18px;
      }
      .watch-btn {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        background: rgba(18, 18, 18, 0.5);
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
        color: var(--white);
        padding: 5px 35px;
        border-radius: 25px;
        position: relative;
        min-height: 35px;
        margin-top: auto;

        i {
          position: absolute;
          left: 5px;
          top: 4px;
        }
      }
    }
  }

  .lastest-documents {
    width: 100%;
    padding: 15px;

    @media ${DeviceUp.sm} {
      width: 50%;
    }

    @media ${DeviceUp.xl} {
      min-width: 270px;
      width: 270px;
    }

    ul {
      li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(18, 18, 18, 0.05);
        padding: 10px;
        font-size: 15px;

        &:last-child {
          border: none;
        }

        a {
          display: flex;
          align-items: center;
          flex-grow: 1;
          position: relative;
          padding-right: 20px;

          &::before {
            content: "";
            background: url(${Arrow}) no-repeat center center;
            width: 10px;
            height: 10px;
            position: absolute;
            right: 0px;
            top: 0;
            bottom: 0;
            margin: auto;
            filter: invert(100%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);
          }
        }

        .new-tag {
          font-size: 11px;
          color: #6CC66F;
          font-weight: 500;
          display: block;
        }
      }

      .doc-icon-holder {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        min-width: 20px;
        margin-right: 20px;
        display: inline-flex;

        i {
          width: 20px;
          min-width: 20px;
          height: 30px;
          background-size: contain !important;
          display: inline-block;
        }
      }
    }
  }

  .payments-stats-wrapper {
    display: flex;
    flex-direction: column;
    padding: 15px;

    @media ${DeviceDown.xl} {
      order: -1;
      width: 100%;
    }

    .payments-stats {
      text-align: center;
      margin: 10px 0 0;
      flex-grow: 1;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

      h3 {
        font-size: 20px;
      }
    }
  }

  .view-link {
    font-size: 12px;
    text-decoration: underline;
    opacity: 0.6;
    color: var(--dark-grey);
  }

  .marketplace-slider {
    padding: 5px 0;

    .slider-item {
      padding: 0 4px;
      margin: auto;
      position: relative;

      .slide-img {
        img {
          width: 100%;
          height: 100%;
          border-radius; 100%;
        }
      }
      .slide-text {
        position: absolute;
        display: flex;
        top: 0;
        bottom: 0;
        left: 4px;
        right: 4px;
        background: rgba(18, 18, 18, 0.55);
        border-radius: 100%;
        font-size: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--white);
        font-weight: 500;
        padding: 5px;
      }
    }
  }

  .latest-projects {
    width: 230px;
    flex-grow: unset;
  }

  .box-shadow-inset {
    position: relative;
    padding-right: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 60px;
      background: rgb(0,0,0, 0.15);
      background: -moz-linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);
      background: -webkit-linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);
      background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);
    }

    .slider-arrows {
      padding-right: 10px;
    }
  }
`;

export const LatestProjectHolder = styled.div`
  .latest-project-carousel {
    padding: 10px 0;

    .theme-btn-white {
      border: none;
      margin-top: auto;

      &:hover {
        opacity: 0.9;
      }
    }
  }
  .slider-item {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 240px;

    .slide-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
      }
    }

    .slide-text {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 25px 15px 15px;
      color: var(--white);

      h3 {
        font-size: 20px;
        color: var(--white);
        font-weight: 500;
      }

      .location {
        padding: 5px 0 8px 20px;
        position: relative;
        font-size: 13px;

        i {
          position: absolute;
          left: 0;
          top: 9px;
          filter: invert(98%) sepia(96%) saturate(99%) hue-rotate(275deg) brightness(100%) contrast(404%);
        }
      }
    }
  }
`;

export const WeatherWidgetHolder = styled.div`
  h2 {
    font-size: 26px;
    font-weight: 500;
    font-family: var(--font-family);
  }

  .cloud-img {
    position: absolute;
    right: -10px;
    top: -25px;
  }

  .weather-temp {
    position: relative;
    padding-bottom: 15px;

    h3 {
      font-size: 36px;
      color: var(--dark-grey);
      opacity: 0.6;

      sup {
        font-size: 24px;
      }
    }
    .weather-temp-today {
      color: var(--dark-grey);
      opacity: 0.6;
      padding: 45px 0 0;
    }
  }
`;

export const LatestNewsHolder = styled.div`
  .news-carousel {
    .news-item {
      margin: 0 5px;
    }
  }
`;

export const RateTeam = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .rate-btns {
    .theme-btn {
      min-width: 70px;
      box-shadow: none;
      font-family: var(--font-family-secondary);

      &.no-btn {
        color: rgba(0, 0, 0, 0.4) !important;
        background: #F2F2F2;
      }
      &.yes-btn {
        background: var(--primary-color);
      }
    }
  }

  ul {
    padding-bottom: 20px;

    li {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;

      &:not(:last-child) {
        border-bottom: 1px solid #E9E9F0;
      }

      .rate-question {
        color: var(--black);
        font-size: 15px;
        font-family: var(--font-family-secondary);
      }
    }
  }
  .star-rating {
    .star-icon{
      width: 24px;
      height: 24px;
      margin: 2px 4px;
    }
  }

  textarea {
    padding: 20px !important;
    border-color: #FAFAFA !important;
    background: #FAFAFA !important;
  }
`;