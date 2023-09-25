import { FC, memo } from "react";
import { TextBox, IconHolder } from "./style";

const TextField: FC<any> = ({
  type = "text",
  icon,
  className,
  iconClassName,
  name,
  id,
  placeholder,
  value,
  maxlength,
  onChange,
  onClick,
  props,
}) => {
  const TextField = (
    <TextBox
      type={type}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      value={value}
      maxLength={maxlength}
      {...props}
    />
  );

  return icon ? (
    <IconHolder className={`icon-holder ${iconClassName ? iconClassName : ""}`}>
      <span className="field-icon">{icon}</span>
      {TextField}
    </IconHolder>
  ) : (
    TextField
  );
};

export default memo(TextField);
