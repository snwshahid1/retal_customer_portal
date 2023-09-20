
export const ToggleMenuStyle = `
  .toggleMenu {
    position: absolute;
    right: 0px;
    top: -45px;

    .dots-icon {
      transform: rotate(90deg);
      cursor: pointer;
    }

    .toggle-menu-dropdown {
      width: 285px;
      padding: 0;
      border-radius: 10px;

      li {
        &:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        a {
          padding: 25px;
          display: flex;
          align-items: center;
          font-weight: 500;

          i {
            display: inline-block;
            width: 25px;
            height: 25px;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;