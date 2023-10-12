import styled from "styled-components";


export const FileUploaderHolder = styled.section`
  .uploaded-files {
    li {
      background: #F2F2F2;
      display: flex;
      align-items: flex-start;
      width: 100%;
      padding: 10px;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      .remove-btn {
        opacity: 0.45;
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 4px;
        height: 20px;
        width: 20px;
        padding: 0;

        .close-btn {
          top: 0;
          right: 0
        }
      }

      .doc-icon-holder {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        min-width: 36px;
        margin-right: 15px;
        display: inline-flex;

        i {
          width: 36px;
          min-width: 36px;
          height: 46px;
          background-size: contain!important;
          display: inline-block;
          background: var(--white);
          border-radius: 4px;
        }
      }

      .preview-detail {
        flex-grow: 1;

        .file-size {
          font-weight: 500;
          font-size: 12px;
          color: var(--dark-grey);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 3px 0;
        }

        .file-progress-bar {
          margin: 5px 0 0;
          background: rgba(18, 18, 18, 0.2);
          border-radius: 4px;
          display: block;
          position: relative;
          height: 3px;
          width: 100%;

          .file-actual-progres {
            position: absolute;
            height: 100%;
            background: #3DBC17;
            left: 0;
            top: 0;
            border-radius: 4px;
          }
        }
      }
    }
  }
`;