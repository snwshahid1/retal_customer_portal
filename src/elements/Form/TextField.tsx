import { FC, memo } from "react";
import { TextBox } from "./style";

const TextField: FC<any> = ({ type="text", className, name, id, placeholder, value, onChange, props }) => {
  return (
    <TextBox
      type={type}
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

export default memo(TextField);
