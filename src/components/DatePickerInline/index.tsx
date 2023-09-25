import { FC, memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerHolder } from "./style";

const DatePickerInline: FC<any> = (props: any) => {
  return (
    <DatePickerHolder className="date-picker-inline">
      <DatePicker
        inline
        {...props}
      />
    </DatePickerHolder>
  );
};

export default memo(DatePickerInline);
