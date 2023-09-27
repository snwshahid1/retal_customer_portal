import { FC, memo } from "react";
import { FieldHolder, ErrorMsg } from "./style";

const FormField: FC<any> = ({
  label,
  labelDescription,
  labelTag,
  control,
  className,
  errorText
}) => {
  const LabelTag = labelTag ? labelTag : 'label';

  return (
    <FieldHolder className={`form-field ${className ? className : ''}`}>
      <LabelTag className="field-label">
        <span className="field-label-text">{label}</span>
        {labelDescription && (
          <span className="label-description">{labelDescription}</span>
        )}
        {control}
      </LabelTag>
      {errorText && <ErrorMsg className="error-message">{errorText}</ErrorMsg>}
    </FieldHolder>
  );
};

export default memo(FormField);
