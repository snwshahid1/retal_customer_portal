import { FC, memo } from "react";
import { CheckList } from "./style";
import Checkbox from "../Form/Checkbox";

const CheckboxList: FC<any> = ({ options, className }) => {
  return (
    <CheckList className={className}>
      {options.map(({ label, name, id, value, selected, onChange }: any, i: number) => (
        <li key={i}>
          <label htmlFor={id}>{label}</label>
          <Checkbox
            name={name}
            id={id}
            value={value}
            selected={selected}
            onChange={onChange}
          />
        </li>
      ))}
    </CheckList>
  );
};

export default memo(CheckboxList);
