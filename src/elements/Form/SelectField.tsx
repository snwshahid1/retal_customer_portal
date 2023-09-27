import { FC, memo } from "react";
import { SelectBox, SelectWrap } from "./style";

const SelectField: FC<any> = ({ options, value, className, name, id, onChange }) => {
  return (
    <SelectWrap>
      <SelectBox className={className} name={name} id={id} onChange={onChange} value={value}>
        {options.map(({ label, value }: any, i: number) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </SelectBox>
    </SelectWrap>
  );
};

export default memo(SelectField);
