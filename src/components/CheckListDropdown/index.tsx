import { FC, memo } from "react";
import ToggleDropdown from "../ToggleDropdown";
import CheckboxList from "src/elements/CheckboxList";

const CheckListDropdown: FC<any> = ({ toggleCTA, options }) => {
  return (
    <ToggleDropdown 
      toggleCTA={toggleCTA}>
      <CheckboxList options={options} />
    </ToggleDropdown>
  );
};

export default memo(CheckListDropdown);
