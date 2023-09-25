import styled from "styled-components";

export const DatePickerHolder = styled.div`
  position: relative;

  .react-datepicker {
    border: none;
    font-family: inherit;
    width: 100%;
    background: none;

    .react-datepicker__current-month,
    .react-datepicker__navigation {
      display: none;
    }

    .react-datepicker__header__dropdown {
      margin-bottom: 10px;
      text-align: left; 

      .react-datepicker__month-year-dropdown-container {
        margin: 0;
      }
    }

    .react-datepicker__month-year-read-view {
      visibility: visible !important;
      color: var(--secondary-color);

      .react-datepicker__month-year-read-view--down-arrow {
        border-color: var(--secondary-color);
        width: 7px;
        height: 7px;
        border-width: 2px 2px 0 0;
        right: -20px;
        top: 2px;
      }
    }

    .react-datepicker__day--highlighted, 
    .react-datepicker__month-text--highlighted, 
    .react-datepicker__quarter-text--highlighted, 
    .react-datepicker__year-text--highlighted {
      position: relative;
      background: none; 
      color: var(--primary-color);

      &::before {
        content: "";
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 50%;
      }
    }

    .react-datepicker__year-dropdown, .react-datepicker__month-dropdown, 
    .react-datepicker__month-year-dropdown {
      left: 0;
      background: var(--white);
      border-color: var(--lightest-shade);
      border-radius: 0;

      .react-datepicker__month-year-option--selected_month-year,
      .react-datepicker__year-option, 
      .react-datepicker__month-option, 
      .react-datepicker__month-year-option {
        padding: 5px 0;

        &:hover {
          background: var(--light-gray-v1);
        }
      }
    }

    .react-datepicker__header {
      background: none;
      border-bottom: 1px solid var(--lightest-shade);

      .react-datepicker__day-name, 
      .react-datepicker__day, 
      .react-datepicker__time-name {
        opacity: 0.5;
      }
    }

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected, 
    .react-datepicker__month-text--keyboard-selected, 
    .react-datepicker__quarter-text--keyboard-selected, 
    .react-datepicker__year-text--keyboard-selected {
      background: var(--primary-color);
      color: var(--white);
    }
  }
  .react-datepicker__day-names, 
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__month {
    margin: 0.4rem 0;
  }
`;