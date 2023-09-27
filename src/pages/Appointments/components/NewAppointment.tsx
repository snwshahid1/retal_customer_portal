import FormField from "src/components/FormField";
import { FC, memo, useEffect, useState } from "react";
import { NewAppointmentWrapper } from "../style";
import SelectField from "src/elements/Form/SelectField";
import TextField from "src/elements/Form/TextField";
import TextAreaField from "src/elements/Form/TextAreaField";
import DatePickerInline from "src/components/DatePickerInline";
import { addMonths, addDays, format } from 'date-fns';
import { useFormik } from "formik";
import { validateAppointment } from "../Validation";
import { ErrorMsg } from "src/components/FormField/style";

const NewAppointment: FC<any> = ({}) => {
  const [startDate, setStartDate] = useState('');
  const [appTime, setappTime] = useState('');

  const formik = useFormik({
    initialValues: {
      property: "",
      title: "",
      subject: "Handover",
      date: "",
      time: "",
      message: "",
    },
    validationSchema: validateAppointment,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      // api call
      //console.log(values);
    },
  });

  const {
    setFieldValue,
    values,
    errors,
    handleChange,
    touched,
    handleSubmit,
  }: any = formik;

  const onDateChange = (date: any) => {
    const selectedDate = format(date, 'MMMM dd, yyyy');
    setStartDate(selectedDate);
  };

  const handleTimeChange = (event: any) => {
    const value = event.target.value;
    setappTime(value);
  }

  useEffect( () => {
    setFieldValue('date', startDate);
  }, [startDate]);

  useEffect( () => {
    setFieldValue('time', appTime);
  }, [appTime]);

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
              value={values.property}
              onChange={handleChange}
              options={[
                { label: "Select property", value: "" },
                { label: "Ewan Sedra", value: "Ewan Sedra" },
                { label: "Retal Rise", value: "retal rise" },
                { label: "Alaya Al Nakeel", value: "Alaya Al Nakeel" },
              ]}
            />
          }
          errorText={touched["property"] && errors["property"]}
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
              value={values.title}
              onChange={handleChange}
            />
          }
          errorText={touched["title"] && errors["title"]}
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
              value={values.subject}
              onChange={handleChange}
            />
          }
          errorText={touched["subject"] && errors["subject"]}
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
              value={values.date}
              onChange={handleChange}
              icon={<i className="calendar-icon3"></i>}
              readOnly={true}
            />
          }
          errorText={touched["date"] && errors["date"]}
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
                <input 
                  type="radio" 
                  name="time-slot" 
                  id={`timeSlot${i}`}
                  value={timeSlot}
                  onClick={(event) => handleTimeChange(event)}
                />
                <label htmlFor={`timeSlot${i}`}>{timeSlot}</label>
              </div>
            ))}
            <ErrorMsg className="error-msg">
              {touched["time"] && errors["time"]}
            </ErrorMsg>
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
              value={values.message}
              onChange={handleChange}
            />
          }
          errorText={touched["message"] && errors["message"]}
        />
      </div>

      <div className="new-appointment-bottom">
        <button 
          className="theme-btn w-100"
          type="submit"
          onClick={handleSubmit}
        >
          Create new appointment
        </button>
      </div>
    </NewAppointmentWrapper>
  );
};

export default memo(NewAppointment);
