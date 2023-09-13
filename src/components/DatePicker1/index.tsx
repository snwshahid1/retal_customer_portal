import { FC, memo, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePicker1: FC<any> = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      placeholderText="Click to select a date"
      dateFormat="dd-MM-yyyy" 
      selected={startDate} 
      onChange={onChange}
      //startDate={`From ${startDate}`}
      endDate={endDate}
      
      selectsRange
    />
  );
};

export default memo(DatePicker1);
