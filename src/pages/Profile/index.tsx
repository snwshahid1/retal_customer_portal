import PageTitle from "src/components/PageTitle";
import ProfileProgress from "./components/ProfileProgress";
import { ProfileDetails } from "./style";
import ProfileSidebar from "./components/ProfileSidebar";
import FormField from "src/components/FormField";
import TextField from "src/elements/Form/TextField";
import { useFormik } from "formik";
import { validateProfile } from "./Validation";

const MyProfile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "Saleh",
      lastName: "Abdullah",
      phoneNumber: "+ 966 50 680 3006",
      emailAddress: "a.alsaleh@retal.com.sa",
    },
    validationSchema: validateProfile,
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

  return (
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle
          title="My Profile"
          subtitle="Find here all of your information"
        />
      </div>
      <ProfileProgress
        title="Complete your profile"
        subtitle="Please comlete your information"
        progress={50}
      />
      <ProfileDetails>
        <ProfileSidebar />
        <div className="detail-content">
          <div className="page-title-holder flex-base-wrapper">
            <PageTitle
              title="Personal information"
              subtitle="You can edit your personal information here"
            />
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
              label="Your First Name"
              control={
                <TextField
                  className="textbox"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                />
              }
              errorText={touched["firstName"] && errors["firstName"]}
            />

            <FormField
              label="Your Last Name"
              control={
                <TextField
                  className="textbox"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                />
              }
              errorText={touched["lastName"] && errors["lastName"]}
            />

            <FormField
              label="Your Phone Number"
              control={
                <TextField
                  className="textbox icon-right-long"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  icon={
                    <span className="color-primary">
                      Confirmed <i className="sm-icon verified-icon"></i>
                    </span>
                  }
                  iconClassName="icon-end"
                />
              }
              errorText={touched["phoneNumber"] && errors["phoneNumber"]}
            />

            <FormField
              label="Email"
              control={
                <TextField
                  className="textbox"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Email"
                  value={values.emailAddress}
                  onChange={handleChange}
                  icon={
                    <span className="color-primary">
                      Confirmed <i className="sm-icon verified-icon"></i>
                    </span>
                  }
                  iconClassName="icon-end"
                />
              }
              errorText={touched["emailAddress"] && errors["emailAddress"]}
            />
          </div>
        </div>
      </ProfileDetails>
    </>
  );
};

export default MyProfile;
