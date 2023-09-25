import { FC, memo, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateField } from "./style";


const DatePickerField: FC<any> = (props: any) => {
  return (
    <DateField className="date-field">
      <i className="date-icon calendar-icon3"></i>
      <DatePicker {...props}/>
    </DateField>
  );
};

export default memo(DatePickerField);
