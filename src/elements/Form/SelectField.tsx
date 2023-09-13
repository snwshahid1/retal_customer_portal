import { FC, memo } from "react";
import { SelectBox } from "./style";

const SelectField: FC<any> = ({ options, className, name, id, onChange }) => {
  return (
    <SelectBox
      className={className}
      name={name}
      id={id}
      onChange={onChange}
    >
      {options.map( ({label, value, selected}: any, i: number) => (
        <option value={value} key={i} selected={selected}>{label}</option>
      ))}
    </SelectBox>
  );
};

export default memo(SelectField);
