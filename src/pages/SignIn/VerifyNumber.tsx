import { Copyright } from "src/components/Sidebar/style";
import { SignInWrapper } from "./style";
import LogoRetal from "src/assets/images/retal-logo-white.svg";
import RetalImage from "src/assets/images/sign-in-img.png";
import TextField from "src/elements/Form/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "src/Hooks/useTranslation";
import SwitchLanguage from "src/elements/SwitchLanguage";

const VerifyNumber = () => {
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
            <h1>{translate("Verify your number")}</h1>
            <p>{translate("Enter the code sent to")} +966 50 680 3006</p>

            <div className="code-fields">
              <TextField
                className="textbox code-input"
                name="code-field1"
                id="code-field1"
                maxlength={1}
              />

              <TextField
                className="textbox code-input"
                name="code-field2"
                id="code-field2"
                maxlength={1}
              />

              <TextField
                className="textbox code-input"
                name="code-field3"
                id="code-field3"
                maxlength={1}
              />

              <TextField
                className="textbox code-input"
                name="code-field4"
                id="code-field4"
                maxlength={1}
              />
            </div>
            <div className="send-code-btn">
              <button onClick={() => {}} className="btn-inline mt-20 mb-3">
                {translate("Send a new code")}
              </button>
            </div>

            <button
              onClick={() => {
                navigate("/dashboard#salesTeam");
              }}
              className="theme-btn btn-primary btn-lg w-100"
            >
              {translate("Validate")}
            </button>
          </div>

          <div className="bottom-text text-center">
            <p>
              {translate("Having trouble logging into your account?")}
              <strong>
                {translate("Please contact the")}{" "}
                <Link to="/faqs">{translate("Help Center")}</Link>{" "}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default VerifyNumber;
