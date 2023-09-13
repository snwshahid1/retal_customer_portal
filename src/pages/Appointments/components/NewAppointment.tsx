import FormField from "src/components/FormField";
import { FC, memo, useState } from "react";
import { NewAppointmentWrapper } from "../style"
import SelectField from "src/elements/Form/SelectField";
import TextField from "src/elements/Form/TextField";
import TextAreaField from "src/elements/Form/TextAreaField";

const NewAppointment: FC<any> = ( {} ) => {
  const [inputs, setInputs] = useState({
    title: '',
    subject: 'Handover',
    property: '',
    date: '',
    message: ''
  });

  const handleChange = (event: any) => {
    setInputs({
      ...inputs, 
      [event.target.name]: event.target.value
    })
  }

  return (
    <NewAppointmentWrapper>
      <div className="new-appointment-top">
        <h2>
          New appointment
        </h2>

        <FormField 
          className="bg-grey-field"
          label="Select a property"
          control={
            <SelectField
              name="property"
              id="property"
              className="textbox selectbox h-50"
              options= {[
                {label: "Select property", value: ""},
                {label: "Ewan Sedra", value: "Ewan Sedra", selected: true},
                {label: "Retal Rise", value: "retal rise"},
                {label: "Alaya Al Nakeel", value: "Alaya Al Nakeel"},
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
          className="bg-grey-field"
          label="Available date and time"
          control={
            <TextField
              name="date"
              id="date"
              className="textbox h-50"
              placeholder="Select Date"
              value={inputs.date}
              onChange={handleChange}
            />
          }
        />

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
        <button className="theme-btn w-100">
          Create new appointment
        </button>
      </div>
    </NewAppointmentWrapper>
  );
};

export default memo(NewAppointment);
