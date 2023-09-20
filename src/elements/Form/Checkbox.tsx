import { FC, memo } from "react";
import { StyledCheckBox } from "./style";

const Checkbox: FC<any> = ({
  className,
  name,
  id,
  selected,
  value,
  onChange,
}) => {
  return (
    <StyledCheckBox className={className}>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={selected}
        onChange={onChange}
      />
      <label htmlFor={id}></label>
    </StyledCheckBox>
  );
};

export default memo(Checkbox);
