import PageTitle from "src/components/PageTitle"
import ProfileProgress from "./components/ProfileProgress";
import { ProfileDetails } from "./style";
import ProfileSidebar from "./components/ProfileSidebar";
import TextField from "src/elements/Form/TextField";
import FormField from "src/components/FormField";
import { useState } from "react";
import { useFormik } from "formik";
import { validatePassword } from "./Validation";

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "password",
      confirmPassword: "password",
    },
    validationSchema: validatePassword,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      // api call
      //console.log(values);
    },
  });

  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    isValid,
    dirty,
    touched,
    handleSubmit,
  }: any = formik;

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="My Profile" subtitle="Please complete your information" />        
      </div>
      <ProfileProgress title="Complete your profile" subtitle="please comlete your information" progress={50} />
      <ProfileDetails>
        <ProfileSidebar />
        <div className="detail-content">
          <div className="page-title-holder flex-base-wrapper">
            <PageTitle title="Change Password" subtitle="You can change your password here" />
            <button
              className="theme-btn min-130"
              type="submit"
              onClick={handleSubmit}
              //disabled={Boolean(!(isValid && dirty) || isSubmitting)}
            >
              Save
            </button>
          </div>

          <div className="form-wrapper">
            <FormField
              label="New password"
              control={
                <TextField
                  type= "password"
                  className="textbox"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
              }
              errorText={touched["password"] && errors["password"]}
            />

            <FormField
              label="Confirm new password"
              control={
                <TextField
                  type= "password"
                  className="textbox"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
              }
              errorText={touched["confirmPassword"] && errors["confirmPassword"]}
            />
          </div>
        </div>
      </ProfileDetails>
    </>
  )
}

export default ChangePassword