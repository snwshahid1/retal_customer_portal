import styled from "styled-components";

export const SwitchLang = styled.div`
  .switch-lang {
    opacity: 1;
  }
  .switch-lang a {
    color: var(--secondary-color);
  }
  .switch-lang.light-color {
    opacity: 0.6;
  }
  .switch-lang.light-color a {
    color: var(--white);
  }
  .switch-lang .arrow-icon {
    transform: rotate(90deg);
  }
`;