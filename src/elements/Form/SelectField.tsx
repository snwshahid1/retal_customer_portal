import { FC, memo } from "react";
import { SelectBox, SelectWrap } from "./style";

const SelectField: FC<any> = ({ options, className, name, id, onChange }) => {
  return (
    <SelectWrap>
      <SelectBox className={className} name={name} id={id} onChange={onChange}>
        {options.map(({ label, value, selected }: any, i: number) => (
          <option value={value} key={i} selected={selected}>
            {label}
          </option>
        ))}
      </SelectBox>
    </SelectWrap>
  );
};

export default memo(SelectField);
