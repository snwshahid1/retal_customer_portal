import { Copyright } from "src/components/Sidebar/style";
import { SignInWrapper } from "./style";
import LogoRetal from "src/assets/images/retal-logo-white.svg";
import RetalImage from "src/assets/images/sign-in-img.png";
import FormField from "src/components/FormField";
import TextField from "src/elements/Form/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "src/Hooks/useTranslation";
import SwitchLanguage from "src/elements/SwitchLanguage";

const SignIn = () => {
  let { translate } = useTranslation();
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
              &copy; {translate("Retal Development. All rights reserved.")}
            </p>
          </Copyright>
        </div>
      </div>

      <div className="text-area-screen half-screen bg-gray">
        <div className="content-area">
          <SwitchLanguage className="text-end" />
          <div className="text-block">
            <h1>{translate("Hello")}</h1>
            <p>
              {translate(
                "Please enter your information to connect to your account."
              )}
            </p>

            <FormField
              label={translate("Your email or phone number")}
              control={
                <TextField
                  className="textbox textbox-v2 h-50 icon-end"
                  name="phone"
                  id="phone"
                  placeholder={translate("Your email or phone number")}
                  icon={<i className="sm-icon user-icon"></i>}
                />
              }
            />

            <button
              onClick={() => {
                navigate("/verify-number");
              }}
              className="theme-btn btn-primary btn-lg w-100 mt-20"
            >
              {translate("Connect")}
            </button>
          </div>

          <div className="bottom-text text-center">
            <p>
              {translate("Having trouble logging into your account?")}
              <strong>
                {translate("Please contact the")}
                <Link to="/faqs">{translate("Help Center")}</Link>{" "}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
