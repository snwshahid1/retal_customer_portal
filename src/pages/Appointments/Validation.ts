import * as yup from "yup";

export const validateAppointment = yup.object().shape({
  property: yup.string().required().label('Property'),
  title: yup.string().required().label('Title'),
  subject: yup.string().required().label('Subject'),
  date: yup.string().required().label('Date'),
  time: yup.string().required().label('Time'),
  message: yup.string().required().label('Message'),
});