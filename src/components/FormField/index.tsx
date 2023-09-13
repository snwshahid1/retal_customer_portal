import { FC, memo } from "react"
import { FieldHolder } from "./style"

const FormField: FC<any> = ({ label, control, className }) => {
  
  return (
    <FieldHolder className={`form-field ${className}`}>
      <label className="field-label">
        <span className="field-label-text">{label}</span>
        {control}
      </label>
    </FieldHolder>
  );
};

export default memo(FormField);
