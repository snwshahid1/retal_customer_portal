import PageTitle from "src/components/PageTitle"
import ProfileProgress from "./components/ProfileProgress";
import { ProfileDetails } from "./style";
import ProfileSidebar from "./components/ProfileSidebar";
import FormField from "src/components/FormField";
import TextField from "src/elements/Form/TextField";
import { useState } from "react";


const MyProfile = () => {
  const [inputs, setInputs] = useState({
    firstName: 'Saleh',
    lastName: 'Abdullah',
    phone: '+966 50 680 3006',
    email: 'a.alsaleh@retal.com.sa'
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
        <PageTitle title="My Profile" subtitle="Find here all of your informations" />
      </div>
      <ProfileProgress title="Complete your profile" subtitle="Please comlete your informations" progress={50} />
      <ProfileDetails>
        <ProfileSidebar />
        <div className="detail-content">
          <div className="page-title-holder flex-base-wrapper">
            <PageTitle title="Personal Informations" subtitle="You can edit your personal information here" />
            <button className="theme-btn min-130">Save</button>
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
                  value={inputs.firstName}
                  onChange={(event: any) => handleChange(event)}
                />
              }
            />

            <FormField
              label="Your Last Name"
              control={
                <TextField
                  className="textbox"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={inputs.lastName}
                  onChange={(event: any) => handleChange(event)}
                />
              }
            />

            <FormField
              label="Your Phone Number"
              control={
                <TextField
                  className="textbox icon-right-long"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={inputs.phone}
                  icon={<span className="color-primary">Confirmed <i className="sm-icon verified-icon"></i></span>}
                  iconClassName='icon-end'
                  onChange={(event: any) => handleChange(event)}
                />
              }
            />

            <FormField
              label="Email"
              control={
                <TextField
                  className="textbox"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={inputs.email}
                  onChange={(event: any) => handleChange(event)}
                  icon={<span className="color-primary">Confirmed <i className="sm-icon verified-icon"></i></span>}
                  iconClassName='icon-end'
                />
              }
            />
          </div>
        </div>
      </ProfileDetails>
    </>
  )
}

export default MyProfile