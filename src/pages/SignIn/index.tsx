import { Copyright } from "src/components/Sidebar/style";
import { SignInWrapper } from "./style";
import LogoRetal from "src/assets/images/retal-logo-white.svg";
import RetalImage from "src/assets/images/sign-in-img.png";
import FormField from "src/components/FormField";
import TextField from "src/elements/Form/TextField";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  
  return (
    <SignInWrapper>
      <div className="half-screen">
        <div className="full-width-img">
          <img src={RetalImage} alt="Retal Home" />
        </div>

        <div className="content-area">
          <div className="logo">
            <img src={LogoRetal} alt="Retal" />
          </div>
          <Copyright className="hide-sm">
            <p className="fs-10">
              &copy; Retal Development. All rights reserved.
            </p>
          </Copyright>
        </div>
      </div>

      <div className="text-area-screen half-screen bg-gray">
        <div className="content-area">
          <div className="switch-lang dark-color text-end">
            <Link to="#">
              العربية
            </Link>
          </div>

          <div className="text-block">
            <h1>Hello</h1>
            <p>Please enter your information to connect to your account.</p>

            <FormField
              label="Your email or phone number"
              control={
                <TextField
                  className="textbox textbox-v2 h-50 icon-end"
                  name="phone"
                  id="phone"
                  placeholder="Your email or phone number"
                  icon={<i className="sm-icon user-icon"></i>}
                />
              }
            />

            <button
              onClick={() => {navigate('/verify-number')}}
              className="theme-btn btn-primary btn-lg w-100 mt-20"
            >
              Connect
            </button>
          </div>

          <div className="bottom-text text-center">
            <p>
              Having trouble logging into your account?
              <strong>Please contact the <Link to="/faqs">Help Center</Link> </strong>
            </p> 
          </div>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
