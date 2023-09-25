import styled from "styled-components";
import { AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "src/assets/icons/arrow-icon.svg";

const ItemWithChevron = ({ ...rest }: any) => {

return(
  <Item
    {...rest}
    header={() => 
      <>
        {rest.value}
        <img className="chevron-down" src={chevronDown} alt="Icon" />
      </>
    }
  />)
};

/**
* @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
*/
export const AccordionItem = styled(ItemWithChevron)`
border-bottom: 1px solid var(--light-gray-v1);

.szh-accordion__item {
  &-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 25px 22px;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    background-color: transparent;
    border: none;
    color: var(--secondary-color);
  }

  &-content {
    transition: height 0.25s cubic-bezier(0, 0, 0, 1);
  }

  &-panel {
    padding: 0 35px 25px 22px;
    color: var(--dark-grey);
    line-height: 22px;
  }
}

.chevron-down {
  margin-left: auto;
  transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  width: 14px;
  height: 11px;
  filter: invert(100%) sepia(96%) saturate(18%) hue-rotate(275deg) brightness(100%) contrast(104%);
  opacity: 0.5;
}

&.szh-accordion__item--expanded {
  .szh-accordion__item-btn {
    color: var(--primary-color);
  }
  .chevron-down {
    transform: rotate(90deg);
  }
}
`;
