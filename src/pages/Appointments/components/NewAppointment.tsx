import FormField from "src/components/FormField";
import { FC, memo, useState } from "react";
import { NewAppointmentWrapper } from "../style";
import SelectField from "src/elements/Form/SelectField";
import TextField from "src/elements/Form/TextField";
import TextAreaField from "src/elements/Form/TextAreaField";
import DatePickerInline from "src/components/DatePickerInline";
import { addMonths, addDays, format } from 'date-fns';


const NewAppointment: FC<any> = ({}) => {
  const [inputs, setInputs] = useState({
    title: "",
    subject: "Handover",
    property: "",
    date: "",
    message: "",
  });

  const [startDate, setStartDate] = useState('');

  const handleChange = (event: any) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onDateChange = (date: any) => {
    const selectedDate = format(date, 'MMMM dd, yyyy');
    setStartDate(selectedDate);
  };

  const TimeSlots = [
    "09:00-09:45",
    "09:45-10:30",
    "10:30-11:15",
    "11:15-12:00",
    "12:00-12:45",
    "12:45-13:30",
    "13:30-14:15",
    "14:15-15:00",
    "15:00-15:45",
    "15:45-16:30",
    "16:30-17:15",
    "17:15-18:00",
  ];

  return (
    <NewAppointmentWrapper>
      <h2>New appointment</h2>
      <div className="new-appointment-top">
        <FormField
          className="bg-grey-field"
          label="Select a property"
          control={
            <SelectField
              name="property"
              id="property"
              className="textbox selectbox h-50"
              options={[
                { label: "Select property", value: "" },
                { label: "Ewan Sedra", value: "Ewan Sedra", selected: true },
                { label: "Retal Rise", value: "retal rise" },
                { label: "Alaya Al Nakeel", value: "Alaya Al Nakeel" },
              ]}
            />
          }
        />

        <FormField
          className="bg-grey-field"
          label="Title"
          control={
            <TextField
              name="title"
              id="title"
              className="textbox h-50"
              placeholder="Enter title"
              value={inputs.title}
              onChange={handleChange}
            />
          }
        />

        <FormField
          className="bg-grey-field"
          label="Subject"
          control={
            <TextField
              name="subject"
              id="subject"
              className="textbox h-50"
              placeholder="Enter subject"
              value={inputs.subject}
              onChange={handleChange}
            />
          }
        />

        <FormField
          className="bg-grey-field mb-0"
          label="Available date and time"
          control={
            <TextField
              name="date"
              id="date"
              className="textbox h-50 icon-end"
              placeholder="Select Date"
              value={startDate}
              icon={<i className="calendar-icon3"></i>}
            />
          }
        />

        <div className="bg-grey-field px-15">
          <DatePickerInline 
            minDate={new Date()} 
            onChange={onDateChange}
            maxDate={addMonths(new Date(), 12)}
            highlightDates={[addDays(new Date(), 2), addDays(new Date(), 7)]}
            showMonthYearDropdown

          />
        </div>

        <div className="bg-grey-field px-15">
          <div className="d-grid time-slots-wrapper">
            {TimeSlots.map((timeSlot, i) => (
              <div className="time-slot" key={i}>
                <input type="radio" name="time-slot" id={`timeSlot${i}`} />
                <label htmlFor={`timeSlot${i}`}>{timeSlot}</label>
              </div>
            ))}
          </div>
        </div>

        <FormField
          className="bg-grey-field"
          label="Message"
          control={
            <TextAreaField
              name="message"
              id="message"
              className="textbox textarea"
              placeholder="Enter message"
              value={inputs.message}
              onChange={handleChange}
            />
          }
        />
      </div>

      <div className="new-appointment-bottom">
        <button className="theme-btn w-100">Create new appointment</button>
      </div>
    </NewAppointmentWrapper>
  );
};

export default memo(NewAppointment);
