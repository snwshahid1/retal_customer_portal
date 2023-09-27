import * as yup from "yup";

export const validateProfile = yup.object().shape({
  firstName: yup.string().required().matches(/^[aA-zZ\s]+$/, 'First name should contain only letters').label('First name'),
  lastName: yup.string().required().matches(/^[aA-zZ\s]+$/, 'Last name should contain only letters').label('Last name'),
  phoneNumber: yup.string().required().label('Phone number'),
  emailAddress: yup.string().required().email().label('Email address'),
});

export const validatePassword = yup.object().shape({
  password: yup.string().required().label('Password'),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Confirm Password must match with the password').label('Confirm Password'),
});