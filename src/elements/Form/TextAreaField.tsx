import { FC, memo } from "react";
import { TextAreaBox } from "./style";

const TextAreaField: FC<any> = ({ className, name, id, placeholder, value, onChange, props }) => {
  return (
    <TextAreaBox
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default memo(TextAreaField);
