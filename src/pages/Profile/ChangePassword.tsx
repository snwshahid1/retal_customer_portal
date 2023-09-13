import PageTitle from "src/components/PageTitle"
import ProfileProgress from "./components/ProfileProgress";
import { ProfileDetails } from "./style";
import ProfileSidebar from "./components/ProfileSidebar";
import TextField from "src/elements/Form/TextField";
import FormField from "src/components/FormField";
import { useState } from "react";


const ChangePassword = () => {
  const [inputs, setInputs] = useState({
    password: 'password',
    confirmPassword: 'password',
  });

  const handleChange = (event: any) => {
    setInputs({
      ...inputs, 
      [event.target.name]: event.target.value
    })
  }

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="My Profile" subtitle="Please complete your informations" />        
      </div>
      <ProfileProgress title="Complete your profile" subtitle="please comlete your informations" progress={50} />
      <ProfileDetails>
        <ProfileSidebar />
        <div className="detail-content">
          <div className="page-title-holder flex-base-wrapper">
            <PageTitle title="Change Password" subtitle="You can change your password here" />
            <button className="theme-btn">Save</button>
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
                  value={inputs.password}
                  onChange={(event: any) => handleChange(event)}
                />
              }
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
                  value={inputs.confirmPassword}
                  onChange={(event: any) => handleChange(event)}
                />
              }
            />
          </div>
        </div>
      </ProfileDetails>
    </>
  )
}

export default ChangePassword