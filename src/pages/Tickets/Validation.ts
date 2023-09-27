import * as yup from "yup";

export const validateTicket = yup.object().shape({
  property: yup.string().required().label('Property'),
  categories: yup.array().min(1, 'Category field must have at least 1 item').required().label('Category'),
  message: yup.string().required().label('Message'),
});