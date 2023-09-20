import { FC, memo } from "react";
import { FieldHolder } from "./style";

const FormField: FC<any> = ({
  label,
  labelDescription,
  control,
  className,
}) => {
  return (
    <FieldHolder className={`form-field ${className}`}>
      <label className="field-label">
        <span className="field-label-text">{label}</span>
        {labelDescription && (
          <span className="label-description">{labelDescription}</span>
        )}
        {control}
      </label>
    </FieldHolder>
  );
};

export default memo(FormField);
