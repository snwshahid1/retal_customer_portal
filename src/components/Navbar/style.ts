import styled from "styled-components";

export const NavbarList = styled.ul`
  background: var(--white);
  border: 1px solid var(--lightest-shade);
  display: inline-flex;
  list-style: none;
  padding: 5px 10px;

  li {
    margin: 0 4px;

    a {
      display: inline-block;
      padding: 5px 15px;
    }

    &.selected-item {
      a {
        background: var(--secondary-color);
        color: var(--white);
      }
    }
  }
`;